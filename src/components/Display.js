import React from 'react';

const Display = props => {
  return <div className="display"> {props.result} </div>;
};

Display.defaultProps = {
  result: '0'
};
export default Display;
