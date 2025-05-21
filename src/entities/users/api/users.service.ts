import { authGet } from '@shared/api';
import { User } from '@entities/users/model';

class UsersService {
  async me() {
    const res = await authGet<User>('/user/me');
    console.log('after');
    return res.data;
  }
}

export const usersService = new UsersService();
