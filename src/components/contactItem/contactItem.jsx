import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../common/button';
import { editContact, deletetContact } from '../../actions';

class ContactItem extends React.Component {
  // editClickHandler = () => {
  //   // const { contact: { contact, onDeleteClick } } = this.props;
  //   const { contact, onEditClick } = this.props;
  //   onEditClick(contact);
  // };

  render() {
    const { contact: { id, name, phone }, onDeleteClick } = this.props;

    return (
      <tr>
        <td>{name}</td>
        <td>{phone}</td>
        <td>
          <Link to={`/edit/${id}`} className="btn btn-primary" onClick={this.editClickHandler}>Edit</Link>
          <Button colorStyle="btn-secondary" onClick={onDeleteClick} name="Delete" />
        </td>
      </tr>
    );
  }
}

// const ContactItem = ({ contact: { id, name, phone }, onEditClick, onDeleteClick }) => (
//   <tr>
//     <td>{name}</td>
//     <td>{phone}</td>
//     <td>
//       <Link to={`/edit/${id}`} className="btn btn-primary" onClick={editClickHandler}>Edit</Link>
//       <Button colorStyle="btn-secondary" onClick={onDeleteClick} name="Delete" />
//     </td>
//   </tr>
// );


const mapDispatchToProps = (dispatch, ownProps) => {
  const { contact: { id } } = ownProps;

  return {
    onDeleteClick: () => dispatch(deletetContact(id)),
    onEditClick: () => dispatch(editContact(id)),
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
    onDeleteClick: PropTypes.func,
  }).isRequired,
};
