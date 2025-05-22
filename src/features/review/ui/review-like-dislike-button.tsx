import { Pressable } from 'react-native';
import HeartOrange from '@assets/img/icons/heart-orange.svg';
import HeartGray from '@assets/img/icons/heart-gray.svg';
import { CustomText } from '@shared/ui';
import { useLikeDislikeMutation } from '@shared/hooks/query';

interface ReviewLikeDislikeButtonProps {
  id: string;
  partnerId: string;
  likes: number;
  isLiked: boolean;
}

export const ReviewLikeDislikeButton = ({
  id,
  likes,
  isLiked,
  partnerId,
}: ReviewLikeDislikeButtonProps) => {
  const { mutate } = useLikeDislikeMutation(partnerId);

  return (
    <Pressable
      className="flex-row gap-0.5 items-center"
      onPress={() => {
        mutate(id);
      }}
    >
      {isLiked ? <HeartOrange /> : <HeartGray />}
      <CustomText
        as="text-caption2"
        className="font-dm-sans-medium text-orange-400"
      >
        {likes ?? 0} likes
      </CustomText>
    </Pressable>
  );
};
