import api from '@shared/api';
import { ItemEntity } from '@entities/items/model';

class ItemsService {
  async findAll() {
    const res = await api.get<ItemEntity[]>('/items');

    return res.data;
  }

  async findAllByPartner(partnerId: string) {
    const res = await api.get<ItemEntity[]>(`/items/partner/${partnerId}`);

    return res.data;
  }

  async findByCategory(category: string) {
    const res = await api.get<ItemEntity[]>(
      `/items/by-category?category=${category.trim().toUpperCase()}`,
    );

    return res.data;
  }

  async findOne(id: string) {
    const res = await api.get<ItemEntity>(`/items/${id}`);

    return res.data;
  }
}

export const itemsService = new ItemsService();
