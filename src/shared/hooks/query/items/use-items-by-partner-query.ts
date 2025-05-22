import { useQuery } from '@tanstack/react-query';
import { itemsService } from '@entities/items/api';

export const useItemsByPartnerQuery = (partnerId: string) =>
  useQuery({
    queryKey: ['itemsPartner', partnerId],
    queryFn: () => itemsService.findAllByPartner(partnerId),
  });
