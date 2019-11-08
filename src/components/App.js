import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';

class App extends React.Component {
  state = { total: '', next: '', operation: '' };

  handleClick = btnName => {
    const data = calculate(this.state, btnName);
    this.setState({ ...data });
  };

  render() {
    const { total, next } = this.state;
    return (
      <div id="calc-area">
        <Display result={next ? next : total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
