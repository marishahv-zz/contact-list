import React from 'react';

const Button = ({ name, colorStyle }) => <button type="button" className={`btn ml-4 ${colorStyle}`}>{name}</button>;

export default Button;
