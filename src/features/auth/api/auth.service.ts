import api from '@shared/api';
import {
  AuthRes,
  LoginReq,
  RegisterReq,
  ResetReq,
  ResetRes,
  RestoreReq,
  RestoreRes,
} from '@features/auth/model';

class AuthService {
  async login(payload: LoginReq) {
    const res = await api.post<AuthRes>('/auth/login', payload);

    return res.data;
  }

  async register(payload: RegisterReq) {
    const res = await api.post<AuthRes>('/auth/register', payload);

    return res.data;
  }

  async restore(payload: RestoreReq) {
    const res = await api.post<RestoreRes>('/auth/restore', payload);

    return res.data;
  }

  async reset(payload: ResetReq) {
    const res = await api.post<ResetRes>('auth/reset', payload);

    return res.data;
  }
}

export const authService = new AuthService();
