import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  contacts: contactsReducer,
  searchValue: filterReducer,
});
