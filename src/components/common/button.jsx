import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, colorStyle, onClick }) => <button type="button" onClick={onClick} className={`btn ml-4 ${colorStyle}`}>{name}</button>;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  colorStyle: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  colorStyle: PropTypes.string.isRequired,
};

export default Button;
