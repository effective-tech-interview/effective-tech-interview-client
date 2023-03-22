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

export const PAGES_QUERY_KEYS = {
  getPages: ['getPages'],
};

export const QUESTIONS_QUERY_KEYS = {
  getQuestions(pageId?: number, midCategoryId?: number) {
    return ['getQuestions', pageId, midCategoryId];
  },
};

export const QUESTION_ANSWER_QUERY_KEYS = {
  getQuestionAnswer(questionId?: number) {
    return ['getQuestionAnswer', questionId];
  },
};
