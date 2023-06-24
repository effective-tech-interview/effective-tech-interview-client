import { axiosClient } from './client';

export type LoginResponse = {
  memberId: number;
  accessToken: string;
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
    data: { memberId, accessToken },
  } = await axiosClient.post<LoginResponse>('/v1/auth/login', { email, password });
  return { memberId, accessToken };
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

export async function postLogout() {
  return await axiosClient.post('/v1/auth/logout');
}

export async function getUser() {
  const {
    data: { nickname, email },
  } = await axiosClient.get<User>('/v1/members/profile');
  return { nickname, email };
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
  } = await axiosClient.get<RandomQuestionDeprecatedResponse>('/v1/questions', {
    params: { midCategoryId },
  });
  return { id, question };
};

export const getPages = async () => {
  const {
    data: { pageId, questions },
  } = await axiosClient.get<QuestionsDeprecatedResponse>('/v2/pages');
  return { pageId, questions };
};

export const getQuestionsDeprecated = async (pageNumber?: number, midCategoryId?: number) => {
  const {
    data: { pageId, questions },
  } = await axiosClient.get<QuestionsDeprecatedResponse>(`/v2/pages/${pageNumber}/questions`, {
    params: {
      midCategoryId,
    },
  });
  return { pageId, questions };
};

export const getQuestionAnswerDeprecated = async (questionId?: number) => {
  const {
    data: { id, answer },
  } = await axiosClient.get<QuestionAnswerDeprecatedResponse>(
    `/v1/questions/${questionId}/answer`,
    {
      params: {
        questionId,
      },
    }
  );
  return { id, answer };
};

export const postSaveQuestionAnswer = async (
  pageId: number,
  pageQuestionId: number,
  memberAnswer: string
) => {
  return await axiosClient.post(`/v2/pages/${pageId}/questions/${pageQuestionId}`, {
    memberAnswer,
  });
};

export const postUserAnswerFeedback = async (pageId: number, pageQuestionId: number) => {
  return await axiosClient.post(`/v2/pages/${pageId}/questions/${pageQuestionId}/feedback`);
};

export const postKakaoCode = async (code: string, redirectUri: string) => {
  const {
    data: { memberId, accessToken },
  } = await axiosClient.post<LoginResponse>('/v1/signup/oauth2/kakao/code', { code, redirectUri });
  return { memberId, accessToken };
};

export const getQuestions = async (pageId?: number) => {
  const {
    data: { pageId: pageNumber, midCategoryId, questions },
  } = await axiosClient.get<QuestionsResponse>(`/v2/pages/${pageId}/questions`, {
    params: { pageId },
  });
  return { pageNumber, midCategoryId, questions };
};

export const postPages = async (midCategoryId: number) => {
  const {
    data: { id },
  } = await axiosClient.post<PagesResponse>('/v2/pages', { midCategoryId });
  return { id };
};

export const postTailQuestion = async (pageId: number, pageQuestionId: number) => {
  return await axiosClient.post(`/v2/pages/${pageId}/questions/${pageQuestionId}/tails`, null, {
    params: {
      pageId,
      pageQuestionId,
    },
  });
};

export const postMemberAnswer = async (
  pageId: number,
  pageQuestionId: number,
  memberAnswer: string
) => {
  return await axiosClient.post(
    `/v2/pages/${pageId}/questions/${pageQuestionId}/member-answer`,
    { memberAnswer },
    {
      params: {
        pageId,
        pageQuestionId,
      },
    }
  );
};

export const postAiAnswer = async (pageId: number, pageQuestionId: number) => {
  return await axiosClient.post(`/v2/pages/${pageId}/questions/${pageQuestionId}/ai-answer`, null, {
    params: {
      pageId,
      pageQuestionId,
    },
  });
};

export const postMemberAnswerFeedback = async (pageId: number, pageQuestionId: number) => {
  return await axiosClient.post(`/v2/pages/${pageId}/questions/${pageQuestionId}/feedback`, null, {
    params: {
      pageId,
      pageQuestionId,
    },
  });
};
