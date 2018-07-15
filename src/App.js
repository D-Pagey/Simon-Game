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
    isActive: false,
    lastEntry: 0,
    strict: false,
    userSequence: [],
    turnOver: false,
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

  isTurnOver = () => {
    const { gameSequence, userSequence } = this.state;

    if (gameSequence.length === userSequence.length) {
      console.log('Same length, stop the buttons');
      this.setState({ turnOver: true })
      return;
    } else {
      console.log('Keep going');
    }
  }

  newTurn = () => {
    const { count } = this.state;
    const newTurn = [...this.state.gameSequence, this.randomButton()]

    this.setState({
      count: count + 1,
      gameSequence: newTurn,
      isActive: true,
      lastEntry: newTurn[newTurn.length - 1],
      turnOver: false
    }, () => {
      setTimeout(() => this.setState({isActive: false}), 1000);
    })
  }

  userTurn = (e) => {
    const { userSequence } = this.state;
    const colour = e.target.className.split(' ').pop();
    const newUserTurn = [...userSequence];
    
    switch (colour) {
      case 'yellow':
        e.target.firstChild.play();
        newUserTurn.push(0);
        break;
      case 'red':
        e.target.firstChild.play();
        newUserTurn.push(1);
        break;
      case 'blue':
        e.target.firstChild.play();
        newUserTurn.push(2);
        break;
      case 'green':
        e.target.firstChild.play();
        newUserTurn.push(3);
        break;
      default:
        console.log('Something went wrong.' + colour)
    }

    this.setState({ userSequence: newUserTurn }, () => this.isTurnOver());
  }

  startGame = () => {
    this.newTurn();
  }

  resetGame = () => {
    this.setState({
      count: 0,
      gameSequence: [],
      isActive: false,
      lastEntry: 0,
      strict: false,
      userSequence: [],
    })
  }

  render() {

    const { count, strict, isActive, lastEntry, turnOver } = this.state;

    return (
      <main className="App">
        <Modal />
        <h1 className="title">Simon Game</h1>

        <GameBtns 
        userTurn={this.userTurn}
        active={isActive}
        lastEntry={lastEntry}
        turnOver={turnOver} />

        <p className="display">{count}</p>

        <OpBtns 
        toggleStrict={this.toggleStrict} 
        isStrict={strict} 
        start={this.startGame}
        reset={this.resetGame} />

        <Result />
        <Footer />
      </main>
    );
  }
}

export default App;
