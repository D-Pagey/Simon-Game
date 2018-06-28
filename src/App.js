import React, { Component } from 'react';

import './App.css';
import Modal from './components/container/Modal';
import GameBtns from './components/presentational/GameBtns';
import OpBtns from './components/presentational/OpBtns';
import Result from './components/presentational/Result';
import Footer from './components/presentational/Footer';

class App extends Component {
  state = {
    strict: false,
  }

  toggleStrict = () => {
    this.setState(prevState => {
      return {
        strict: !prevState.strict
      }
    });
  }


  render() {
    return (
      <main className="App">
        <Modal />
        <h1 className="title">Simon Game</h1>
        <GameBtns />
        <p className="display">0</p>
        <OpBtns 
        toggleStrict={this.toggleStrict} 
        isStrict={this.state.strict} />
        <Result />
        <Footer />
      </main>
    );
  }
}

export default App;
