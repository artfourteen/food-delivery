import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { forwardRef, useMemo, useState } from 'react';
import { CustomText } from '@shared/ui/custom-text';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { bottomSheetStyles } from '@shared/constants';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ShieldCheck from '@assets/img/icons/shield-check.svg';
import StarOrangeLg from '@assets/img/icons/star-orange-lg.svg';
import StarGrayLg from '@assets/img/icons/star-gray-lg.svg';
import { CustomButton } from '@shared/ui/custom-button';
import { cn } from '@shared/lib/utils';
import { CustomInput } from '@shared/ui/input';
import { Container } from '@shared/ui/container';

const reviewToText = (val: number) => {
  switch (val) {
    case 0:
      return 'Go ahead and tap some stars!';
    case 1:
      return 'Yikes... not a great experience.';
    case 2:
      return 'Meh. Could’ve been better.';
    case 3:
      return 'It was okay, not bad.';
    case 4:
      return 'Pretty good, I liked it!';
    case 5:
      return 'Loved it! Everything was awesome!';
    default:
      return '';
  }
};

const tags: string[] = ['Clean', 'Good package', 'Pair price', 'Good food'];

export const ReviewSheet = forwardRef<BottomSheetMethods>(({}, ref) => {
  const snapPoints = useMemo(() => ['100%'], []);
  const { top } = useSafeAreaInsets();
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSelectTag = (val: string) => {
    setSelectedTags((prevState) => {
      if (prevState.includes(val)) {
        return prevState.filter((tag) => tag !== val);
      } else {
        return [...prevState, val];
      }
    });
  };

  return (
    <BottomSheet
      ref={ref}
      topInset={top}
      snapPoints={snapPoints}
      index={-1}
      style={bottomSheetStyles.base}
      handleStyle={bottomSheetStyles.handle}
      handleIndicatorStyle={bottomSheetStyles.handleIndicator}
      enableDynamicSizing={false}
      enablePanDownToClose
    >
      <BottomSheetView>
        <Container className="max-w-[85%]">
          <View className="border-b border-b-gray-100 pb-6">
            <CustomText
              as="text-subhead"
              className="text-center font-dm-sans-bold"
            >
              Rate Your Experience
            </CustomText>
          </View>

          <View className="items-center justify-center py-9 border-b border-gray-100 gap-3">
            <View className="w-24 h-24 rounded-full bg-orange-50" />

            <View className="flex-row items-center gap-0.5">
              <CustomText as="text-subhead" className="font-dm-sans-medium">
                Starbucks
              </CustomText>
              <ShieldCheck />
            </View>

            <View className="items-center justify-center gap-1">
              <View className="flex-row">
                {Array.from({ length: 5 }).map((_, index) => {
                  const isSelected = index < selectedRating;
                  return (
                    <Pressable
                      key={index}
                      onPress={() => setSelectedRating(index + 1)}
                    >
                      {isSelected ? <StarOrangeLg /> : <StarGrayLg />}
                    </Pressable>
                  );
                })}
              </View>

              <CustomText className="text-gray-400">
                {reviewToText(selectedRating)}
              </CustomText>
            </View>
          </View>

          <View className="flex-row items-center justify-center flex-wrap gap-1.5 py-8 border-b border-gray-100">
            {tags.map((tag) => (
              <CustomButton
                key={tag}
                variant={selectedTags.includes(tag) ? 'default' : 'secondary'}
                onPress={() => handleSelectTag(tag)}
                className="w-fit px-6"
              >
                <CustomText
                  className={cn({
                    'text-white': selectedTags.includes(tag),
                  })}
                >
                  {tag}
                </CustomText>
              </CustomButton>
            ))}
          </View>

          <CustomInput
            placeholder="Do you have something to share with Cook? Leave a review now! Your rating and comments will be displayed anonymously."
            multiline
            numberOfLines={4}
            className="mt-8 h-48"
          />

          <CustomButton className="mt-7">
            <CustomText className="text-white font-dm-sans-medium">
              Submit
            </CustomText>
          </CustomButton>
        </Container>
      </BottomSheetView>
    </BottomSheet>
  );
});
ReviewSheet.displayName = 'ReviewSheet';
