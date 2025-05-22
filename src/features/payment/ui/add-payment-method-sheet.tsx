import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { bottomSheetStyles } from '@shared/constants';
import { View } from 'react-native';
import {
  Container,
  ControlledInput,
  CustomButton,
  CustomInput,
  CustomText,
} from '@shared/ui';
import { forwardRef, useEffect, useMemo } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { handleError } from '@shared/lib/utils';
import Toast from 'react-native-toast-message';
import { paymentCardsService } from '@entities/payment-cards/api';
import { useQueryClient } from '@tanstack/react-query';

interface AddPaymentMethodSheetProps {
  handleClose: () => void;
}

export const createPaymentMethodSchema = z.object({
  cardHolderName: z
    .string()
    .min(1, 'Full name is required')
    .regex(/^[a-zA-Z\s]+$/, 'Full name should only contain letters and spaces'),

  cardNumber: z
    .string()
    .min(12, 'Card number should be at least 12 digits')
    .max(19, 'Card number should not exceed 19 digits')
    .regex(/^\d+$/, 'Card number must contain only digits'),

  expiryMonth: z
    .string()
    .regex(/^(0[1-9]|1[0-2])$/, 'Expiry month must be between 01 and 12'),

  expiryYear: z
    .string()
    .regex(
      /^20[2-9]\d$/,
      'Expiry year must be a valid future year (e.g., 2025, 2030)',
    ),

  cvv: z
    .string()
    .min(3, 'CVV should be at least 3 digits')
    .max(4, 'CVV should be at most 4 digits')
    .regex(/^\d+$/, 'CVV must contain only digits'),
});

type CreatePaymentMethodData = z.infer<typeof createPaymentMethodSchema>;

export const AddPaymentMethodSheet = forwardRef<
  BottomSheetMethods,
  AddPaymentMethodSheetProps
>(({ handleClose }, ref) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    register,
  } = useForm<CreatePaymentMethodData>({
    resolver: zodResolver(createPaymentMethodSchema),
    defaultValues: {
      cardHolderName: '',
      cardNumber: '',
      expiryMonth: '',
      expiryYear: '',
      cvv: '',
      // @ts-expect-error
      expiryDate: '',
    },
  });

  useEffect(() => {
    // @ts-ignore
    register('expiryDate');
  }, [register]);

  const snapPoints = useMemo(() => ['55%'], []);
  const queryClient = useQueryClient();

  const onSubmit = async (data: CreatePaymentMethodData) => {
    console.log('Parsed for API:', {
      ...data,
      expiryMonth: data.expiryMonth.padStart(2, '0'),
      expiryYear: data.expiryYear,
    });

    try {
      await paymentCardsService.create(data);
      await queryClient.invalidateQueries({ queryKey: ['paymentCards'] });
      handleClose();
    } catch (e) {
      const errorMessage = await handleError(e);
      Toast.show({
        type: 'error',
        text1: errorMessage,
      });
    }
  };

  return (
    <BottomSheet
      ref={ref}
      snapPoints={snapPoints}
      style={bottomSheetStyles.base}
      handleStyle={bottomSheetStyles.handle}
      handleIndicatorStyle={bottomSheetStyles.handleIndicator}
      index={-1}
      enableDynamicSizing={false}
      enablePanDownToClose
    >
      <BottomSheetView>
        <View className="py-6 border-b border-gray-100">
          <CustomText
            as="text-caption"
            className="text-center font-dm-sans-bold"
          >
            Add payment method
          </CustomText>
        </View>

        <Container className="max-w-[85%]">
          <View className="py-6 gap-4">
            <ControlledInput
              control={control}
              name="cardHolderName"
              placeholder="Full name"
              autoCapitalize="words"
              onChangeText={(text) => {
                const cleaned = text.replace(/[^a-zA-Z\s]/g, '');
                setValue('cardHolderName', cleaned);
              }}
              error={errors.cardHolderName?.message}
            />
            <ControlledInput
              control={control}
              name="cardNumber"
              placeholder="3999 - 1234 - 5678 - 0000"
              keyboardType="numeric"
              maxLength={19}
              onChangeText={(text) => {
                const cleaned = text.replace(/[^0-9]/g, '');
                setValue('cardNumber', cleaned);
              }}
              error={errors.cardNumber?.message}
            />

            <View className="flex-row gap-4">
              <ControlledInput
                control={control}
                name="expiryDate"
                placeholder="MM/YYYY"
                keyboardType="numeric"
                maxLength={7}
                onChangeText={(text) => {
                  const cleaned = text.replace(/[^0-9]/g, '');
                  let formatted = cleaned;

                  if (cleaned.length > 2) {
                    formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 6)}`;
                  }

                  // @ts-ignore
                  setValue('expiryDate', formatted);
                  setValue('expiryMonth', cleaned.slice(0, 2));
                  setValue('expiryYear', `${cleaned.slice(2, 6)}`);
                }}
                error={
                  errors.expiryMonth?.message || errors.expiryYear?.message
                }
              />

              <ControlledInput
                control={control}
                name="cvv"
                placeholder="CVC"
                className="flex-grow"
                keyboardType="numeric"
                maxLength={4}
                onChangeText={(text) => {
                  const cleaned = text.replace(/[^0-9]/g, '');
                  setValue('cvv', cleaned);
                }}
                error={errors.cvv?.message}
              />
            </View>
          </View>

          <View className="gap-2">
            <CustomButton>
              <CustomText
                className="text-white"
                onPress={handleSubmit(onSubmit)}
                disabled={isSubmitting}
              >
                Add Card
              </CustomText>
            </CustomButton>
            <CustomButton onPress={handleClose} variant="outline">
              <CustomText>Cancel</CustomText>
            </CustomButton>
          </View>
        </Container>
      </BottomSheetView>
    </BottomSheet>
  );
});
AddPaymentMethodSheet.displayName = 'AddPaymentMethodSheet';
