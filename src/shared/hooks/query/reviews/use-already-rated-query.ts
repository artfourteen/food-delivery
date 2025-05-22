import { useQuery } from '@tanstack/react-query';
import { reviewsService } from '@entities/reviews/api';

export const useAlreadyRatedQuery = (partnerId: string) =>
  useQuery({
    queryKey: ['alreadyRatedPartner', partnerId],
    queryFn: () => reviewsService.alreadyRatedPartner(partnerId),
  });
