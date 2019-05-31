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
    const { contacts } = this.state;

    const filteredContacts = contacts.filter((contact) => {
      const name = contact.name.toLowerCase().replace(/ /g, '');
      return name.includes(value.toLowerCase());
    });

    if (!value) {
      this.setState({
        contacts: contactsData,
      });
    } else {
      this.setState({
        contacts: filteredContacts,
      });
    }
  };

  clearInput = () => {
    // eslint-disable-next-line no-undef
    const input = document.getElementById('filter');
    input.value = '';
  }

  addNewContact = ({ name, phone }) => {
    const newID = contactsData.length ? (contactsData[contactsData.length - 1].id + 1) : 0;
    const newContact = {
      id: newID,
      name,
      phone,
    };

    contactsData.push(newContact);

    this.setState({
      contacts: contactsData,
    });
  }

  deleteContact = (id) => {
    const index = contactsData.findIndex(contact => contact.id === id);
    contactsData.splice(index, 1);

    this.setState({
      contacts: contactsData,
    }, () => {
      this.clearInput();
    });
  }

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
