import api from '@shared/api';
import { AuthRes, LoginReq, RegisterReq } from '@features/auth/model';

class AuthService {
  async login(payload: LoginReq) {
    const res = await api.post<AuthRes>('/auth/login', payload);

    return res.data;
  }

  async register(payload: RegisterReq) {
    const res = await api.post<AuthRes>('/auth/register', payload);

    return res.data;
  }
}

export const authService = new AuthService();
