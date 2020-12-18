import newsapi from '../api/newsapi';
import { FETCH_NEWS, SELECT_NEWS_ITEM, SELECT_COUNTRY } from './types';

export const fetchNews = () => {
  return async (dispatch, getState) => {
    if (!getState().news.country) {
      await dispatch({
        type: SELECT_COUNTRY,
        payload: 'GB',
      });
    }

    try {
      const response = await newsapi.get(
        `/top-headlines?country=${getState().news.country}`
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
