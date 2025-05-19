import { View } from 'react-native';
import { mockPartners } from '@shared/constants';
import { ReviewCard } from '@entities/reviews/ui/review-card';
import { cn } from '@shared/lib/utils';
import { Container } from '@shared/ui/container';

export const PartnerDetailsReviewsSection = () => {
  return (
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
  );
};
