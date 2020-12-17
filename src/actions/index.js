import newsapi from '../api/newsapi';
import { FETCH_NEWS } from './types';

export const fetchNews = () => {
  return async (dispatch) => {
    const response = await newsapi.get('/top-headlines?country=us');
    console.log('response: ', response);

    dispatch({
      type: FETCH_NEWS,
      payload: response,
    });
  };
};
