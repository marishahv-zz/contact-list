import {
  ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, FILTER_CONTACTS, CLEAR_FILTER,
} from '../constants/actionTypes';

export const addContact = contact => ({
  type: ADD_CONTACT,
  payload: { ...contact },
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: { id },
});

export const editContact = contact => ({
  type: EDIT_CONTACT,
  payload: { ...contact },
});

export const filterContact = searchValue => ({
  type: FILTER_CONTACTS,
  payload: searchValue,
});

export const clearFilter = () => ({
  type: CLEAR_FILTER,
});
