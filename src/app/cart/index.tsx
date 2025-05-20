import { ScrollView, View } from 'react-native';
import { Container, ScreenHeader } from '@shared/ui';
import { CartDeliverToSection, CartYourOrderSection } from '@widgets/cart';
import { CartPaymentSection } from '@widgets/cart/cart-payment-section';
import { useRef } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { AddPaymentMethodSheet } from '@features/payment/ui';

export default function CartScreen() {
  const addPaymentSheetRef = useRef<BottomSheetMethods>(null);

  const handlePaymentSheetOpen = () => addPaymentSheetRef.current?.expand();
  const handlePaymentSheetClose = () => addPaymentSheetRef.current?.close();

  return (
    <>
      <View>
        <ScreenHeader title="Cart" />

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
