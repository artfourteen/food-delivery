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

export interface RestoreReq {
  email: string;
}

export interface ResetReq {
  token: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface AuthRes {
  accessToken: string;
}

export interface RestoreRes {
  message: string;
}

export interface ResetRes {
  message: string;
}
