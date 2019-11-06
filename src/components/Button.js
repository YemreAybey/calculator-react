import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = props => {
  return (
    <div
      className="button"
      style={{
        width: `${decideWidth(props.width)}`,
        backgroundColor: `${props.color}`
      }}
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
