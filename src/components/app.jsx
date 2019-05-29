import React from 'react';
import Header from './header/header';
import contactsData from '../data';
import ToolBar from './toolBar/toolBar';
import ContactList from './contactList/contactList';


export default class App extends React.PureComponent {
  state = {
    contacts: contactsData,
  };

  handleInputChange = (e) => {
    const { value } = e.target;

    const filteredContacts = contactsData.filter((contact) => {
      const name = contact.name.toLowerCase().replace(/ /g, '');
      return name.includes(value.toLowerCase());
    });

    this.setState({
      contacts: filteredContacts,
    });
  }

  render() {
    const { contacts } = this.state;
    return (
      <div className="container">
        <Header />
        <main>
          <ToolBar onInputChange={this.handleInputChange} />
          <ContactList contacts={contacts} />
        </main>
      </div>
    );
  }
}
