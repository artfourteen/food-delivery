export interface LoginReq {
  email: string;
  password: string;
}

export interface RegisterReq {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthRes {
  accessToken: string;
}
