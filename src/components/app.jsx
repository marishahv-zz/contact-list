import React from 'react';
import Header from './header/header';
import FilterableContactTable from './filterableContactList/filterableContactTable';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Header />
        <FilterableContactTable />
      </div>
    );
  }
}
