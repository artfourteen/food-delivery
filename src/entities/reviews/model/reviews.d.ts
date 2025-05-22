import { Timestamps } from '@shared/types';
import { User } from '@entities/users/model';

export interface ReviewEntity extends Timestamps {
  id: string;
  rating: number;
  comment?: string;
  tags?: string[];
  createdAt: string;
  likes: number;
  user: User;
  isLiked: boolean;
}

export interface LikeDislikeReviewRes {
  message: string;
}

export interface CreateReviewReq {
  rating: number;
  comment?: string;
  tags?: string[];
}

export interface AlreadyRatedReviewRes {
  alreadyRated: boolean;
}
