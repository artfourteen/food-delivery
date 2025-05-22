import { useQuery } from '@tanstack/react-query';
import { ordersService } from '@entities/orders/api';

export const useOrderQuery = (id: string) =>
  useQuery({
    queryKey: ['order', id],
    queryFn: () => ordersService.findById(id),
  });
