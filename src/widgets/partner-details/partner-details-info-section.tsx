import { View } from 'react-native';
import { Container, CustomText, Dot } from '@shared/ui';
import { PartnerEntity } from '@entities/partners/model/partners';
import { isOpenNow } from '@shared/lib/utils';

import ShieldCheck from '@assets/img/icons/shield-check.svg';
import StarWhite from '@assets/img/icons/star-white.svg';
import PinLocation from '@assets/img/icons/pin-location.svg';
import Dollar from '@assets/img/icons/dollar.svg';

export const PartnerDetailsInfoSection = ({
  name,
  address,
  rating,
  averageWaitTime,
  deliveryFee,
  openFrom,
  openTo,
}: PartnerEntity) => {
  const open = isOpenNow(openFrom, openTo);

  return (
    <>
      <Container className="max-w-[85%]">
        <View className="gap-1 pb-4 mb-6 border-b border-gray-100">
          <View className="flex-row items- justify-between">
            <CustomText as="headline" className="font-dm-sans-medium">
              {name}
            </CustomText>
            <ShieldCheck />
          </View>

          <View className="flex-row items-center gap-2 flex-wrap">
            {open ? (
              <CustomText
                as="text-caption"
                className="text-green-600 font-dm-sans-medium"
              >
                Open
              </CustomText>
            ) : (
              <CustomText
                as="text-caption"
                className="text-red-500 font-dm-sans-medium"
              >
                Closed
              </CustomText>
            )}

            <Dot />

            <CustomText
              as="text-caption"
              className="font-dm-sans-medium text-gray-400"
            >
              {address}
            </CustomText>
          </View>
        </View>
      </Container>

      <View className="mb-6">
        <Container className="max-w-[85%]">
          <View className="flex-row items-center">
            <View className="flex-row items-center gap-1 bg-orange-400 pl-1 pr-2 py-0.5 rounded-lg">
              <StarWhite />
              <CustomText
                as="text-caption"
                className="font-dm-sans-medium text-white"
              >
                {rating ?? 0}
              </CustomText>
            </View>

            <Dot className="ml-3 mr-1.5" />

            <View className="flex-row gap-1 items-center">
              <PinLocation />
              <CustomText
                as="text-caption"
                className="font-dm-sans-medium text-gray-800"
              >
                {averageWaitTime} Mins
              </CustomText>
            </View>

            {!deliveryFee && (
              <>
                <Dot className="ml-3 mr-1.5" />

                <View className="flex-row gap-1 items-center">
                  <Dollar />
                  <CustomText
                    as="text-caption"
                    className="font-dm-sans-medium text-gray-800"
                  >
                    Free shipping
                  </CustomText>
                </View>
              </>
            )}
          </View>
        </Container>
      </View>
    </>
  );
};
