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
      <div className="App-main-container">
        <header className="App-header">
          <nav className="App-home-nav">
          </nav>
        </header>
        <main className="App-body">
          <div className="Body-top-text">
            <section className="Textbox">
            </section>
          </div>
          <div className="Body-bottom-nav">
            <section className="Textbox-previous-nav">
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
          </div>
        </main>
      </div>
    );
  }
}

export default App;
