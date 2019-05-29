import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../contactItem/contactItem';

const ContactList = ({ contacts, onDeleteClick }) => {
  const contactList = contacts.map((item) => {
    const obj = {
      id: item.id,
      name: item.name,
      phone: item.phone,
      onDeleteBtnClick: onDeleteClick,
    }

    return <ContactItem propObj={obj} key={item.id} />;
  })

  return (
    <React.Fragment>
      {(contacts.length === 0) && <p className="mt-4">No results found :(</p>}
      <table className="table mt-4">
        <tbody>
          {contactList}
        </tbody>
      </table>
    </React.Fragment>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactList;
