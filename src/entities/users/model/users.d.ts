import { Timestamps } from '@shared/types';

export interface User extends Timestamps {
  id: string;
  username: string;
  email: string;
}
