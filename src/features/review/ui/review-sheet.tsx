import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import {
  Container,
  ControlledInput,
  CustomButton,
  CustomText,
  SheetHeader,
} from '@shared/ui';
import { forwardRef, useMemo } from 'react';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { bottomSheetStyles } from '@shared/constants';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { cn, handleError } from '@shared/lib/utils';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Toast from 'react-native-toast-message';
import { reviewsService } from '@entities/reviews/api';

import ShieldCheck from '@assets/img/icons/shield-check.svg';
import StarOrangeLg from '@assets/img/icons/star-orange-lg.svg';
import StarGrayLg from '@assets/img/icons/star-gray-lg.svg';
import { useQueryClient } from '@tanstack/react-query';

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

const createReviewSchema = z.object({
  rating: z
    .number()
    .min(1, 'Rating must be at least 1')
    .max(5, "Rating can't be more that 5"),
  comment: z.string().optional(),
  tags: z.string().array(),
});

type CreateReviewData = z.infer<typeof createReviewSchema>;

interface ReviewSheetProps {
  partnerId: string;
  partnerName: string;
  close: () => void;
}

export const ReviewSheet = forwardRef<BottomSheetMethods, ReviewSheetProps>(
  ({ partnerId, partnerName, close }, ref) => {
    const {
      control,
      handleSubmit,
      formState: { errors, isSubmitting },
      setValue,
      watch,
    } = useForm<CreateReviewData>({
      resolver: zodResolver(createReviewSchema),
      defaultValues: {
        rating: 0,
        comment: '',
        tags: [],
      },
    });
    const snapPoints = useMemo(() => ['100%'], []);
    const { top } = useSafeAreaInsets();
    const queryClient = useQueryClient();

    const rating = watch('rating');
    const selectedTags = watch('tags');

    const handleSelectTag = (val: string) => {
      let updatedTags = [...selectedTags];

      if (selectedTags.includes(val)) {
        updatedTags = updatedTags.filter((tag) => tag !== val);
      } else {
        updatedTags = [...updatedTags, val];
      }

      setValue('tags', updatedTags);
    };

    const onSubmit = async (data: CreateReviewData) => {
      try {
        await reviewsService.create(partnerId, data);
        await queryClient.invalidateQueries({
          queryKey: ['reviews', partnerId],
        });
        close();
      } catch (e) {
        const errorMessage = await handleError(e);
        Toast.show({
          type: 'error',
          text1: errorMessage,
        });
      }
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
            <SheetHeader title="Rate Your Experience" />

            <View className="items-center justify-center py-9 border-b border-gray-100 gap-3">
              <View className="w-24 h-24 rounded-full bg-orange-50" />

              <View className="flex-row items-center gap-0.5">
                <CustomText as="text-subhead" className="font-dm-sans-medium">
                  {partnerName}
                </CustomText>
                <ShieldCheck />
              </View>

              <View className="items-center justify-center gap-1">
                <View className="flex-row">
                  {Array.from({ length: 5 }).map((_, index) => {
                    const isSelected = index < rating;
                    return (
                      <Pressable
                        key={index}
                        onPress={() => setValue('rating', index + 1)}
                      >
                        {isSelected ? <StarOrangeLg /> : <StarGrayLg />}
                      </Pressable>
                    );
                  })}
                </View>

                <CustomText className="text-gray-400">
                  {reviewToText(rating)}
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

            <ControlledInput
              name="comment"
              control={control}
              placeholder="Do you have something to share with Cook? Leave a review now! Your rating and comments will be displayed anonymously."
              multiline
              numberOfLines={4}
              className="mt-8 h-48"
              error={errors.comment?.message}
            />

            <CustomButton
              className="mt-7"
              onPress={handleSubmit(onSubmit)}
              disabled={isSubmitting}
            >
              <CustomText className="text-white font-dm-sans-medium">
                Submit
              </CustomText>
            </CustomButton>
          </Container>
        </BottomSheetView>
      </BottomSheet>
    );
  },
);
ReviewSheet.displayName = 'ReviewSheet';
