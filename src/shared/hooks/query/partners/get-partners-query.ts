import { useQuery } from '@tanstack/react-query';
import { partnersService } from '@entities/partners/api/partners.service';

export const getPartnersQuery = () =>
  useQuery({
    queryKey: ['partners'],
    queryFn: partnersService.findAll,
  });
