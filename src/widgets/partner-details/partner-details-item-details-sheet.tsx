import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Image, Pressable, View } from 'react-native';
import { CustomText } from '@shared/ui/custom-text';
import { forwardRef, useMemo, useState } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { bottomSheetStyles } from '@shared/constants';
import { Container } from '@shared/ui/container';

import whopper from '@assets/img/partners/whopper.png';
import { cn } from '@shared/lib/utils';
import { Minus, Plus } from 'lucide-react-native';
import { CustomButton } from '@shared/ui/custom-button';

type SizeType = 'sm' | 'md' | 'lg';

const sizes: SizeType[] = ['sm', 'md', 'lg'];

export const PartnerDetailsItemDetailsSheet = forwardRef<BottomSheetMethods>(
  ({}, ref) => {
    const snapPoints = useMemo(() => ['100%'], []);
    const { top } = useSafeAreaInsets();
    const [selectedSize, setSelectedSize] = useState<SizeType>('md');
    const [count, setCount] = useState<number>(1);

    return (
      <BottomSheet
        ref={ref}
        topInset={top}
        snapPoints={snapPoints}
        enablePanDownToClose
        index={-1}
        style={bottomSheetStyles.base}
        handleStyle={bottomSheetStyles.handle}
        handleIndicatorStyle={bottomSheetStyles.handleIndicator}
        enableDynamicSizing={false}
      >
        <BottomSheetView>
          <Container className="max-w-[85%]">
            <View className="pt-4 pb-8 justify-between h-full">
              <View className="gap-2 mb-8">
                <CustomText as="h3" className="font-dm-sans-medium text-center">
                  Extreme cheese whopper JR
                </CustomText>

                <CustomText
                  as="text-caption"
                  className="font-dm-sans-medium text-center text-gray-400 text-pretty"
                >
                  A signature flame-grilled beef patty topped with smoked bacon.
                </CustomText>
              </View>

              <View>
                <View className="h-[243px] items-center justify-center mb-8">
                  <Image
                    source={whopper}
                    className="h-full"
                    resizeMode="contain"
                  />
                </View>

                <View className="flex-row items-center justify-center gap-10 mb-14">
                  {sizes.map((size) => (
                    <Pressable
                      key={size}
                      onPress={() => setSelectedSize(size)}
                      className={cn(
                        'w-12 h-12 items-center bg-white justify-center shadow-lg rounded-xl',
                        {
                          'bg-yellow-400': selectedSize === size,
                        },
                      )}
                    >
                      <CustomText
                        as="text-subhead"
                        className="uppercase font-dm-sans-medium"
                      >
                        {size[0]}
                      </CustomText>
                    </Pressable>
                  ))}
                </View>

                <View className="flex-row items-center justify-center gap-8">
                  <Pressable
                    disabled={count === 1}
                    onPress={() => setCount((prevState) => prevState - 1)}
                    className="bg-amber-100 active:opacity-80 rounded-full w-12 h-12 items-center justify-center disabled:opacity-50"
                  >
                    <CustomText>
                      <Minus stroke="#fb923c" />
                    </CustomText>
                  </Pressable>

                  <View className="w-10 h-10 items-center justify-center">
                    <CustomText as="text-subhead" className="font-medium">
                      {count}
                    </CustomText>
                  </View>

                  <Pressable
                    onPress={() => setCount((prevState) => prevState + 1)}
                    className="bg-amber-100 active:opacity-80 rounded-full w-12 h-12 items-center justify-center"
                  >
                    <CustomText>
                      <Plus stroke="#fb923c" />
                    </CustomText>
                  </Pressable>
                </View>
              </View>

              <View className="flex-row justify-between">
                <View className="gap-0.5 items-center">
                  <CustomText as="text-caption" className="font-dm-sans-medium">
                    Price
                  </CustomText>
                  <CustomText
                    as="text-subhead"
                    className="font-dm-sans-medium text-orange-400"
                  >
                    $ 5.99
                  </CustomText>
                </View>

                <CustomButton className="w-64">
                  <CustomText className="text-white font-dm-sans-medium">
                    Add to Order
                  </CustomText>
                </CustomButton>
              </View>
            </View>
          </Container>
        </BottomSheetView>
      </BottomSheet>
    );
  },
);

PartnerDetailsItemDetailsSheet.displayName = 'PartnerDetailsItemDetailsSheet';
