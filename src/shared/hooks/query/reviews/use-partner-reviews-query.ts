import { useQuery } from '@tanstack/react-query';
import { reviewsService } from '@entities/reviews/api';

export const usePartnerReviewsQuery = (partnerId: string) =>
  useQuery({
    queryKey: ['reviews', partnerId],
    queryFn: () => reviewsService.getPartnerReviews(partnerId),
  });
