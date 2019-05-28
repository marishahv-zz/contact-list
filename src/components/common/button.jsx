import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, colorStyle }) => <button type="button" className={`btn ml-4 ${colorStyle}`}>{name}</button>;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  colorStyle: PropTypes.string.isRequired,
};

export default Button;
