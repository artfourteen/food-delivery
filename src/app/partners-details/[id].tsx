import { Image, Pressable, View } from 'react-native';
import { CustomText } from '@shared/ui/custom-text';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useMemo, useState } from 'react';
import { Container } from '@shared/ui/container';
import {
  bottomSheetStyles,
  mockCombosBurger,
  mockCombosChicken,
  mockPartners,
  mockPopularItems,
} from '@shared/constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Dot } from '@shared/ui/dot';
import { cn } from '@shared/lib/utils';
import { ScrollView } from 'react-native-gesture-handler';
import { ItemCard, ItemComboCard } from '@entities/items/ui';
import { ReviewCard } from '@entities/reviews/ui/review-card';

import ShieldCheck from '@assets/img/icons/shield-check.svg';
import HeartOrange from '@assets/img/icons/heart-orange.svg';
import StarWhite from '@assets/img/icons/star-white.svg';
import PinLocation from '@assets/img/icons/pin-location.svg';
import Dollar from '@assets/img/icons/dollar.svg';
import burgerKingDetails from '@assets/img/partners/burger-king-details.png';

type TabType = 'delivery' | 'review';

const tabs: TabType[] = ['delivery', 'review'];

export default function PartnerDetailsScreen() {
  const snapPoints = useMemo(() => ['81%', '100%'], []);
  const { top } = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState<TabType>('delivery');

  return (
    <>
      <View className="flex-1">
        <Image source={burgerKingDetails} className="w-full" />
      </View>
      <BottomSheet
        snapPoints={snapPoints}
        style={bottomSheetStyles.base}
        handleStyle={bottomSheetStyles.handle}
        handleIndicatorStyle={bottomSheetStyles.handleIndicator}
        topInset={top}
        index={0}
        enableDynamicSizing={false}
      >
        <BottomSheetScrollView showsVerticalScrollIndicator={false}>
          <Container className="max-w-[85%]">
            <View className="gap-1 pb-4 mb-6 border-b border-gray-100">
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-1">
                  <CustomText as="headline" className="font-dm-sans-medium">
                    Burger King
                  </CustomText>
                  <ShieldCheck />
                </View>

                <Pressable>
                  <HeartOrange />
                </Pressable>
              </View>

              <View className="flex-row items-center gap-2 flex-wrap">
                {true ? (
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
                  1453 W Manchester Ave Los Angeles 90047
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
                    4.5
                  </CustomText>
                </View>

                <Dot className="ml-3 mr-1.5" />

                <View className="flex-row gap-1 items-center">
                  <PinLocation />
                  <CustomText
                    as="text-caption"
                    className="font-dm-sans-medium text-gray-800"
                  >
                    15 Mins
                  </CustomText>
                </View>

                {true && (
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

          <View className="border-y border-gray-100">
            <Container className="max-w-[85%]">
              <View className="flex-row items-center justify-between gap-1">
                {tabs.map((tab) => (
                  <Pressable
                    key={tab}
                    className={cn('py-5 w-2/5', {
                      'border-b border-orange-400 ': selectedTab === tab,
                    })}
                    onPress={() => setSelectedTab(tab)}
                  >
                    <CustomText
                      as="text-caption"
                      className={cn(
                        'capitalize text-center font-dm-sans-medium',
                        {
                          'text-orange-400': selectedTab === tab,
                        },
                      )}
                    >
                      {tab}
                    </CustomText>
                  </Pressable>
                ))}
              </View>
            </Container>
          </View>

          {selectedTab === 'delivery' && (
            <View className="my-8">
              <View className="pb-5 border-b border-gray-100">
                <Container className="max-w-[85%]">
                  <CustomText className="text-lg font-dm-sans-bold mb-4">
                    Popular Items
                  </CustomText>

                  <ScrollView
                    horizontal
                    contentContainerClassName="flex-grow"
                    showsHorizontalScrollIndicator={false}
                  >
                    <View className="flex-row items-center gap-2">
                      {mockPopularItems.map((item) => (
                        <ItemCard key={item.id} {...item} />
                      ))}
                    </View>
                  </ScrollView>
                </Container>
              </View>

              <View>
                <View className="border-t border-gray-100 py-5">
                  <Container className="max-w-[85%]">
                    <View className="gap-5">
                      <CustomText className="text-lg font-dm-sans-bold">
                        Hot Burger Combo
                      </CustomText>

                      <View>
                        {mockCombosBurger.map((item, index) => (
                          <ItemComboCard
                            key={item.id}
                            {...item}
                            className={cn('py-5', {
                              'border-b border-gray-100':
                                mockCombosBurger.length - 1 !== index,
                              'pt-5 pb-0':
                                mockCombosBurger.length - 1 === index,
                              'pt-0 pb-5': index === 0,
                            })}
                          />
                        ))}
                      </View>
                    </View>
                  </Container>
                </View>

                <View className="border-t border-gray-100 py-5">
                  <Container className="max-w-[85%]">
                    <View className="gap-5">
                      <CustomText className="text-lg font-dm-sans-bold">
                        Fried Chicken
                      </CustomText>

                      <View>
                        {mockCombosChicken.map((item, index) => (
                          <ItemComboCard
                            key={item.id}
                            {...item}
                            className={cn('py-5', {
                              'border-b border-gray-100':
                                mockCombosChicken.length - 1 !== index,
                              'pt-5 pb-0':
                                mockCombosChicken.length - 1 === index,
                              'pt-0 pb-5': index === 0,
                            })}
                          />
                        ))}
                      </View>
                    </View>
                  </Container>
                </View>
              </View>
            </View>
          )}

          {selectedTab === 'review' && (
            <Container className="max-w-[85%] my-8">
              <View>
                {mockPartners[0].reviews.map((review, index) => (
                  <ReviewCard
                    key={review.id}
                    {...review}
                    className={cn('py-4', {
                      'border-b border-gray-100':
                        mockPartners[0].reviews.length - 1 !== index,
                      'pt-4 pb-0': mockPartners[0].reviews.length - 1 === index,
                      'pt-0 pb-4': index === 0,
                    })}
                  />
                ))}
              </View>
            </Container>
          )}
        </BottomSheetScrollView>
      </BottomSheet>
    </>
  );
}
