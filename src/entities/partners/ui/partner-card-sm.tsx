import { Image, View } from 'react-native';
import { CustomText } from '@shared/ui/custom-text';
import { Dot } from '@shared/ui/dot';
import { PartnerEntity } from '@entities/partners/model/partners';

import ShieldCheck from '@assets/img/icons/shield-check.svg';
import StarWhite from '@assets/img/icons/star-white.svg';
import subway from '@assets/img/partners/subway.png';

export const PartnerCardSm = ({
  open,
  name,
  distance,
  rating,
  address,
  freeShipping,
}: PartnerEntity) => {
  return (
    <View>
      <View className="min-w-[205px] max-h-[116px] rounded-2xl overflow-hidden bg-orange-50 mb-4">
        <Image source={subway} className="w-full h-full" />
      </View>

      <View className="flex-row items-center gap-0.5 mb-1">
        <CustomText as="text-subhead" className="font-dm-sans-medium">
          {name}
        </CustomText>
        <ShieldCheck />
      </View>

      <View className="flex-row items-center gap-2 mb-3">
        {open ? (
          <CustomText
            as="text-caption2"
            className="text-green-600 font-dm-sans-medium"
          >
            Open
          </CustomText>
        ) : (
          <CustomText
            as="text-caption2"
            className="text-red-500 font-dm-sans-medium"
          >
            Closed
          </CustomText>
        )}

        <Dot />

        <CustomText
          as="text-caption2"
          className="text-gray-400 font-dm-sans-medium"
        >
          {address}
        </CustomText>
      </View>

      <View className="flex-row items-center gap-2">
        <View className="flex-row items-center gap-1 bg-orange-400 pl-1 pr-2 py-0.5 rounded-full">
          <StarWhite />
          <CustomText
            as="text-caption2"
            className="font-dm-sans-medium text-white"
          >
            {rating}
          </CustomText>
        </View>

        <Dot />

        <CustomText
          as="text-caption2"
          className="font-dm-sans-medium text-gray-800"
        >
          {distance}km
        </CustomText>

        {freeShipping && (
          <>
            <Dot />

            <CustomText
              as="text-caption2"
              className="font-dm-sans-medium text-gray-800"
            >
              Free shipping
            </CustomText>
          </>
        )}
      </View>
    </View>
  );
};
