import { axiosClient } from './client';

export type LoginResponse = {
  memberId: number;
  accessToken: string;
  refreshToken: string;
};

export const getMainCategories = async () => {
  const {
    data: { categories },
  } = await axiosClient.get<MainCategoriesResponse>('/categories/main');
  return { categories };
};

export async function postEmail(email: string) {
  return await axiosClient.post('/auth/email/send', { email });
}

export async function postEmailAndCode(email: string, verificationCode: number) {
  return await axiosClient.post('/auth/email/authenticate', { email, verificationCode });
}

export async function postSignUp(email: string, password: string, confirmPassword: string) {
  return await axiosClient.post('/signup', { email, password, confirmPassword });
}

export async function postLogin(email: string, password: string) {
  const {
    data: { memberId, accessToken, refreshToken },
  } = await axiosClient.post<LoginResponse>('/auth/login', { email, password });
  return { memberId, accessToken, refreshToken };
}

//password reset apis
export async function postEmailforResetPassword(email: string) {
  return await axiosClient.post('/auth/password-reset/email', { email });
}

export async function postEmailAndCodeforResetPassword(email: string, verificationCode: number) {
  return await axiosClient.post('/auth/password-reset/email-verification', {
    email,
    verificationCode,
  });
}

export async function postResetPassword(email: string, password: string, confirmPassword: string) {
  return await axiosClient.post('/members/password-reset', { email, password, confirmPassword });
}
