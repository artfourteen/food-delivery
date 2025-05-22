import { ScrollView, View } from 'react-native';
import { Container, CustomText, ScreenHeader } from '@shared/ui';
import { CartDeliverToSection, CartYourOrderSection } from '@widgets/cart';
import { CartPaymentSection } from '@widgets/cart/cart-payment-section';
import { useRef } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { AddPaymentMethodSheet } from '@features/payment/ui';
import { useCartQuery } from '@shared/hooks/query/cart/use-cart-query';

export default function CartScreen() {
  const { data: cart, isPending } = useCartQuery();

  const addPaymentSheetRef = useRef<BottomSheetMethods>(null);

  const handlePaymentSheetOpen = () => addPaymentSheetRef.current?.expand();
  const handlePaymentSheetClose = () => addPaymentSheetRef.current?.close();

  return (
    <>
      <View>
        <ScreenHeader title="Cart" />

        {isPending ? (
          <CustomText className="py-9 text-center text-gray-400">
            Loading...
          </CustomText>
        ) : !cart ? (
          <CustomText className="py-9 text-center text-gray-400">
            Something went wrong
          </CustomText>
        ) : (
          <ScrollView
            className="pt-4"
            contentContainerClassName="pb-20"
            showsVerticalScrollIndicator={false}
          >
            <View className="justify-between min-h-[776px]">
              <Container>
                <View className="gap-4">
                  <CartDeliverToSection />

                  <CartYourOrderSection cart={cart} />
                </View>
              </Container>

              <CartPaymentSection
                cart={cart}
                handlePaymentSheetOpen={handlePaymentSheetOpen}
              />
            </View>
          </ScrollView>
        )}
      </View>

      <AddPaymentMethodSheet
        ref={addPaymentSheetRef}
        handleClose={handlePaymentSheetClose}
      />
    </>
  );
}
