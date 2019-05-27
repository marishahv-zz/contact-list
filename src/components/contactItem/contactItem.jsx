import React from 'react';
import Button from '../common/button';

export default class ContactItem extends React.PureComponent {
  render() {
    const { name, phone } = this.props;
    return (
      <tr>
        <td>{name}</td>
        <td>{phone}</td>
        <td>
          <Button colorStyle="btn-primary" name="Edit" />
          <Button colorStyle="btn-secondary" name="Delete" />
        </td>
      </tr>
    );
  }
}
