import { FETCH_NEWS } from '../actions/types';

const INITIAL_STATE = {
  news: [],
};

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
