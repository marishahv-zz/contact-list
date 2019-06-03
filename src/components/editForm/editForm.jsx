import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class EditForm extends React.Component {
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
    const { onSaveClick } = this.props;
    const { nameValue, phoneValue, contactID } = this.state;

    if (nameValue && phoneValue) {
      onSaveClick({
        name: nameValue,
        phone: phoneValue,
        id: contactID,
      });
    } else {
      e.preventDefault();
    }
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

    if (/^\d*$/.test(character)) {
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
          <Link to="/" className="btn btn-primary ml-4" onClick={this.handleSaveClick}>Save</Link>
          <Link to="/" className="btn btn-secondary ml-4">Cancel</Link>
        </form>
      </div>
    );
  }
}

EditForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    onDeleteClick: PropTypes.func,
  }),
};

EditForm.defaultProps = {
  contact: null,
};
