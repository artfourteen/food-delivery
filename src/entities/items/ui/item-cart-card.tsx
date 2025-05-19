import { Image, Pressable, View } from 'react-native';

import whopper from '@assets/img/partners/whopper.png';
import { CustomText } from '@shared/ui/custom-text';
import { useState } from 'react';
import { Minus, Plus } from 'lucide-react-native';
import { cn } from '@shared/lib/utils';

interface ItemCartCardProps {
  className?: string;
}

export const ItemCartCard = ({ className }: ItemCartCardProps) => {
  const [count, setCount] = useState<number>(1);

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
          Prime Beef - Pizza Beautiful
        </CustomText>

        <View className="flex-row items-center gap-4">
          <View className="bg-gray-100 rounded-xl flex-row p-2 gap-2">
            <Pressable
              onPress={() => setCount((prevState) => prevState - 1)}
              className="bg-gray-300 rounded-full items-center justify-center p-1 active:opacity-80"
            >
              <Minus color="#f3f4f6" size={10} />
            </Pressable>

            <View className="w-6 items-center justify-center">
              <CustomText as="text-caption2" className="font-dm-sans-medium">
                {count}
              </CustomText>
            </View>

            <Pressable
              onPress={() => setCount((prevState) => prevState + 1)}
              className="bg-orange-400 rounded-full items-center justify-center p-1 active:opacity-80"
            >
              <Plus color="#f3f4f6" size={10} />
            </Pressable>
          </View>

          <CustomText
            as="text-caption"
            className="text-orange-400 font-dm-sans-medium"
          >
            $15.99
          </CustomText>
        </View>
      </View>
    </View>
  );
};
