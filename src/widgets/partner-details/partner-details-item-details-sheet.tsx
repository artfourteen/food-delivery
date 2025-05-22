import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Image, Pressable, View } from 'react-native';
import { Container, CustomButton, CustomText } from '@shared/ui';
import { forwardRef, useMemo, useState } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { bottomSheetStyles } from '@shared/constants';
import { cn, handleError } from '@shared/lib/utils';
import { Minus, Plus } from 'lucide-react-native';

import whopper from '@assets/img/partners/whopper.png';
import { useItemQuery } from '@shared/hooks/query';
import { ItemSizeType } from '@entities/items/model';
import Toast from 'react-native-toast-message';
import { cartService } from '@entities/cart/api';
import { useQueryClient } from '@tanstack/react-query';

interface PartnerDetailsItemDetailsSheetProps {
  id: string;
  close: () => void;
}

export const PartnerDetailsItemDetailsSheet = forwardRef<
  BottomSheetMethods,
  PartnerDetailsItemDetailsSheetProps
>(({ id, close }, ref) => {
  const { data: item, isPending } = useItemQuery(id);
  const snapPoints = useMemo(() => ['100%'], []);
  const { top } = useSafeAreaInsets();
  const [selectedSize, setSelectedSize] = useState<ItemSizeType>('MD');
  const [count, setCount] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      await cartService.addItem({
        itemId: id,
        size: selectedSize,
        quantity: count,
      });
      await queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
      close();
    } catch (e) {
      const errorMessage = await handleError(e);
      Toast.show({
        type: 'error',
        text1: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      topInset={top}
      enablePanDownToClose
      snapPoints={snapPoints}
      enableDynamicSizing={false}
      style={bottomSheetStyles.base}
      handleStyle={bottomSheetStyles.handle}
      handleIndicatorStyle={bottomSheetStyles.handleIndicator}
    >
      <BottomSheetView>
        {isPending ? (
          <CustomText className="text-center py-9 text-gray-400">
            Loading...
          </CustomText>
        ) : !item ? (
          <CustomText className="text-center py-9 text-gray-400">
            Item not found
          </CustomText>
        ) : (
          <Container className="max-w-[85%]">
            <View className="pt-4 pb-8 justify-between h-full">
              <View className="gap-2 mb-8">
                <CustomText as="h3" className="font-dm-sans-medium text-center">
                  {item.name}
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
                  {item?.sizes?.map((size) => (
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
                    <Minus stroke="#fb923c" />
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
                    <Plus stroke="#fb923c" />
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
                    ${item.price}
                  </CustomText>
                </View>

                <CustomButton className="w-64">
                  <CustomText
                    className="text-white font-dm-sans-medium"
                    onPress={handleSubmit}
                    disabled={isSubmitting}
                  >
                    Add to Cart
                  </CustomText>
                </CustomButton>
              </View>
            </View>
          </Container>
        )}
      </BottomSheetView>
    </BottomSheet>
  );
});

PartnerDetailsItemDetailsSheet.displayName = 'PartnerDetailsItemDetailsSheet';
