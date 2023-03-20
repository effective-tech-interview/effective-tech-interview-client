import { axiosClient } from './client';

export type LoginResponse = {
  memberId: number;
  accessToken: string;
  refreshToken: string;
};

export async function postEmail(email: string) {
  return await axiosClient.post('/v1/auth/email/send', { email });
}

export async function postEmailAndCode(email: string, verificationCode: number) {
  return await axiosClient.post('/v1/auth/email/authenticate', { email, verificationCode });
}

export async function postSignUp(email: string, password: string, confirmPassword: string) {
  return await axiosClient.post('/v1/signup', { email, password, confirmPassword });
}

export async function postLogin(email: string, password: string) {
  const {
    data: { memberId, accessToken, refreshToken },
  } = await axiosClient.post<LoginResponse>('/v1/auth/login', { email, password });
  return { memberId, accessToken, refreshToken };
}

//password reset apis
export async function postEmailforResetPassword(email: string) {
  return await axiosClient.post('/v1/auth/password-reset/email', { email });
}

export async function postEmailAndCodeforResetPassword(email: string, verificationCode: number) {
  return await axiosClient.post('/v1/auth/password-reset/email-verification', {
    email,
    verificationCode,
  });
}

export async function postResetPassword(email: string, password: string, confirmPassword: string) {
  return await axiosClient.post('/v1/members/password-reset', { email, password, confirmPassword });
}

export const getMainCategories = async () => {
  const {
    data: { categories },
  } = await axiosClient.get<MainCategoriesResponse>('/v1/categories/main');
  return { categories };
};

export const getMidCategories = async (mainCategoryId: number) => {
  const {
    data: { name, categories },
  } = await axiosClient.get<MidCategoriesResponse>('/v1/categories/mid', {
    params: { mainCategoryId },
  });
  return { name, categories };
};

export const getMidCategory = async (midCategoryId: number) => {
  const {
    data: { id, name, imageUrl },
  } = await axiosClient.get<MidCategoryResponse>(`/v1/categories/mid/${midCategoryId}`);
  return { id, name, imageUrl };
};

export const getRandomQuestionDeprecated = async (midCategoryId: number) => {
  const {
    data: { id, question },
  } = await axiosClient.get<RandomQuestionResponse>('/v1/questions', {
    params: { midCategoryId },
  });
  return { id, question };
};

export const getQuestionAnswerDeprecated = async (questionId?: number) => {
  const {
    data: { id, answer },
  } = await axiosClient.get<QuestionAnswerResponse>(`/v1/questions/${questionId}/answer`, {
    params: {
      questionId,
    },
  });
  return { id, answer };
};
