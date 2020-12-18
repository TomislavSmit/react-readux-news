import newsapi from '../api/newsapi';
import {
  FETCH_NEWS,
  FETCH_NEWS_BY_CATEGORY,
  SELECT_NEWS_ITEM,
  SELECT_COUNTRY,
  FETCH_CATEGORIES,
} from './types';

export const fetchNews = (term) => {
  return async (dispatch, getState) => {
    if (!getState().news.country) {
      await dispatch({
        type: SELECT_COUNTRY,
        payload: 'GB',
      });
    }

    const q = term ? term : '';

    try {
      const response = await newsapi.get(
        `/top-headlines?country=${
          getState().news.country
        }&q=${q}&category=business`
      );

      if (!response) {
        throw new Error('Error fetching news');
      }

      dispatch({
        type: FETCH_NEWS,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchNewsByCategory = (category) => {
  return async (dispatch) => {
    try {
      const response = await newsapi.get(
        `/top-headlines?category=${category}&pageSize=5`
      );

      const payload = {
        category: category,
        data: response,
      };

      dispatch({
        type: FETCH_NEWS_BY_CATEGORY,
        payload: payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const selectNewsItem = (newsItem) => {
  return {
    type: SELECT_NEWS_ITEM,
    payload: newsItem,
  };
};

export const selectCountry = (country) => {
  return async (dispatch) => {
    dispatch({
      type: SELECT_COUNTRY,
      payload: country,
    });

    dispatch(fetchNews());
  };
};

export const searchNews = (term) => {
  return async (dispatch) => {
    dispatch(fetchNews(term));
  };
};

export const fetchCategories = () => {
  const categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];

  return {
    type: FETCH_CATEGORIES,
    payload: categories,
  };
};
