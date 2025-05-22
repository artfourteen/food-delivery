import { useMutation, useQueryClient } from '@tanstack/react-query';
import { reviewsService } from '@entities/reviews/api';
import { ReviewEntity } from '@entities/reviews/model';

type ReviewsQueryKey = ['reviews', string];

export const useLikeDislikeMutation = (partnerId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (reviewId: string) => reviewsService.likeDislike(reviewId),
    onMutate: async (reviewId: string) => {
      await queryClient.cancelQueries({
        queryKey: ['reviews', partnerId] as ReviewsQueryKey,
      });

      const previousReviews = queryClient.getQueryData<ReviewEntity[]>([
        'reviews',
        partnerId,
      ] as ReviewsQueryKey);

      if (previousReviews) {
        const newReviews = previousReviews.map((review) => {
          if (review.id === reviewId) {
            const isCurrentlyLiked = review.isLiked;
            return {
              ...review,
              isLiked: !isCurrentlyLiked,
              likes: isCurrentlyLiked ? review.likes - 1 : review.likes + 1,
            };
          }
          return review;
        });

        queryClient.setQueryData<ReviewEntity[]>(
          ['reviews', partnerId] as ReviewsQueryKey,
          newReviews,
        );
      }

      return { previousReviews };
    },
    onError: (
      _err: Error,
      _reviewId: string,
      context: { previousReviews?: ReviewEntity[] } | undefined,
    ) => {
      if (context?.previousReviews) {
        queryClient.setQueryData<ReviewEntity[]>(
          ['reviews', partnerId] as ReviewsQueryKey,
          context.previousReviews,
        );
      }
    },
  });
};
