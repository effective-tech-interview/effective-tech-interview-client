interface MainCategoryResponse {
  id: number;
  name: string;
}

interface MainCategoriesResponse {
  categories: MainCategoryResponse[];
}

interface MidCategoryResponse {
  id: number;
  imageUrl: string;
  name: string;
}

interface MidCategoriesResponse {
  name: string;
  categories: MidCategoryResponse[];
}

interface RandomQuestionDeprecatedResponse {
  id: number;
  question: string;
}

interface QuestionDeprecatedResponse {
  pageQuestionId: number;
  question: string;
  userAnswer: string;
  aiAnswer: string;
}

interface QuestionResponse {
  pageQuestionId: number;
  question: string;
  memberAnswer: string;
  aiAnswer: string;
  feedback: string;
}

interface QuestionsDeprecatedResponse {
  pageId: number;
  questions: QuestionResponse[];
}

interface QuestionsResponse {
  pageId: number;
  midCategoryId: number;
  questions: QuestionResponse[];
}

interface QuestionAnswerDeprecatedResponse {
  id: number;
  answer: string;
}

interface PagesResponse {
  id: number;
}

interface MemberAnswerResponse {
  memberAnswer: string;
}

interface User {
  nickname: string;
  email: string;
}
