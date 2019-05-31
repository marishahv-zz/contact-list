import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../common/button';

export default class ContactItem extends React.Component {
  deleteClickHandler = () => {
    const { contact: { id, onDeleteClick } } = this.props;
    onDeleteClick(id);
  }

  editClickHandler = () => {
    const { contact: { id, onEditClick } } = this.props;
    onEditClick(id);
  }

  render() {
    const { contact: { name, phone } } = this.props;

    return (
      <tr>
        <td>{name}</td>
        <td>{phone}</td>
        <td>
          <Link to="/edit" className="btn btn-primary" onClick={this.editClickHandler}>Edit</Link>
          <Button colorStyle="btn-secondary" onClick={this.deleteClickHandler} name="Delete" />
        </td>
      </tr>
    );
  }
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    onDeleteClick: PropTypes.func,
  }).isRequired,
};
