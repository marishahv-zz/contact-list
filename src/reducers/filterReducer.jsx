import { FILTER_CONTACTS, CLEAR_FILTER } from '../constants/actionTypes';

const filterReducer = (searchValue = '', action) => {
  switch (action.type) {
    case FILTER_CONTACTS: {
      return action.payload;
    }
    case CLEAR_FILTER: {
      return '';
    }
    default:
      return searchValue;
  }
};

export default filterReducer;
