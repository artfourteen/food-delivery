import { View } from 'react-native';
import { CustomText } from '@shared/ui/custom-text';
import { Dot } from '@shared/ui/dot';
import { CustomButton } from '@shared/ui/custom-button';
import { cn } from '@shared/lib/utils';

import ShieldCheck from '@assets/img/icons/shield-check.svg';

interface HistoryCardProps {
  handleOpenReviewSheet: () => void;
  status: 'inProcess' | 'completed' | 'canceled';
}

export const HistoryCard = ({
  handleOpenReviewSheet,
  status,
}: HistoryCardProps) => {
  return (
    <View className="bg-white p-4 rounded-2xl">
      <View className="flex-row items-center justify-between border-b border-gray-100 pb-4">
        <CustomText
          as="text-caption"
          className={cn('font-dm-sans-medium', {
            'text-green-600': status === 'completed',
            'text-red-500': status === 'canceled',
            'text-yellow-500': status === 'inProcess',
          })}
        >
          {status === 'completed'
            ? 'Completed'
            : status === 'canceled'
              ? 'Cancelled'
              : 'In process'}
        </CustomText>
        <CustomText
          as="text-caption"
          className="text-gray-400 font-dm-sans-medium"
        >
          Tuesday, 03 March 2023
        </CustomText>
      </View>

      <View className="gap-4 mt-4">
        <View className="flex-row items-center gap-3">
          <View className="w-24 h-24 bg-orange-50 rounded-2xl" />

          <View className="gap-0.5">
            <View className="flex-row items-center gap-0.5">
              <CustomText as="text-subhead" className="font-dm-sans-medium">
                Starbucks
              </CustomText>
              <ShieldCheck />
            </View>

            <CustomText
              as="text-caption"
              className="font-dm-sans-medium text-gray-400"
            >
              8700 Beverly, CA 90048
            </CustomText>

            <View className="flex-row items-center gap-2">
              <CustomText
                as="text-caption"
                className="font-dm-sans-medium text-orange-400"
              >
                $40
              </CustomText>

              <Dot />

              <CustomText
                as="text-caption"
                className="font-dm-sans-medium text-gray-400"
              >
                2 items
              </CustomText>
            </View>
          </View>
        </View>

        {(status === 'completed' || status === 'canceled') && (
          <View className="flex-row items-center gap-3">
            <CustomButton
              variant="secondary"
              className="flex-1"
              onPress={handleOpenReviewSheet}
            >
              <CustomText className="font-dm-sans-medium">Rate</CustomText>
            </CustomButton>
            <CustomButton className="flex-1">
              <CustomText className="text-white font-dm-sans-medium">
                Re-Order
              </CustomText>
            </CustomButton>
          </View>
        )}

        {status === 'inProcess' && (
          <CustomButton>
            <CustomText className="text-white font-dm-sans-medium">
              View on Map
            </CustomText>
          </CustomButton>
        )}
      </View>
    </View>
  );
};
