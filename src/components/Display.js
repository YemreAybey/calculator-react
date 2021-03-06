import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = props => {
  return <div className="display"> {props.result} </div>;
};

Display.defaultProps = {
  result: '0'
};

Display.propTypes = {
  result: PropTypes.string
};

export default Display;
