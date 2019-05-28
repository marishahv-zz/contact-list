import React from 'react';
import ContactItem from '../contactItem/contactItem';

const ContactList = ({ contacts }) => (
  <table className="table mt-4">
    <tbody>
      {contacts.map(item => <ContactItem key={item.id} name={item.name} phone={item.phone} />)}
    </tbody>
  </table>
);

export default ContactList;
