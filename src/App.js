import React, { Component } from 'react';
//components
import Header from './components/Header';

//css
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <nav className="App-home-nav">
          </nav>
        </header>
        <body in className="App-body">
          <div className="Body-top-textbox">
            <section className="Textbox">
            </section>
          </div>
          <section className="Body-bottom-nav">
            <section className="Textbox-previous">
            </section>
            <section className="Textbox-middle-nav">
              <section className="Textbox-edit">
              </section>
              <section className="Textbox-delete">
              </section>
              <section className="Textbox-new">
              </section>
            </section>
            <section className="Textbox-next">
            </section>
          </section>
        </body>
      </div>
    );
  }
}

export default App;
