import { Timestamps } from '@shared/types';

export interface PaymentCardEntity extends Timestamps {
  id: string;
  cardHolderName: string;
  lastFourDigits: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreatePaymentCardReq {
  cardHolderName: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
}
