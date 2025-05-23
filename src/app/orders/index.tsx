import { Pressable, ScrollView, View } from 'react-native';
import { Container, CustomText, ScreenHeader } from '@shared/ui';
import { useRef, useState } from 'react';
import { cn } from '@shared/lib/utils';
import { HistoryCard } from '@entities/history/ui';
import { ReviewSheet } from '@features/review/ui';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import {
  useActiveOrdersQuery,
  useHistoryOrdersQuery,
} from '@shared/hooks/query/orders';

type TabType = 'ongoing' | 'history';

const tabs: TabType[] = ['ongoing', 'history'];

export default function OrdersScreen() {
  const [selectedTab, setSelectedTab] = useState<TabType>('ongoing');
  const [selectedPartnerId, setSelectedPartnerId] = useState<string>('');
  const reviewSheetRef = useRef<BottomSheetMethods>(null);
  const { data: orderHistory, isPending: isHistoryPending } =
    useHistoryOrdersQuery();
  const { data: activeOrders, isPending: isActivePending } =
    useActiveOrdersQuery();

  const handleOpenReviewSheet = () => reviewSheetRef.current?.expand();
  const handleReviewSheetClose = () => reviewSheetRef.current?.close();

  return (
    <>
      <View>
        <ScreenHeader title="Orders" />

        <View className="fixed top-0 bg-white border-b border-gray-100">
          <Container className="max-w-[85%]">
            <View className="flex-row justify-between gap-3">
              {tabs.map((tab) => (
                <Pressable
                  key={tab}
                  onPress={() => setSelectedTab(tab)}
                  className={cn('flex-1 py-5', {
                    'border-b border-orange-400': selectedTab === tab,
                  })}
                >
                  <CustomText
                    as="text-caption2"
                    className={cn('text-center capitalize font-medium', {
                      'text-orange-400': selectedTab === tab,
                    })}
                  >
                    {tab}
                  </CustomText>
                </Pressable>
              ))}
            </View>
          </Container>
        </View>

        {selectedTab === 'ongoing' && (
          <ScrollView className="pt-5" showsVerticalScrollIndicator={false}>
            <Container>
              {isActivePending ? (
                <CustomText className="py-9 text-center text-gray-400">
                  Loading...
                </CustomText>
              ) : !activeOrders || !activeOrders.length ? (
                <CustomText className="py-9 text-center text-gray-400">
                  No active orders
                </CustomText>
              ) : (
                <View className="gap-4 pb-44">
                  {activeOrders.map((order) => (
                    <HistoryCard
                      key={order.id}
                      handleOpenReviewSheet={handleOpenReviewSheet}
                      setSelectedPartnerId={setSelectedPartnerId}
                      {...order}
                    />
                  ))}
                </View>
              )}
            </Container>
          </ScrollView>
        )}

        {selectedTab === 'history' && (
          <ScrollView className="pt-5" showsVerticalScrollIndicator={false}>
            <Container>
              <View className="gap-4 pb-44">
                {isHistoryPending ? (
                  <CustomText className="py-9 text-center text-gray-400">
                    Loading...
                  </CustomText>
                ) : !orderHistory || !orderHistory.length ? (
                  <CustomText className="py-9 text-center text-gray-400">
                    History is clear
                  </CustomText>
                ) : (
                  <View className="gap-4 pb-44">
                    {orderHistory.map((order) => (
                      <HistoryCard
                        key={order.id}
                        handleOpenReviewSheet={handleOpenReviewSheet}
                        setSelectedPartnerId={setSelectedPartnerId}
                        {...order}
                      />
                    ))}
                  </View>
                )}
              </View>
            </Container>
          </ScrollView>
        )}
      </View>

      <ReviewSheet
        ref={reviewSheetRef}
        partnerId={selectedPartnerId}
        partnerName="Test"
        close={handleReviewSheetClose}
      />
    </>
  );
}
