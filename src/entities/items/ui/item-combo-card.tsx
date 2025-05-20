import { Pressable, View } from 'react-native';
import { CustomText, Dot } from '@shared/ui';
import { ItemEntity } from '@entities/items/model/items';
import { cn } from '@shared/lib/utils';

import StarOrange from '@assets/img/icons/star-orange.svg';
import StarGray from '@assets/img/icons/star-gray.svg';

interface IItemComboCardProps extends ItemEntity {
  className?: string;
}

export const ItemComboCard = ({
  liked,
  name,
  price,
  category,
  className,
}: IItemComboCardProps) => {
  return (
    <View className={cn('flex-row items-center gap-4', className)}>
      <View className="w-20 h-20 rounded-2xl bg-orange-50" />

      <View className="flex-row items-start justify-between gap-4 flex-1">
        <View className="gap-2">
          <CustomText as="text-caption" className="font-dm-sans-medium">
            {name}
          </CustomText>

          <View className="flex-row gap-2 items-center">
            <CustomText
              as="text-caption2"
              className="font-dm-sans-medium text-orange-400"
            >
              ${price}
            </CustomText>

            <Dot />

            <CustomText
              as="text-caption2"
              className="font-dm-sans-medium text-gray-400"
            >
              {category}
            </CustomText>
          </View>
        </View>

        <Pressable>{liked ? <StarOrange /> : <StarGray />}</Pressable>
      </View>
    </View>
  );
};
