import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '@shared/api';
import { CreateOrderReq, OrderEntity } from '@entities/orders/model/orders';

class OrdersService {
  async getActiveOrders() {
    const token = await AsyncStorage.getItem('accessToken');

    const res = await api.get<OrderEntity[]>('/orders/active', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }

  async getOrderHistory() {
    const token = await AsyncStorage.getItem('accessToken');

    const res = await api.get<OrderEntity[]>('/orders/history', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }

  async create(payload: CreateOrderReq) {
    const token = await AsyncStorage.getItem('accessToken');

    const res = await api.post<OrderEntity>('/orders', payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }

  async findById(id: string) {
    const token = await AsyncStorage.getItem('accessToken');

    const res = await api.get<OrderEntity[]>(`/orders/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }

  async cancelOrder(id: string) {
    const token = await AsyncStorage.getItem('accessToken');

    const res = await api.patch<OrderEntity>(
      `/orders/${id}/cancel`,
      undefined,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return res.data;
  }
}
export const ordersService = new OrdersService();
