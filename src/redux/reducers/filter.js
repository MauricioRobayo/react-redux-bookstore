import { actionTypes } from '../actions';

const filter = (state = 'All', { type, filter }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return filter;
    default:
      return state;
  }
};

export default filter;
