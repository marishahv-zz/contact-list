import React from 'react';
import Button from '../common/button';

const ToolBar = ({ inputChangeHandler }) => (
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text">Person</span>
    </div>
    <input type="text" className="form-control" placeholder="Name" onChange={() => { inputChangeHandler(event); }} />
    <Button colorStyle="btn-primary" name="Add new" />
  </div>
);

export default ToolBar;
