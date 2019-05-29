import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/button';

export default class EditForm extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div>
        <h6>{title}</h6>
        <form className="mt-4">
          <div className="form-group">
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Phone" />
          </div>
          <Button colorStyle="btn-primary" name="Submit" />
        </form>
      </div>
    );
  }
}

EditForm.propTypes = {
  title: PropTypes.string.isRequired,
};
