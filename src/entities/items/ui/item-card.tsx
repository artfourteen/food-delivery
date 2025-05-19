import { View } from 'react-native';
import { CustomText } from '@shared/ui/custom-text';
import { Dot } from '@shared/ui/dot';
import { ItemEntity } from '@entities/items/model/items';

export const ItemCard = ({ price, name, category }: ItemEntity) => {
  return (
    <View className="w-[145px]">
      <View className="h-[145px] rounded-2xl bg-orange-50 mb-2" />

      <CustomText as="text-caption" className="font-medium mb-0.5">
        {name}
      </CustomText>

      <View className="flex-row gap-2 items-center">
        <CustomText as="text-caption2" className="text-green-600 font-medium">
          ${price}
        </CustomText>

        <Dot />

        <CustomText as="text-caption2" className="text-gray-400">
          {category}
        </CustomText>
      </View>
    </View>
  );
};
