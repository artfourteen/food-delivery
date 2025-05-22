import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { bottomSheetStyles } from '@shared/constants';
import { Pressable, View } from 'react-native';
import { Container, CustomText, SheetHeader } from '@shared/ui';
import { forwardRef, useMemo } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useItemsByCategoryQuery } from '@shared/hooks/query';
import { ItemCard } from '@entities/items/ui';

interface CategorySheetProps {
  category: string;
  itemDetailsOpen: (itemId: string) => void;
}

export const CategoriesSheet = forwardRef<
  BottomSheetMethods,
  CategorySheetProps
>(({ category, itemDetailsOpen }, ref) => {
  const { data: items, isPending } = useItemsByCategoryQuery(
    category.trim().toUpperCase(),
  );
  const snapPoints = useMemo(() => ['100%'], []);
  const { top } = useSafeAreaInsets();

  return (
    <BottomSheet
      index={-1}
      enablePanDownToClose
      ref={ref}
      snapPoints={snapPoints}
      topInset={top}
      enableDynamicSizing={false}
      style={bottomSheetStyles.base}
      handleStyle={bottomSheetStyles.handle}
      handleIndicatorStyle={bottomSheetStyles.handleIndicator}
    >
      <View className="w-full">
        <SheetHeader title={category} />

        <Container>
          {isPending ? (
            <CustomText className="text-center py-9 text-gray-400">
              Loading...
            </CustomText>
          ) : !items || !items.length ? (
            <CustomText className="text-center py-9 text-gray-400">
              Items for {category} not found
            </CustomText>
          ) : (
            <BottomSheetScrollView
              className="pt-6"
              showsVerticalScrollIndicator={false}
            >
              <View className="flex-grow flex-row justify-between">
                {items?.map((item) => (
                  <Pressable
                    key={item.id}
                    className="w-1/2 items-center justify-center"
                    onPress={() => itemDetailsOpen(item.id)}
                  >
                    <ItemCard {...item} categories={[category]} />
                  </Pressable>
                ))}
              </View>
            </BottomSheetScrollView>
          )}
        </Container>
      </View>
    </BottomSheet>
  );
});
