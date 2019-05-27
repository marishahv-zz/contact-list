import React from 'react';

export class ContactItem extends React.PureComponent {
  render() {
    <li className="list-group-item d-flex justify-content-between align-items-center">
    {this.props.name}
      <Button colorStyle="btn-primary" name="Edit" />
			<Button colorStyle="btn-secondary" name="Delete" />
    </li>;
  }
}
