import React, { Component } from 'react';
import './App.css';
import Header from  './layouts/header'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-main">
          <Header></Header>
        </div>
      </div>
    );
  }
}

export default App;
