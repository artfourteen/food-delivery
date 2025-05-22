import { View } from 'react-native';
import { CustomButton, CustomText, Dot } from '@shared/ui';
import { cn, dateToString, handleError } from '@shared/lib/utils';
import { Dispatch, SetStateAction } from 'react';
import { OrderEntity } from '@entities/orders/model/orders';

import ShieldCheck from '@assets/img/icons/shield-check.svg';
import Toast from 'react-native-toast-message';
import { ordersService } from '@entities/orders/api';
import { useQueryClient } from '@tanstack/react-query';

interface HistoryCardProps extends OrderEntity {
  handleOpenReviewSheet: () => void;
  setSelectedPartnerId: Dispatch<SetStateAction<string>>;
}

export const HistoryCard = ({
  handleOpenReviewSheet,
  status,
  setSelectedPartnerId,
  createdAt,
  items,
  total,
  id,
}: HistoryCardProps) => {
  const queryClient = useQueryClient();

  const handleCancel = async () => {
    try {
      await ordersService.cancelOrder(id);
      await queryClient.invalidateQueries({ queryKey: ['activeOrders'] });
      await queryClient.invalidateQueries({ queryKey: ['historyOrders'] });
    } catch (e) {
      const errorMessage = await handleError(e);
      Toast.show({
        type: 'error',
        text1: errorMessage,
      });
    }
  };

  return (
    <View className="bg-white p-4 rounded-2xl">
      <View className="flex-row items-center justify-between border-b border-gray-100 pb-4">
        <CustomText
          as="text-caption"
          className={cn('font-dm-sans-medium', {
            'text-green-600': status === 'DELIVERED',
            'text-red-500': status === 'CANCELLED',
            'text-yellow-500': status === 'IN_PROCESS',
          })}
        >
          {status === 'DELIVERED'
            ? 'Completed'
            : status === 'CANCELLED'
              ? 'Cancelled'
              : 'In process'}
        </CustomText>
        <CustomText
          as="text-caption"
          className="text-gray-400 font-dm-sans-medium"
        >
          {dateToString(createdAt)}
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
                ${total}
              </CustomText>

              <Dot />

              <CustomText
                as="text-caption"
                className="font-dm-sans-medium text-gray-400"
              >
                {items.length} items
              </CustomText>
            </View>
          </View>
        </View>

        {/*{(status === 'DELIVERED' || status === 'CANCELLED') && (*/}
        {/*  <View className="flex-row items-center gap-3">*/}
        {/*    <CustomButton*/}
        {/*      variant="secondary"*/}
        {/*      className="flex-1"*/}
        {/*      onPress={() => {*/}
        {/*        setSelectedPartnerId('partnerId');*/}
        {/*        handleOpenReviewSheet();*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      <CustomText className="font-dm-sans-medium">Rate</CustomText>*/}
        {/*    </CustomButton>*/}
        {/*    <CustomButton className="flex-1">*/}
        {/*      <CustomText className="text-white font-dm-sans-medium">*/}
        {/*        Re-Order*/}
        {/*      </CustomText>*/}
        {/*    </CustomButton>*/}
        {/*  </View>*/}
        {/*)}*/}

        {status === 'IN_PROCESS' && (
          <CustomButton onPress={handleCancel}>
            <CustomText className="text-white font-dm-sans-medium">
              Cancel
            </CustomText>
          </CustomButton>
        )}
      </View>
    </View>
  );
};
