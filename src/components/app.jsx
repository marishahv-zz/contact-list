import React from 'react';
import Header from './header/header';
import contactsData from '../data';
import ToolBar from './toolBar/toolBar';
import ContactList from './contactList/contactList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EditForm from './editForm/editForm';


export default class App extends React.Component {
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
  };

  deleteContact = (id) => {
    this.setState(prevState => (
      { contacts: prevState.contacts.filter(contact => contact.id !== id) }));
  };


  render() {
    const { contacts } = this.state;
    return (
      <div className="container">
        <Header />
        <Router>
          <main>
            <ToolBar onInputChange={this.handleInputChange} />
            <ContactList contacts={contacts} onDeleteClick={this.deleteContact} />
          </main>
          <Route path="/edit" render={props => (<EditForm title="Edit contact" {...props} />)} />
        </Router>
      </div>
    );
  }
}
