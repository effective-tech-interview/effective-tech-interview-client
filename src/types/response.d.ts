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

interface QuestionResponse {
  pageQuestionId: number;
  question: string;
  userAnswer: string;
  aiAnswer: string;
}

interface QuestionsResponse {
  pageId: number;
  questions: QuestionResponse[];
}

interface QuestionAnswerDeprecatedResponse {
  id: number;
  answer: string;
}
