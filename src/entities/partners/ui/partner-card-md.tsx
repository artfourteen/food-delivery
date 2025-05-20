import { cn } from '@shared/lib/utils';
import { Image, View } from 'react-native';
import { CustomText, Dot } from '@shared/ui';
import { Fragment } from 'react';
import Dollar from '@assets/img/icons/dollar.svg';
import { PartnerEntity } from '@entities/partners/model/partners';

import ShieldCheck from '@assets/img/icons/shield-check.svg';
import StarWhite from '@assets/img/icons/star-white.svg';
import PinLocation from '@assets/img/icons/pin-location.svg';
import burgerKing from '@assets/img/partners/burger-king.png';

interface PartnerCardMdProps extends PartnerEntity {
  withUnderLine?: boolean;
  className?: string;
}

export const PartnerCardMd = ({
  distance,
  rating,
  freeShipping,
  name,
  open,
  categories,
  withUnderLine = false,
  className,
}: PartnerCardMdProps) => {
  return (
    <View
      className={cn(
        {
          'border-b border-gray-100': withUnderLine,
        },
        className,
      )}
    >
      <View className="w-full max-h-[172px] rounded-2xl overflow-hidden bg-orange-50 mb-4">
        <Image source={burgerKing} className="w-full h-full" />
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

        {categories.map((category, index) => (
          <Fragment key={category}>
            <CustomText
              as="text-caption2"
              className="text-gray-400 font-dm-sans-medium"
            >
              {category}
            </CustomText>

            {categories.length - 1 !== index && <Dot />}
          </Fragment>
        ))}
      </View>

      <View className="flex-row items-center">
        <View className="flex-row items-center gap-1 bg-orange-400 pl-1 pr-2 py-0.5 rounded-lg">
          <StarWhite />
          <CustomText
            as="text-caption2"
            className="font-dm-sans-medium text-white"
          >
            {rating}
          </CustomText>
        </View>

        <Dot className="ml-3 mr-1.5" />

        <View className="flex-row gap-1 items-center">
          <PinLocation />
          <CustomText
            as="text-caption2"
            className="font-dm-sans-medium text-gray-800"
          >
            {distance}km
          </CustomText>
        </View>

        {freeShipping && (
          <>
            <Dot className="ml-3 mr-1.5" />

            <View className="flex-row gap-1 items-center">
              <Dollar />
              <CustomText
                as="text-caption2"
                className="font-dm-sans-medium text-gray-800"
              >
                Free shipping
              </CustomText>
            </View>
          </>
        )}
      </View>
    </View>
  );
};
