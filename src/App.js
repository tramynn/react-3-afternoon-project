import React, { Component } from 'react';
//components

//css
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App-main-container">
        <header className="App-header">
          <nav className="App-home-nav">
          </nav>
        </header>
        <main className="App-body">
          <section className="App-text-box">
          </section>
          <section className="App-text-box-nav">
            <section className="App-previous-nav">
              
            </section>
            <section className="App-edit-delete-new">
              <section className="App-edit-nav">

              </section>
              <section className="App-delete-nav">

              </section>
              <section className="App-new-nav">

              </section>
            </section>
            <section className="App-next-nav">

            </section>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
