import newsapi from '../api/newsapi';
import {
  FETCH_NEWS,
  FETCH_NEWS_BY_CATEGORY,
  SELECT_NEWS_ITEM,
  SELECT_COUNTRY,
  FETCH_CATEGORIES,
  SET_SEARCH_TERM,
} from './types';

export const fetchNews = () => {
  return async (dispatch, getState) => {
    if (!getState().news.country) {
      await dispatch(selectCountry('GB'));
    }

    const q = getState().news.term ? getState().news.term : '';

    try {
      const response = await newsapi.get(
        `/top-headlines?country=${getState().news.country}&q=${q}`
      );

      dispatch({
        type: FETCH_NEWS,
        payload: response,
      });
    } catch (error) {
      await dispatch({
        type: FETCH_NEWS,
        payload: {
          data: {
            articles: [],
          },
        },
      });
    }
  };
};

export const fetchNewsByCategory = (category) => {
  return async (dispatch, getState) => {
    try {
      if (!getState().news.country) {
        await dispatch(selectCountry('GB'));
      }

      const response = await newsapi.get(
        `/top-headlines?country=${
          getState().news.country
        }&category=${category}&pageSize=5`
      );

      dispatch({
        type: FETCH_NEWS_BY_CATEGORY,
        payload: {
          category: category,
          data: response.data,
        },
      });
    } catch (error) {
      await dispatch({
        type: FETCH_NEWS_BY_CATEGORY,
        payload: {
          category: category,
          data: {
            articles: [],
          },
        },
      });
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
    await dispatch({
      type: SELECT_COUNTRY,
      payload: country,
    });

    dispatch(fetchNews());
  };
};

export const setSearchTerm = (term) => {
  return async (dispatch) => {
    await dispatch({
      type: SET_SEARCH_TERM,
      payload: term,
    });
  };
};

export const searchNews = (term) => {
  return async (dispatch) => {
    await dispatch(setSearchTerm(term));

    dispatch(fetchNews());
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
