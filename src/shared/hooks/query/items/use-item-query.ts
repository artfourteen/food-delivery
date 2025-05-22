import { useQuery } from '@tanstack/react-query';
import { itemsService } from '@entities/items/api';

export const useItemQuery = (id: string) =>
  useQuery({
    queryKey: ['item', id],
    queryFn: () => itemsService.findOne(id),
  });
