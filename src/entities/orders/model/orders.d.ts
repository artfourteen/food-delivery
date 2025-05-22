import { Timestamps } from '@shared/types';

export type OrderStatusType = 'IN_PROCESS' | 'DELIVERED' | 'CANCELLED';

export type PaymentMethodType = 'CARD' | 'CASH';

export interface OrderItemEntity extends Timestamps {
  id: string;
  order: Order;
  item: Item;
  itemName: string;
  quantity: number;
  size: SizesEnum;
  unitPrice: number;
  totalPrice: number;
  specialInstructions: string;
}

export interface OrderEntity extends Timestamps {
  id: string;
  orderNumber: string;
  user: User;
  partner: Partner;
  paymentCard: PaymentCard;
  items: OrderItemEntity[];
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
  status: OrderStatusType;
  deliveryAddress: string;
  estimatedDeliveryTime: Date;
  actualDeliveryTime: Date;
  paymentTransactionId: string;
}

export interface CreateOrderReq {
  paymentMethod: PaymentMethodType;
  paymentCardId?: string;
  deliveryAddress: string;
}
