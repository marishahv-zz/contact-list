import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/button';
import { Link } from 'react-router-dom';

export default class ContactItem extends React.Component {
  deleteClickHandler = () => {
    const { propObj: { id, onDeleteBtnClick } } = this.props;
    onDeleteBtnClick(id);
  }

  render() {
    const { propObj: { name, phone } } = this.props;

    return (
      <tr>
        <td>{name}</td>
        <td>{phone}</td>
        <td>
          <Link to='/edit' className='btn btn-primary'>Edit</Link>
          <Button colorStyle="btn-secondary" onClick={this.deleteClickHandler} name="Delete" />
        </td>
      </tr>
    );
  }
}

ContactItem.propTypes = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  phone: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onDeleteClick: PropTypes.func,
}).isRequired;
