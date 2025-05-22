import { Image, Pressable, View } from 'react-native';
import { CustomText } from '@shared/ui';
import { useState } from 'react';
import { Minus, Plus, X } from 'lucide-react-native';
import { cn, handleError } from '@shared/lib/utils';

import whopper from '@assets/img/partners/whopper.png';
import { CartItemEntity } from '@entities/cart/model';
import Toast from 'react-native-toast-message';
import { cartService } from '@entities/cart/api';
import { useQueryClient } from '@tanstack/react-query';

interface ItemCartCardProps extends CartItemEntity {
  className?: string;
}

export const ItemCartCard = ({
  id,
  className,
  item,
  subtotal,
  quantity,
}: ItemCartCardProps) => {
  const [count, setCount] = useState<number>(quantity);

  const queryClient = useQueryClient();

  const updateQuantity = async (newQuantity: number) => {
    const prevQuantity = count;
    setCount(newQuantity);

    try {
      await cartService.updateItem(id, { quantity: newQuantity });
      await queryClient.invalidateQueries({ queryKey: ['cart'] });
    } catch (e) {
      setCount(prevQuantity);
      const errorMessage = await handleError(e);
      Toast.show({ type: 'error', text1: errorMessage });
    }
  };

  const handleIncrement = () => updateQuantity(count + 1);
  const handleDecrement = () => {
    if (count > 1) updateQuantity(count - 1);
  };

  const handleRemove = async () => {
    try {
      await cartService.deleteItem(id);
      await queryClient.invalidateQueries({ queryKey: ['cart'] });
    } catch (e) {
      const errorMessage = await handleError(e);
      Toast.show({ type: 'error', text1: errorMessage });
    }
  };

  return (
    <View className={cn('flex-row items-stretch gap-4', className)}>
      <View className="w-20 h-20 items-center justify-center">
        <Image source={whopper} className="h-12" resizeMode="contain" />
      </View>

      <View className="py-2 gap-2">
        <CustomText
          as="text-subhead"
          className="font-dm-sans-medium truncate max-w-64"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item.name}
        </CustomText>

        <View className="flex-row items-center gap-4">
          <View className="bg-gray-100 rounded-xl flex-row p-2 gap-2">
            {count === 1 ? (
              <Pressable
                onPress={handleRemove}
                className="bg-red-500 rounded-full items-center justify-center p-1 active:opacity-80"
              >
                <X color="#f3f4f6" size={10} />
              </Pressable>
            ) : (
              <Pressable
                onPress={handleDecrement}
                className="bg-gray-300 rounded-full items-center justify-center p-1 active:opacity-80"
              >
                <Minus color="#f3f4f6" size={10} />
              </Pressable>
            )}

            <View className="w-6 items-center justify-center">
              <CustomText as="text-caption2" className="font-dm-sans-medium">
                {count}
              </CustomText>
            </View>

            <Pressable
              onPress={handleIncrement}
              className="bg-orange-400 rounded-full items-center justify-center p-1 active:opacity-80"
            >
              <Plus color="#f3f4f6" size={10} />
            </Pressable>
          </View>

          <CustomText
            as="text-caption"
            className="text-orange-400 font-dm-sans-medium"
          >
            ${subtotal}
          </CustomText>
        </View>
      </View>
    </View>
  );
};
