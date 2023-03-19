export const MAIN_CATEGORIES_QUERY_KEYS = {
  getMainCategories: ['getMainCategories'],
};

export const MID_CATEGORIES_QUERY_KEYS = {
  getMidCategories(mainCategoryId: number) {
    return ['getMidCategories', mainCategoryId];
  },
};

export const MID_CATEGORY_QUERY_KEYS = {
  getMidCategory(midCategory: number) {
    return ['getMidCategory', midCategory];
  },
};

export const RANDOM_QUESTION_QUERY_KEYS = {
  getRandomQuestion(midCategoryId: number) {
    return ['getRandomQuestion', midCategoryId];
  },
};

export const QUESTION_ANSWER_QUERY_KEYS = {
  getQuestionAnswer(questionId?: number) {
    return ['getQuestionAnswer', questionId];
  },
};

export const USER_INFO_QUERY_KEYS = {
  USER_INFO: ['USER_INFO'],
};
