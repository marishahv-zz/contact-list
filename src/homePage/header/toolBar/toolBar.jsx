import React from 'react';
import Button from '../../../common/button';

export class ToolBar extends React.PureComponent {
  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Person</span>
        </div>
        <input type="text" className="form-control" placeholder="Name" />
				<Button colorStyle="btn-primary" name="Add new" />
      </div>
    );
  }
}
