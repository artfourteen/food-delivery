import { Pressable, View } from 'react-native';
import { CustomText } from '@shared/ui';
import { ItemCartCard } from '@entities/items/ui';
import { cn, handleError } from '@shared/lib/utils';
import { CartEntity } from '@entities/cart/model';
import { useMemo } from 'react';
import Toast from 'react-native-toast-message';
import { cartService } from '@entities/cart/api';
import { useQueryClient } from '@tanstack/react-query';

interface CartYourOrderSectionProps {
  cart: CartEntity;
}

export const CartYourOrderSection = ({ cart }: CartYourOrderSectionProps) => {
  const subtotal = useMemo(() => {
    return (
      cart?.items.reduce((sum, item) => sum + Number(item.subtotal), 0) ?? 0
    );
  }, [cart]);
  const queryClient = useQueryClient();

  const handleClearCart = async () => {
    try {
      await cartService.clearCart();
      await queryClient.invalidateQueries({ queryKey: ['cart'] });
    } catch (e) {
      const errorMessage = await handleError(e);
      Toast.show({
        type: 'error',
        text1: errorMessage,
      });
    }
  };

  return (
    <View className="bg-white rounded-2xl">
      <View className="p-5 border-b border-gray-100">
        <View className="flex-row items-center justify-between">
          <CustomText as="text-subhead" className="font-dm-sans-bold">
            Your order
          </CustomText>

          {!!cart.items.length && (
            <Pressable onPress={handleClearCart}>
              <CustomText className="text-gray-400">Clear</CustomText>
            </Pressable>
          )}
        </View>

        <View>
          {!cart.items.length ? (
            <CustomText className="py-9 text-center text-gray-400">
              Your cart is empty
            </CustomText>
          ) : (
            cart.items.map((item, index) => (
              <ItemCartCard
                key={item.id}
                className={cn('py-5', {
                  'border-b border-gray-100': cart.items.length - 1 !== index,
                })}
                {...item}
              />
            ))
          )}
        </View>
      </View>

      {!!cart.items.length && (
        <View className="p-5">
          <View className="flex-row items-center justify-between pb-4 border-b border-gray-100">
            <CustomText as="text-caption">
              Subtotal ({cart.items.length} items)
            </CustomText>
            <CustomText as="text-caption">${subtotal}</CustomText>
          </View>
          <View className="flex-row items-center justify-between py-4 border-b border-gray-100">
            <CustomText as="text-caption">Delivery</CustomText>
            <CustomText as="text-caption">$0.00</CustomText>
          </View>
          <View className="flex-row items-center justify-between pt-4">
            <CustomText as="text-subhead" className="font-dm-sans-medium">
              Total
            </CustomText>
            <CustomText
              as="text-subhead"
              className="font-dm-sans-medium text-orange-400"
            >
              ${cart.total}
            </CustomText>
          </View>
        </View>
      )}
    </View>
  );
};
