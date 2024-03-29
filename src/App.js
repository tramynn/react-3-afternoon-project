import React, { Component } from 'react';
//components
import Header from './components/Header';
import Textbox from './components/Textbox';
import BottomNav from './components/BottomNav/BottomNav';
//css
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <body in className="App-body">
          <div className="Body-top-textbox">
            <Textbox />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
