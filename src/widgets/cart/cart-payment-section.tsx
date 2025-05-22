import { Container, CustomButton, CustomText } from '@shared/ui';
import { View } from 'react-native';
import { ChevronRight, Plus } from 'lucide-react-native';
import { PaymentCard } from '@features/payment/ui';
import { CartEntity } from '@entities/cart/model';
import { usePaymentCardsQuery } from '@shared/hooks/query/payment-cards';
import { handleError } from '@shared/lib/utils';
import Toast from 'react-native-toast-message';
import { ordersService } from '@entities/orders/api';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Modal } from '@shared/ui/modal';
import { useRouter } from 'expo-router';
import { PaymentMethodType } from '@entities/orders/model/orders';

interface CartPaymentSectionProps {
  handlePaymentSheetOpen: () => void;
  cart: CartEntity;
}

export const CartPaymentSection = ({
  handlePaymentSheetOpen,
  cart,
}: CartPaymentSectionProps) => {
  const { data: paymentCards } = usePaymentCardsQuery();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleCreateOrder = async (
    paymentMethod: PaymentMethodType,
    paymentCardId?: string,
  ) => {
    try {
      await ordersService.create({
        paymentMethod,
        paymentCardId,
        deliveryAddress: 'Address',
      });
      await queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
      setOpen(true);
    } catch (e) {
      const errorMessage = await handleError(e);
      Toast.show({
        type: 'error',
        text1: errorMessage,
      });
    }
  };

  const handleConfirm = () => {
    setOpen(false);
    router.push('/');
  };

  return (
    <>
      <View className="bg-white pt-9 pb-14 mt-4">
        <Container className="max-w-[85%] gap-4">
          <PaymentCard
            title={`$${cart.total}`}
            subTitle="Cash"
            variant="pressable"
            type="cash"
            onPress={() => handleCreateOrder('CASH')}
          />

          {paymentCards?.map((paymentCard) => (
            <PaymentCard
              key={paymentCard.id}
              title={`$${cart.total}`}
              subTitle={`****-****-****-${paymentCard.lastFourDigits}`}
              variant="pressable"
              type="card"
              onPress={() => handleCreateOrder('CARD', paymentCard.id)}
            />
          ))}

          <CustomButton
            onPress={handlePaymentSheetOpen}
            variant="outline"
            className="justify-between"
          >
            <View className="flex-row items-center gap-3">
              <View className="w-12 h-12 rounded-full items-center justify-center bg-gray-100">
                <Plus width={24} height={24} />
              </View>

              <CustomText as="text-caption" className="font-dm-sans-medium">
                Add payment method
              </CustomText>
            </View>

            <ChevronRight color="#9ca3af" />
          </CustomButton>
        </Container>
      </View>

      {open && (
        <Modal
          title="You ordered successfully"
          subTitle="You successfully place an order, your order is confirmed and delivered within 20 minutes. Wish you enjoy the food"
          close={() => setOpen(false)}
          buttonText="KEEP BROWSING"
          onPress={handleConfirm}
        />
      )}
    </>
  );
};
