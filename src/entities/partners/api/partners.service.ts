import api from '@shared/api';
import { PartnerEntity } from '@entities/partners/model/partners';

class PartnersService {
  async findAll() {
    const res = await api.get<PartnerEntity[]>('/partners');

    return res.data;
  }

  async findOne(id: string) {
    const res = await api.get<PartnerEntity>(`/partners/${id}`);

    return res.data;
  }
}

export const partnersService = new PartnersService();
