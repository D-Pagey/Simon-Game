import React from 'react';

import './index.css';

export default function GameBtns({ userTurn, active, lastEntry }) {
  return (
    <div className="game-container">
      <button 
        className={`btn ${active && lastEntry === 0 ? 'yellow-active' : 'yellow'}`} 
        onClick={userTurn}>
          <audio src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"></audio>
      </button>

      <button 
        className={`btn ${active && lastEntry === 1 ? 'red-active' : 'red'}`} 
        onClick={userTurn}>
          <audio src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"></audio>
      </button>

      <button 
        className={`btn ${active && lastEntry === 2 ? 'blue-active' : 'blue'}`} 
        onClick={userTurn}>
          <audio src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"></audio>
      </button>
      
      <button 
        className={`btn ${active && lastEntry === 3 ? 'green-active' : 'green'}`} 
        onClick={userTurn}>
          <audio src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"></audio>
      </button>
    </div>
  )
}