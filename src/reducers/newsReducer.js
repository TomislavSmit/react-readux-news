import {
  FETCH_NEWS,
  FETCH_NEWS_BY_CATEGORY,
  SELECT_NEWS_ITEM,
  SELECT_COUNTRY,
  FETCH_CATEGORIES,
} from '../actions/types';

const newsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, newsList: action.payload.data.articles };
    case FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    case FETCH_NEWS_BY_CATEGORY:
      return {
        ...state,
        [action.payload.category]: action.payload.data.data.articles,
      };
    case SELECT_NEWS_ITEM:
      return { ...state, selectedNewsItem: action.payload };
    case SELECT_COUNTRY:
      return { ...state, country: action.payload };
    default:
      return state;
  }
};

export default newsReducer;
