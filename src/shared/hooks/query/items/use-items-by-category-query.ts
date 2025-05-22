import { useQuery } from '@tanstack/react-query';
import { itemsService } from '@entities/items/api';

export const useItemsByCategoryQuery = (category: string) =>
  useQuery({
    queryKey: ['items', category],
    queryFn: () => itemsService.findByCategory(category.trim().toUpperCase()),
  });
