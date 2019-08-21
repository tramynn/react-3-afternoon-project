import React, { Component } from 'react';
//components

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
      <section className="App-main-container">
        <header className="App-header">
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
      </section>
    );
  }
}

export default App;
