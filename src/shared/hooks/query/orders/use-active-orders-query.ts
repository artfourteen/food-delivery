import { useQuery } from '@tanstack/react-query';
import { ordersService } from '@entities/orders/api';

export const useActiveOrdersQuery = () =>
  useQuery({
    queryKey: ['activeOrders'],
    queryFn: ordersService.getActiveOrders,
  });
