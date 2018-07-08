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
      count: this.state.count + 1,
      gameSequence: newTurn
    })
  }

  userTurn = (e) => {
    const { userSequence } = this.state;
    const colour = e.target.className.split(' ').pop();
    const newUserTurn = [...userSequence];
    
    switch (colour) {
      case 'yellow':
        console.log(0);
        newUserTurn.push(0);
        break;
      case 'red':
        console.log(1);
        newUserTurn.push(1);
        break;
      case 'blue':
        console.log(2);
        newUserTurn.push(2);
        break;
      case 'green':
        console.log(3);
        newUserTurn.push(3);
        break;
      default:
        console.log('Something went wrong.' + colour)
    }

    this.setState({ userSequence: newUserTurn })
  }

  startGame = () => {
    this.newTurn();
  }

  render() {

    const { count, strict } = this.state;

    return (
      <main className="App">
        <Modal />
        <h1 className="title">Simon Game</h1>
        <GameBtns userTurn={this.userTurn}/>
        <p className="display">{count}</p>
        <OpBtns 
        toggleStrict={this.toggleStrict} 
        isStrict={strict} 
        start = {this.startGame} />
        <Result />
        <Footer />
      </main>
    );
  }
}

export default App;
