import { FETCH_NEWS, SELECT_NEWS_ITEM, SELECT_COUNTRY } from '../actions/types';

const newsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, newsList: action.payload.data.articles };
    case SELECT_NEWS_ITEM:
      return { ...state, selectedNewsItem: action.payload };
    case SELECT_COUNTRY:
      return { ...state, country: action.payload };
    default:
      return state;
  }
};

export default newsReducer;
