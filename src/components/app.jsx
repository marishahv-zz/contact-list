import React from 'react';
import Header from './header/header';
import contacts from '../data';
import ToolBar from './toolBar/toolBar';
import ContactList from './contactList/contactList';


export default class App extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Header />
        <main>
          <ToolBar />
          <ContactList contacts={contacts} />
        </main>
      </div>
    );
  }
}
