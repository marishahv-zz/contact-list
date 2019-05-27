import React from 'react';
import ContactItem from '../contactItem/contactItem';

export default class ContactList extends React.PureComponent {
  state = { contacts: this.props.contacts }

  render() {
    const contactList = this.state.contacts.map(
      item => <ContactItem key={item.id} name={item.name} phone={item.phone} />,
    );

    return (
      <table className="table mt-4">
        <tbody>{contactList}</tbody>
      </table>
    );
  }
}
