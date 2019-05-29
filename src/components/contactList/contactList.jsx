import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../contactItem/contactItem';

const ContactList = ({ contacts, onDeleteClick }) => (
  <React.Fragment>
    {(contacts.length === 0) && <p className="mt-4">No results found :(</p>}
    <table className="table mt-4">
      <tbody>
        {contacts.map(item => (
          <ContactItem
            id={item.id}
            key={item.id}
            name={item.name}
            phone={item.phone}
            onDeleteClick={onDeleteClick}
          />
        ))
        }
      </tbody>
    </table>
  </React.Fragment>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactList;
