import _ from 'lodash';
import { FETCH_NEWS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, ...action.payload.data.articles };
    default:
      return state;
  }
};
