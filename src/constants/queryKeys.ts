export const MAIN_CATEGORY_QUERY_KEYS = {
  getMainCategories: ['getMainCategories'],
};

export const MID_CATEGORY_QUERY_KEYS = {
  getMidCategories(mainCategoryId: number) {
    return ['getMidCategories', mainCategoryId];
  },
};
