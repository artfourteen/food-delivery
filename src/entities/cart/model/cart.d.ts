import { Timestamps } from '@shared/types';
import { ItemEntity, ItemSizeType } from '@entities/items/model';

export interface CartEntity extends Timestamps {
  id: string;
  userId: string;
  items: CartItemEntity[];
  total: number;
}

export interface CartItemEntity extends Timestamps {
  id: string;
  cart: CartEntity;
  cartId: string;
  item: ItemEntity;
  quantity: number;
  size: ItemSizeType;
  price: number;
  subtotal: number;
}

export interface AddCartItemReq {
  itemId: string;
  quantity: number;
  size: ItemSizeType;
}

export interface UpdateCartItemReq {
  quantity?: number;
  size?: ItemSizeType;
}
