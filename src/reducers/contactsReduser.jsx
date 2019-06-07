import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from '../constants/actionTypes';

export const contactsReduser = (prevContacts = [], action) => {
  switch (action.type) {
    case ADD_CONTACT: {
      const contact = action.payload;
      const newID = prevContacts.length ? (prevContacts[prevContacts.length - 1].id + 1) : 0;
      const newContact = {
        id: contact.id || newID,
        name: contact.name,
        phone: contact.phone,
      };
      return [...prevContacts, newContact];
    }
    case DELETE_CONTACT: {
      const { id } = action.payload;

      return prevContacts.filter(contact => contact.id !== id);
    }
    case EDIT_CONTACT: {
      const { id } = action.payload;

      const contact = prevContacts.find(contact => contact.id === id);
      contact.name = name;
      contact.phone = phone;

      return [...prevContacts];
    }
    default:
      return prevContacts;
  }
};
