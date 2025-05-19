import { ScrollView, View } from 'react-native';
import { CustomText } from '@shared/ui/custom-text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container } from '@shared/ui/container';
import { CartDeliverToSection, CartYourOrderSection } from '@widgets/cart';
import { CartPaymentSection } from '@widgets/cart/cart-payment-section';
import { useRef } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { AddPaymentMethodSheet } from '@widgets/add-payment-method-sheet';

export default function CartScreen() {
  const addPaymentSheetRef = useRef<BottomSheetMethods>(null);

  const handlePaymentSheetOpen = () => addPaymentSheetRef.current?.expand();
  const handlePaymentSheetClose = () => addPaymentSheetRef.current?.close();

  return (
    <>
      <View>
        <SafeAreaView className="bg-white border-b border-gray-200">
          <CustomText
            as="text-subhead"
            className="fixed top-0 z-10 text-center font-dm-sans-medium"
          >
            Cart
          </CustomText>
        </SafeAreaView>

        <ScrollView
          className="pt-4"
          contentContainerClassName="pb-20"
          showsVerticalScrollIndicator={false}
        >
          <Container>
            <View className="gap-4">
              <CartDeliverToSection />

              <CartYourOrderSection />
            </View>
          </Container>

          <CartPaymentSection handlePaymentSheetOpen={handlePaymentSheetOpen} />
        </ScrollView>
      </View>

      <AddPaymentMethodSheet
        ref={addPaymentSheetRef}
        handleClose={handlePaymentSheetClose}
      />
    </>
  );
}
