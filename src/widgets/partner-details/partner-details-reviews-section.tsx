import { View } from 'react-native';
import { ReviewCard } from '@entities/reviews/ui';
import { cn } from '@shared/lib/utils';
import { Container, CustomButton, CustomText } from '@shared/ui';
import {
  useAlreadyRatedQuery,
  usePartnerReviewsQuery,
} from '@shared/hooks/query';
import { Plus } from 'lucide-react-native';

interface PartnerDetailsReviewsSection {
  partnerId: string;
  reviewSheetOpen: () => void;
}

export const PartnerDetailsReviewsSection = ({
  partnerId,
  reviewSheetOpen,
}: PartnerDetailsReviewsSection) => {
  const { data } = useAlreadyRatedQuery(partnerId);
  const { data: reviews, isPending } = usePartnerReviewsQuery(partnerId);

  return (
    <Container className="max-w-[85%] my-8">
      <View className="gap-6">
        {!data?.alreadyRated && (
          <CustomButton onPress={reviewSheetOpen}>
            <Plus size={16} color="white" />
            <CustomText className="text-white">Review</CustomText>
          </CustomButton>
        )}
        {isPending ? (
          <CustomText className="text-center text-gray-400">
            Loading...
          </CustomText>
        ) : !reviews || !reviews.length ? (
          <CustomText className="text-center text-gray-400">
            No reviews
          </CustomText>
        ) : (
          reviews.map((review, index) => (
            <ReviewCard
              key={review.id}
              {...review}
              className={cn('py-4', {
                'border-b border-gray-100': reviews.length - 1 !== index,
                'pt-4 pb-0': reviews.length - 1 === index,
                'pt-0 pb-4': index === 0,
              })}
              partnerId={partnerId}
            />
          ))
        )}
      </View>
    </Container>
  );
};
