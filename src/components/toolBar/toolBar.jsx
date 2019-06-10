import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { filterContact, clearFilter } from '../../actions';


class ToolBar extends React.Component {
  handleInputChange = (e) => {
    const { onInputChange } = this.props;
    const { value } = e.target;

    onInputChange(value);
  };

  render() {
    const { onAddClick } = this.props;

    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Person</span>
        </div>
        <input type="text" className="form-control" id="filter" placeholder="Name" onChange={this.handleInputChange} />
        <Link to="/add-new" className="btn btn-primary ml-4" onClick={onAddClick}>Add new</Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onInputChange: searchValue => dispatch(filterContact(searchValue)),
  onAddClick: () => dispatch(clearFilter()),
});

export default connect(null, mapDispatchToProps)(ToolBar);

ToolBar.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired,
};
