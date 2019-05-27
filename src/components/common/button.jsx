import React from 'react';

const Button = props => <button type="button" className={`btn ml-4 ${props.colorStyle}`}>{props.name}</button>;

export default Button;
