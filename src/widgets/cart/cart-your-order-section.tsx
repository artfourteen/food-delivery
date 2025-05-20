import { View } from 'react-native';
import { CustomText } from '@shared/ui';
import { ItemCartCard } from '@entities/items/ui';
import { cn } from '@shared/lib/utils';

export const CartYourOrderSection = () => {
  return (
    <View className="bg-white rounded-2xl">
      <View className="p-5 border-b border-gray-100">
        <CustomText as="text-subhead" className="font-dm-sans-bold">
          Your order
        </CustomText>

        <View>
          {Array.from({ length: 3 }).map((_, i) => (
            <ItemCartCard
              key={i}
              className={cn('py-5', {
                'border-b border-gray-100': i !== 2,
              })}
            />
          ))}
        </View>
      </View>

      <View className="p-5">
        <View className="flex-row items-center justify-between pb-4 border-b border-gray-100">
          <CustomText as="text-caption">Subtotal (3 items)</CustomText>
          <CustomText as="text-caption">$36.98</CustomText>
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
            $36.98
          </CustomText>
        </View>
      </View>
    </View>
  );
};
