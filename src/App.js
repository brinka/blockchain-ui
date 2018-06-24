import React, { Component } from 'react';
import './App.css';
import SkuInput from './components/SkuInput';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <SkuInput/>
      </div>
    );
  }
}

export default App;
