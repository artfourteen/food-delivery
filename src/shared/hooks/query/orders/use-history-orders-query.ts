import { useQuery } from '@tanstack/react-query';
import { ordersService } from '@entities/orders/api';

export const useHistoryOrdersQuery = () =>
  useQuery({
    queryKey: ['historyOrders'],
    queryFn: ordersService.getOrderHistory,
  });
