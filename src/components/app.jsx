import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/header';
// import contactsData from '../data';
import ToolBar from './toolBar/toolBar';
import ContactList from './contactList/contactList';
import EditForm from './editForm/editForm';

export default class App extends React.Component {
  // state = {
  //   contacts: contactsData,
  //   searchValue: '',
  // };

  handleInputChange = (e) => {
    const { value } = e.target;

    this.setState({
      searchValue: value,
    });
  };

  filterListByValue = () => {
    const { contacts, searchValue: value } = this.state;

    return contacts.filter((contact) => {
      const name = contact.name.toLowerCase().replace(/ /g, '');
      return name.includes(value.toLowerCase());
    });
  };

  // filterListByID = (id) => {
  //   const { contacts } = this.state;
  //
  //   return contacts.find(contact => contact.id === parseInt(id, 10));
  // };

  // deleteContact = (id) => {
  //   const { contacts } = this.state;
  //
  //   this.setState({
  //     contacts: contacts.filter(contact => contact.id !== id),
  //   });
  // };

  // editContact = ({ id, name, phone }) => {
  //   const { contacts } = this.state;
  //   const index = contacts.findIndex(contact => contact.id === id);
  //   contacts[index].name = name;
  //   contacts[index].phone = phone;
  //
  //   this.setState({
  //     contacts,
  //     searchValue: '',
  //   });
  // }

  render() {
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
                  <ContactList />
                </main>
              )}
            />
            {/* <Route path="/add-new" render={() => (<EditForm title="Add contact" onSaveClick={this.addNewContact} />)} /> */}
            <Route path="/add-new" render={() => (<EditForm title="Add contact" />)} />
            <Route path="/edit/:id" render={() => (<EditForm title="Edit contact" />)} />
            {/* <Route path="/edit/:id" render={props => (<EditForm contact={this.filterListByID(props.match.params.id)} title="Edit contact" onSaveClick={this.editContact} />)} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}
