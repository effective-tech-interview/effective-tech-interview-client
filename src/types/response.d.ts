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
interface RandomQuestionResponse {
  id: number;
  question: string;
}
interface User {
  nickname: string;
  email: string;
}
