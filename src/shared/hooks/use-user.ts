import { useUserQuery } from '@shared/hooks/query';

export const useUser = () => {
  const { data, isPending, error } = useUserQuery();

  console.log('user', data);

  return { ...(data ?? {}), isPending, error };
};
