import { Timestamps } from '@shared/types';

export type ItemSizeType = 'SM' | 'MD' | 'LG';

export interface ItemEntity extends Timestamps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  categories: string[];
  availableAmount: number;
  sizes: ItemSizeType[];
}
