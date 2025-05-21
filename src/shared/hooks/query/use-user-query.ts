import { useQuery } from '@tanstack/react-query';
import { usersService } from '@entities/users/api/users.service';

export const useUserQuery = () =>
  useQuery({
    queryKey: ['user'],
    queryFn: usersService.me,
  });
