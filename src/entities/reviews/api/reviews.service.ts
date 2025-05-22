import api from '@shared/api';
import {
  AlreadyRatedReviewRes,
  CreateReviewReq,
  LikeDislikeReviewRes,
  ReviewEntity,
} from '@entities/reviews/model';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ReviewsService {
  async getPartnerReviews(partnerId: string) {
    const token = await AsyncStorage.getItem('accessToken');

    const res = await api.get<ReviewEntity[]>(`/reviews/partner/${partnerId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }

  async likeDislike(id: string) {
    const token = await AsyncStorage.getItem('accessToken');

    const res = await api.post<LikeDislikeReviewRes>(
      `/reviews/${id}/like-dislike`,
      undefined,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return res.data;
  }

  async create(partnerId: string, payload: CreateReviewReq) {
    const token = await AsyncStorage.getItem('accessToken');

    const res = await api.post<ReviewEntity>(
      `/reviews/partner/${partnerId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return res.data;
  }

  async alreadyRatedPartner(partnerId: string) {
    const token = await AsyncStorage.getItem('accessToken');

    const res = await api.get<AlreadyRatedReviewRes>(
      `/reviews/mine/${partnerId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return res.data;
  }
}
export const reviewsService = new ReviewsService();
