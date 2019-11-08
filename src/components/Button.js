import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = props => {
  const handleClick = btnName => {
    return props.clickHandler(btnName);
  };
  return (
    <div
      className="button"
      style={{
        width: `${decideWidth(props.width)}`,
        backgroundColor: `${props.color}`
      }}
      onClick={() => handleClick(props.name)}
    >
      {props.name}
    </div>
  );
};
const decideWidth = bool => {
  return bool ? '50%' : '25%';
};
Button.propTypes = {
  name: PropTypes.string
};

Button.defaultProps = {
  width: false,
  color: '#e99748'
};

export default Button;
