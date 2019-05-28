import React from 'react';
import Header from './header/header';
import contactsData from '../data';
import ToolBar from './toolBar/toolBar';
import ContactList from './contactList/contactList';


export default class App extends React.PureComponent {
  state = {
    contacts: contactsData,
  };

  handleInputChange = (evt) => {
    const value = evt.target.value;

    const filteredContacts = contactsData.filter(contact => {
      const name = contact.name.toLowerCase().replace(/ /g, '');
      return name.indexOf(value.toLowerCase()) !== -1;
    });

    this.setState({
      contacts: filteredContacts,
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <main>
          <ToolBar inputChangeHandler={this.handleInputChange} />
          <ContactList contacts={this.state.contacts} />
        </main>
      </div>
    );
  }
}
