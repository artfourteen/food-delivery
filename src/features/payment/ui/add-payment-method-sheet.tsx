import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { bottomSheetStyles } from '@shared/constants';
import { View } from 'react-native';
import { Container, CustomButton, CustomInput, CustomText } from '@shared/ui';
import { forwardRef, useMemo } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface AddPaymentMethodSheetProps {
  handleClose: () => void;
}

export const AddPaymentMethodSheet = forwardRef<
  BottomSheetMethods,
  AddPaymentMethodSheetProps
>(({ handleClose }, ref) => {
  const snapPoints = useMemo(() => ['46%'], []);

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
            <CustomInput placeholder="3999 - 1234 - 5678 - 0000" />

            <View className="flex-row gap-4">
              <CustomInput placeholder="MM/YY" className="flex-1" />
              <CustomInput placeholder="CVC" className="flex-1" />
            </View>
          </View>

          <View className="gap-2">
            <CustomButton>
              <CustomText className="text-white">Add Card</CustomText>
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
