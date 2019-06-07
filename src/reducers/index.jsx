import { combineReducers } from 'redux';
import { contactsReduser } from './contactsReduser';

export default combineReducers({
  contacts: contactsReduser,
});
