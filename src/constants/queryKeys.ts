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
