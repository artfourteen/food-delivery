import { useQuery } from '@tanstack/react-query';
import { partnersService } from '@entities/partners/api/partners.service';

export const getPartnerQuery = (id: string) =>
  useQuery({
    queryKey: ['partner', id],
    queryFn: () => partnersService.findOne(id),
  });
