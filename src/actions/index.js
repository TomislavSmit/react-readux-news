import { FETCH_NEWS } from './types';

export const fetchNews = (news) => {
  return {
    type: FETCH_NEWS,
    payload: news,
  };
};
