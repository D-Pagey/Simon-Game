import React, { Component } from 'react';

import './App.css';
import GameBtns from './components/presentational/GameBtns';
import OpBtns from './components/presentational/OpBtns';
import Result from './components/presentational/Result';
import Footer from './components/presentational/Footer';

class App extends Component {
  render() {
    return (
      <main className="App">
        <h1 className="title">Simon Game</h1>
        <GameBtns />
        <p>0</p>
        <OpBtns />
        <Result />
        <Footer />
      </main>
    );
  }
}

export default App;
