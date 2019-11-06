import React from 'react';

const Button = props => {
  return <div>{props.name}</div>;
};

Button.propTypes = {
  name: PropTypes.string
};

export default Button;
