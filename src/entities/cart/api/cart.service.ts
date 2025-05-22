import api from '@shared/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AddCartItemReq,
  CartEntity,
  UpdateCartItemReq,
} from '@entities/cart/model';

class CartService {
  async getOrCreate() {
    const token = await AsyncStorage.getItem('accessToken');

    const res = await api.get<CartEntity>('/cart', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }

  async addItem(payload: AddCartItemReq) {
    const token = await AsyncStorage.getItem('accessToken');

    const res = await api.post<CartEntity>('/cart/items', payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }

  async updateItem(id: string, payload: UpdateCartItemReq) {
    const token = await AsyncStorage.getItem('accessToken');

    const res = await api.patch<CartEntity>(`/cart/items/${id}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }

  async deleteItem(id: string) {
    const token = await AsyncStorage.getItem('accessToken');

    const res = await api.delete<CartEntity>(`/cart/items/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }

  async clearCart() {
    const token = await AsyncStorage.getItem('accessToken');

    const res = await api.delete('/cart', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }
}
export const cartService = new CartService();
