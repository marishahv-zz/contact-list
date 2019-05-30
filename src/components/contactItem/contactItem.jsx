import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../common/button';

export default class ContactItem extends React.Component {
  deleteClickHandler = () => {
    const { itemProps: { id, onDeleteBtnClick } } = this.props;
    onDeleteBtnClick(id);
  }

  render() {
    const { itemProps: { name, phone } } = this.props;

    return (
      <tr>
        <td>{name}</td>
        <td>{phone}</td>
        <td>
          <Link to="/edit" className="btn btn-primary">Edit</Link>
          <Button colorStyle="btn-secondary" onClick={this.deleteClickHandler} name="Delete" />
        </td>
      </tr>
    );
  }
}

ContactItem.propTypes = {
  itemProps: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    onDeleteClick: PropTypes.func,
  }).isRequired,
};
