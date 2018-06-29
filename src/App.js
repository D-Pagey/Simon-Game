import React, { Component } from 'react';

import './App.css';
import Modal from './components/container/Modal';
import GameBtns from './components/presentational/GameBtns';
import OpBtns from './components/presentational/OpBtns';
import Result from './components/presentational/Result';
import Footer from './components/presentational/Footer';

class App extends Component {
  state = {
    count: 0,
    gameSequence: [],
    strict: false,
    userSequence: [],
  }

  toggleStrict = () => {
    this.setState(prevState => {
      return {
        strict: !prevState.strict
      }
    });
  }

  randomButton = () => {
    return Math.floor(Math.random() * Math.floor(4));
  }

  newTurn = () => {
    const newTurn = [...this.state.gameSequence, this.randomButton()] 
    this.setState({
      gameSequence: newTurn,
    })
  }


  render() {
    return (
      <main className="App">
        <Modal />
        <h1 className="title">Simon Game</h1>
        <GameBtns />
        <p className="display">{this.state.count}</p>
        <OpBtns 
        toggleStrict={this.toggleStrict} 
        isStrict={this.state.strict} 
        newTurn = {this.newTurn} />
        <Result />
        <Footer />
      </main>
    );
  }
}

export default App;
