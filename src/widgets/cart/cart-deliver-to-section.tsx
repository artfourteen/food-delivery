import { View } from 'react-native';
import { CustomText } from '@shared/ui';

import PinLocation from '@assets/img/icons/pin-location.svg';

export const CartDeliverToSection = () => {
  return (
    <View className="bg-white rounded-2xl">
      <View className="p-5 border-b border-gray-200">
        <CustomText as="text-subhead" className="font-dm-sans-bold">
          Deliver to
        </CustomText>
      </View>

      <View className="flex-row items-stretch gap-3 p-5">
        <View className="w-20 h-20 rounded-2xl bg-orange-50" />

        <View className="justify-between flex-1">
          <CustomText
            as="text-caption"
            className="font-dm-sans-medium text-pretty"
          >
            (323) 238-0678 909-1/2 E 49th St Los Angeles, California(CA), 90011
          </CustomText>

          <View className="flex-row gap-1 items-center">
            <PinLocation />
            <CustomText as="text-caption" className="font-dm-sans-medium">
              1.5 km
            </CustomText>
          </View>
        </View>
      </View>
    </View>
  );
};
