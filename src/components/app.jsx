import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/header';
import contactsData from '../data';
import ToolBar from './toolBar/toolBar';
import ContactList from './contactList/contactList';
import EditForm from './editForm/editForm';


export default class App extends React.Component {
  state = {
    contacts: contactsData,
    filteredContacts: '',
  };

  handleInputChange = (e) => {
    const { value } = e.target;
    const { contacts } = this.state;

    const filteredContacts = contacts.filter((contact) => {
      const name = contact.name.toLowerCase().replace(/ /g, '');
      return name.includes(value.toLowerCase());
    });

    this.setState({
      filteredContacts,
    });
  };

  addNewContact = ({ name, phone }) => {
    const { contacts } = this.state;
    const newID = contacts.length ? (contacts[contacts.length - 1].id + 1) : 0;
    const newContact = {
      id: newID,
      name,
      phone,
    };

    this.setState({
      contacts: [...contacts, newContact],
      filteredContacts: '',
    });
  };

  deleteContact = (id) => {
    const { contacts } = this.state;

    this.setState({
      contacts: contacts.filter(contact => contact.id !== id),
      filteredContacts: '',
    });
  };

  getContacts = () => {
    const { contacts, filteredContacts } = this.state;

    return filteredContacts || contacts;
  }

  render() {
    const contacts = this.getContacts();

    return (
      <div className="container">
        <Header />
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <main>
                  <ToolBar onInputChange={this.handleInputChange} />
                  <ContactList contacts={contacts} onDeleteClick={this.deleteContact} />
                </main>
              )}
            />
            <Route path="/add-new" render={() => (<EditForm title="Edit contact" onAddClick={this.addNewContact} />)} />
          </Switch>
        </Router>
      </div>
    );
  }
}
