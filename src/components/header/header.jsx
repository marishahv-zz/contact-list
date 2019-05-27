import React from 'react';

export default class Header extends React.PureComponent {
  render() {
    return (
      <header className="jumbotron">
        <h1 className="display-4">Contact List</h1>
        <hr className="my-4" />
      </header>
    );
  }
}
