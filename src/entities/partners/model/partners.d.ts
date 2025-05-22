import { ReviewEntity } from '@entities/reviews/model';
import { Timestamps } from '@shared/types';

export interface PartnerEntity extends Timestamps {
  id: string;
  name: string;
  address: string;
  averageWaitTime: number;
  openFrom: string;
  openTo: string;
  tags?: string[];
  rating?: number;
  logoUrl?: string;
  coverImageUrl?: string;
  deliveryFee?: number;
  distance: number;
  reviews: ReviewEntity[];
}
