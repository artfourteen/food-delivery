import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '@shared/api';
import {
  CreatePaymentCardReq,
  PaymentCardEntity,
} from '@entities/payment-cards/model';

class PaymentCardsService {
  async findAll() {
    const token = await AsyncStorage.getItem('accessToken');

    const res = await api.get<PaymentCardEntity[]>('/payment-cards', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }

  async findOne(id: string) {
    const token = await AsyncStorage.getItem('accessToken');

    const res = await api.get<PaymentCardEntity>(`/payment-cards/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }

  async create(payload: CreatePaymentCardReq) {
    console.log('Payload', payload);

    const token = await AsyncStorage.getItem('accessToken');

    const res = await api.post<PaymentCardEntity>('/payment-cards', payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }
}
export const paymentCardsService = new PaymentCardsService();
