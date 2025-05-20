import { View } from 'react-native';
import { CustomText } from '@shared/ui';

import Sandwich from '@assets/img/categories/sandwich.svg';

export const CategoryCard = ({ category }: { category: string }) => {
  return (
    <View className="gap-2 items-center">
      <View className="w-[100px] h-[100px] rounded-full bg-orange-50 items-center justify-center">
        <Sandwich />
      </View>
      <CustomText className="font-dm-sans-medium">{category}</CustomText>
    </View>
  );
};
