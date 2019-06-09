import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ToolBar = ({ onInputChange }) => (
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text">Person</span>
    </div>
    <input type="text" className="form-control" id="filter" placeholder="Name" onChange={onInputChange} />
    <Link to="/add-new" className="btn btn-primary ml-4">Add new</Link>
  </div>
);

ToolBar.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {

  return {
    onDeleteClick: () => dispatch(deletetContact(id)),
    onEditClick: () => dispatch(editContact(id)),
  };
};
export default connect(null, mapDispatchToProps)(ToolBar);
