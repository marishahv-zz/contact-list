import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class EditForm extends React.Component {
  state = {
    nameValue: '',
    phoneValue: '',
    wrongName: false,
    wrongPhone: false,
  }

  handleAddClick = (e) => {
    const { onAddClick } = this.props;
    const { nameValue, phoneValue } = this.state;

    if (nameValue && phoneValue) {
      onAddClick({
        name: nameValue,
        phone: phoneValue,
      });
    } else {
      e.preventDefault();
    }
  }

  handleNameInputChange = (e) => {
    const character = e.target.value;

    if (/^([a-z]+\s)*[a-z]+$/.test(character)) {
      this.setState({
        nameValue: character,
        wrongName: false,
        wrongPhone: false,
      });
    } else {
      this.setState({
        wrongName: true,
        wrongPhone: false,
      });
    }
  }

  handlePhoneInputChange = (e) => {
    const character = e.target.value;

    if (/^\d+$/.test(character)) {
      this.setState({
        phoneValue: character,
        wrongName: false,
        wrongPhone: false,
      });
    } else {
      this.setState({
        wrongName: false,
        wrongPhone: true,
      });
    }
  }

  render() {
    const { title } = this.props;
    const {
      nameValue, phoneValue, wrongName, wrongPhone,
    } = this.state;

    return (
      <div>
        <h6>{title}</h6>
        <form className="mt-4">
          <div className="form-group">
            <input type="text" className={`form-control ${wrongName ? 'border border-danger' : ''}`} maxLength="20" value={nameValue} onChange={this.handleNameInputChange} placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="text" className={`form-control ${wrongPhone ? 'border border-danger' : ''}`} maxLength="7" value={phoneValue} onChange={this.handlePhoneInputChange} placeholder="Phone" />
          </div>
          <Link to="/" className="btn btn-primary ml-4" onClick={this.handleAddClick}>Add</Link>
          <Link to="/" className="btn btn-secondary ml-4">Cancel</Link>
        </form>
      </div>
    );
  }
}

EditForm.propTypes = {
  title: PropTypes.string.isRequired,
  onAddClick: PropTypes.func.isRequired,
};
