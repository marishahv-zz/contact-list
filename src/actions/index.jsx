import { ADD_CONTACT, DELETE_CONTACT } from '../constants/actionTypes';

export const addContact = contact => ({
  type: ADD_CONTACT,
  payload: {
    ...contact,
  },
});

export const deletetContact = id => ({
  type: DELETE_CONTACT,
  payload: { id },
});

export const editContact = id => ({
  type: EDIT_CONTACT,
  payload: { id },
});
