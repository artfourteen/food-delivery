import { useQuery } from '@tanstack/react-query';
import { paymentCardsService } from '@entities/payment-cards/api';

export const usePaymentCardsQuery = () =>
  useQuery({
    queryKey: ['paymentCards'],
    queryFn: paymentCardsService.findAll,
  });
