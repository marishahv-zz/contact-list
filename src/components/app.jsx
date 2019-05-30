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

  addNewContact = ({ name, phone}) => {
    const { contacts } = this.state;
    const lastID = contacts[contacts.length - 1].id;
    const newContact = {
      id: lastID + 1,
      name,
      phone,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  }

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
