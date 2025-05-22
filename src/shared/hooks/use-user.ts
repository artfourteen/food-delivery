import { useUserQuery } from '@shared/hooks/query';

export const useUser = () => {
  const { data, isPending, error } = useUserQuery();

  return { ...(data ?? {}), isPending, error };
};
