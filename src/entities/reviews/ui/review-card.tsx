import { Pressable, View } from 'react-native';
import { CustomText } from '@shared/ui/custom-text';
import { ReviewEntity } from '@entities/reviews/model';

import StarOrangeSm from '@assets/img/icons/star-orange-sm.svg';
import StarGraySm from '@assets/img/icons/star-gray-sm.svg';
import HeartOrange from '@assets/img/icons/heart-orange.svg';
import HeartGray from '@assets/img/icons/heart-gray.svg';

interface ReviewCardProps extends ReviewEntity {
  className?: string;
}

export const ReviewCard = ({
  rating,
  liked,
  likesCount,
  createdAt,
  description,
  user,
  className,
}: ReviewCardProps) => {
  return (
    <View className={className}>
      <View className="flex-row gap-4 items-stretch">
        <View className="w-10 h-10 rounded-full bg-orange-200 items-center justify-center">
          <CustomText
            as="text-caption"
            className="uppercase font-dm-sans-semibold"
          >
            {user[0]}
          </CustomText>
        </View>

        <View className="flex-row items-start justify-between gap-4 flex-1">
          <View className="justify-between">
            <CustomText as="text-caption" className="font-medium">
              {user}
            </CustomText>

            <View className="flex-row items-center gap-px">
              {Array.from({ length: rating }).map((_, i) => (
                <StarOrangeSm key={i} />
              ))}
              {Array.from({ length: 5 - rating }).map((_, i) => (
                <StarGraySm key={i} />
              ))}
            </View>
          </View>

          <CustomText as="text-caption2" className="text-gray-400 font-medium">
            {createdAt}
          </CustomText>
        </View>
      </View>

      <CustomText
        as="text-caption2"
        className="text-pretty mt-2 mb-1 leading-5"
      >
        {description}
      </CustomText>

      <Pressable className="flex-row gap-0.5 items-center">
        {liked ? <HeartOrange /> : <HeartGray />}
        <CustomText
          as="text-caption2"
          className="font-dm-sans-medium text-orange-400"
        >
          {likesCount} likes
        </CustomText>
      </Pressable>
    </View>
  );
};
