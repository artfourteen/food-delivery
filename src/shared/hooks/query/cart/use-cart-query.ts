import { useQuery } from '@tanstack/react-query';
import { cartService } from '@entities/cart/api';

export const useCartQuery = () =>
  useQuery({
    queryKey: ['cart'],
    queryFn: cartService.getOrCreate,
  });
