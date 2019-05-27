import React from 'react';
import ToolBar from '../toolBar/toolBar';
import ContactList from '../contactList/contactList';
import contacts from '../../data';

export default class FilterableContactTable extends React.PureComponent {
  render() {
    return (
      <main>
        <ToolBar />
        <ContactList contacts={contacts} />
      </main>
    );
  }
}
