import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { addContact, editContact } from '../../actions';
import Button from '../common/button';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: props.contact ? props.contact.name : '',
      phoneValue: props.contact ? props.contact.phone : '',
      contactID: props.contact ? props.contact.id : '',
      isNameValid: true,
      isPhoneValid: true,
    };
  }

  handleSaveClick = (e) => {
    e.preventDefault();

    const { handleSaveClick, history } = this.props;
    const { nameValue, phoneValue, contactID } = this.state;

    if (nameValue && phoneValue) {
      handleSaveClick({
        name: nameValue,
        phone: phoneValue,
        id: contactID,
      });
    } else {
      e.preventDefault();
    }
    history.push('/');
  }

  handleNameInputChange = (e) => {
    const character = e.target.value;

    if (/^[a-zA-Z][a-zA-Z\s]*$/.test(character)) {
      this.setState({
        nameValue: character,
        isNameValid: true,
        isPhoneValid: true,
      });
    } else {
      this.setState({
        isNameValid: false,
        isPhoneValid: true,
      });
    }
  }

  handlePhoneInputChange = (e) => {
    const character = e.target.value;

    if (/^\d*$/.test(character) && character) {
      this.setState({
        phoneValue: character,
        isNameValid: true,
        isPhoneValid: true,
      });
    } else {
      this.setState({
        isNameValid: true,
        isPhoneValid: false,
      });
    }
  }

  render() {
    const { title } = this.props;
    const {
      nameValue, phoneValue, isNameValid, isPhoneValid,
    } = this.state;

    return (
      <div>
        <h6>{title}</h6>
        <form className="mt-4">
          <div className="form-group">
            <input type="text" className={`form-control ${isNameValid ? '' : 'border border-danger'}`} maxLength="20" value={nameValue} onChange={this.handleNameInputChange} placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="text" className={`form-control ${isPhoneValid ? '' : 'border border-danger'}`} maxLength="7" value={phoneValue} onChange={this.handlePhoneInputChange} placeholder="Phone" />
          </div>
          <Button colorStyle="btn-primary" name="Save" onClick={this.handleSaveClick} />
          <Link to="/" className="btn btn-secondary ml-4">Cancel</Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSaveClick: (contact) => {
    const { id } = ownProps.match.params;
    if (id) {
      dispatch(editContact(contact));
    } else {
      dispatch(addContact(contact));
    }
  },
});

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  if (id) {
    const { contacts } = state;
    // eslint-disable-next-line radix
    const contact = contacts.find(contactItem => contactItem.id === parseInt(id));

    return { contact };
  }
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditForm));

EditForm.propTypes = {
  title: PropTypes.string.isRequired,
  handleSaveClick: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

EditForm.defaultProps = {
  contact: null,
};
