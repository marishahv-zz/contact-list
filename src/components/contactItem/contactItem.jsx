import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../common/button';
import { deleteContact, clearFilter } from '../../actions';

const ContactItem = ({ contact: { id, name, phone }, onEditClick, onDeleteClick }) => (
  <tr>
    <td>{name}</td>
    <td>{phone}</td>
    <td>
      <Link to={`/edit/${id}`} className="btn btn-primary" onClick={onEditClick}>Edit</Link>
      <Button colorStyle="btn-secondary" onClick={onDeleteClick} name="Delete" />
    </td>
  </tr>
);

const mapDispatchToProps = (dispatch, ownProps) => {
  const { contact: { id } } = ownProps;

  return {
    onDeleteClick: () => dispatch(deleteContact(id)),
    onEditClick: () => dispatch(clearFilter()),
  };
};

export default connect(null, mapDispatchToProps)(ContactItem);

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }).isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
