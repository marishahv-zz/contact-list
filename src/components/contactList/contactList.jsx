import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactItem from '../contactItem/contactItem';

const ContactList = ({ contacts, searchValue }) => {
  const filteredContacs = contacts.filter((contact) => {
    const name = contact.name.toLowerCase().replace(/ /g, '');

    return name.includes(searchValue.toLowerCase());
  });

  const contactList = filteredContacs.map((contact, index) => {
    const obj = {
      id: contact.id,
      name: contact.name,
      phone: contact.phone,
    };

    // eslint-disable-next-line react/no-array-index-key
    return <ContactItem contact={obj} key={`${contact.id}${index}`} />;
  });

  return (
    <React.Fragment>
      {(contactList.length === 0) && <p className="mt-4">No results found :(</p>}
      <table className="table mt-4">
        <tbody>
          {contactList}
        </tbody>
      </table>
    </React.Fragment>
  );
};

const mapStateToProps = ({ contacts, searchValue }) => ({
  contacts,
  searchValue,
});

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchValue: PropTypes.string.isRequired,
};
