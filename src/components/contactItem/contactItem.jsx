import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/button';

export default class ContactItem extends React.Component {
  deleteClickHandler = () => {
    const { id, onDeleteClick } = this.props;
    onDeleteClick(id);
  }

  render() {
    const { name, phone } = this.props;

    return (
      <tr>
        <td>{name}</td>
        <td>{phone}</td>
        <td>
          <Button colorStyle="btn-primary" name="Edit" />
          <Button colorStyle="btn-secondary" onClick={this.deleteClickHandler} name="Delete" />
        </td>
      </tr>
    );
  }
}

ContactItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
