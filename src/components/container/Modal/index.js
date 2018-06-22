import React, { Component } from 'react';

import './index.css';

export default class Modal extends Component {
    state = {
      modal: false
    }

  handleClick = () => {
    this.setState(prevState => {
      return {
        modal: !prevState.modal
      };
    });
  }

  render() {
    return (
      <div className="modal-container">
       <button type="button" name="button" className="modal-btn">
         <i className="material-icons md-14" onClick={this.handleClick}>
           info_outline</i></button>
       <dialog className="modal-about" open={this.state.modal}>
         <button type="button" name="button" className="modal-cancel">
           <i className="material-icons sm-12" onClick={this.handleClick}>
             clear</i></button>
             
         <h4 className="modal-title">Simon Game</h4>
         <p className="modal-text">This is an Advanced Front End Developer
           project from the FreeCodeCamp curriculum. The user stories to be
           completed are:</p>
         <ul className="user-stories">
           <li className="story">I am presented with a random series of button 
           presses.</li>
           <li className="story">Each time I input a series of button presses 
           correctly, I see the same series of button presses but with an 
           additional step.</li>
           <li className="story">I hear a sound that corresponds to each button 
           both when the series of button presses plays, and when I personally 
           press a button.</li>
           <li className="story">If I press the wrong button, I am notified that
            I have done so, and that series of button presses starts again to 
            remind me of the pattern so I can try again.</li>
           <li className="story"> I can see how many steps are in the current 
           series of button presses.</li>
           <li className="story">If I want to restart, I can hit a button to do 
           so, and the game will return to a single step.</li>
           <li className="story">I can play in strict mode where if I get a 
           button press wrong, it notifies me that I have done so, and the game 
           restarts at a new random series of button presses.</li>
           <li className="story">I can win the game by getting a series of 20 
           steps correct. I am notified of my victory, then the game starts over.</li>
         </ul>
         <p className="modal-text copy">This project was coded in React using
           Create-React-App.
           The code can be seen on <a href="https://github.com/D-Pagey/simon-game"
           target="_blank" rel="noopener noreferrer" className="link">
           Github</a>.</p>
       </dialog>
     </div>
   )
  }
}
