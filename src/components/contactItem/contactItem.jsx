import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/button';

const ContactItem = ({ name, phone }) => (
  <tr>
    <td>{name}</td>
    <td>{phone}</td>
    <td>
      <Button colorStyle="btn-primary" name="Edit" />
      <Button colorStyle="btn-secondary" name="Delete" />
    </td>
  </tr>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default ContactItem;
