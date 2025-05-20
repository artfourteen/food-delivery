import { bottomSheetStyles } from '@shared/constants';
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Container, CustomButton, CustomText, SheetHeader } from '@shared/ui';
import { forwardRef, useMemo, useRef } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { CreditCard } from 'lucide-react-native';
import { AddPaymentMethodSheet, PaymentCard } from '@features/payment/ui';

export const PaymentMethodsSheet = forwardRef<BottomSheetMethods>((_, ref) => {
  const snapPoints = useMemo(() => ['100%'], []);
  const { top } = useSafeAreaInsets();
  const addPaymentSheetRef = useRef<BottomSheetMethods>(null);

  const handlePaymentSheetOpen = () => addPaymentSheetRef.current?.expand();
  const handlePaymentSheetClose = () => addPaymentSheetRef.current?.close();

  return (
    <>
      <BottomSheet
        ref={ref}
        index={-1}
        topInset={top}
        enablePanDownToClose
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        style={bottomSheetStyles.base}
        handleStyle={bottomSheetStyles.handle}
        handleIndicatorStyle={bottomSheetStyles.handleIndicator}
      >
        <BottomSheetView>
          <SheetHeader title="Payment Methods" />

          <View className="pt-12 pb-6">
            <Container className="max-w-[85%] justify-between h-full pb-28">
              {false ? (
                <View className="items-center gap-10">
                  <View className="w-24 h-24 rounded-2xl bg-orange-50 items-center justify-center">
                    <CreditCard size={32} color="#9ca3af" />
                  </View>

                  <View className="items-center gap-1">
                    <CustomText
                      as="h3"
                      className="font-dm-sans-bold text-center"
                    >
                      Don&apos;t have any card
                    </CustomText>
                    <CustomText className="text-gray-400 text-center">
                      It looks like you don’t have a credit or debit card yet.
                      Please add your cards.
                    </CustomText>
                  </View>
                </View>
              ) : (
                <BottomSheetScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerClassName="flex-grow"
                >
                  <View className="gap-4">
                    <PaymentCard title="************9709" />
                    <PaymentCard title="************1523" />
                  </View>
                </BottomSheetScrollView>
              )}

              <CustomButton onPress={handlePaymentSheetOpen}>
                <CustomText className="text-white font-dm-sans-medium">
                  Add Card
                </CustomText>
              </CustomButton>
            </Container>
          </View>
        </BottomSheetView>
      </BottomSheet>

      <AddPaymentMethodSheet
        ref={addPaymentSheetRef}
        handleClose={handlePaymentSheetClose}
      />
    </>
  );
});
PaymentMethodsSheet.displayName = 'PaymentMethodsSheet';
