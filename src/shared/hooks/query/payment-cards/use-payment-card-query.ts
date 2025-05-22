import { useQuery } from '@tanstack/react-query';
import { paymentCardsService } from '@entities/payment-cards/api';

export const usePaymentCardQuery = (id: string) =>
  useQuery({
    queryKey: ['paymentCard', id],
    queryFn: () => paymentCardsService.findOne(id),
  });
