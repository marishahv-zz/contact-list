import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/button';

const ToolBar = ({ onInputChange }) => (
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text">Person</span>
    </div>
    <input type="text" className="form-control" placeholder="Name" onChange={onInputChange} />
    <Button colorStyle="btn-primary" name="Add new" />
  </div>
);

ToolBar.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default ToolBar;
