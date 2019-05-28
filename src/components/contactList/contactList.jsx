import React from 'react';
import ContactItem from '../contactItem/contactItem';

const ContactList = ({ contacts }) => (
  <React.Fragment>
    {(contacts.length === 0) && <p className="mt-4">No results found :(</p>}
    <table className="table mt-4">
      <tbody>
        {contacts.map(item => <ContactItem key={item.id} name={item.name} phone={item.phone} />)}
      </tbody>
    </table>
  </React.Fragment>
);

export default ContactList;
