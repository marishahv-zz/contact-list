import React from 'react';
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

export default ContactItem;
