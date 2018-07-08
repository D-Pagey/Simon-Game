import React from 'react';

import './index.css';

export default function GameBtns({ userTurn }) {
  return (
    <div className="game-container">
      <button className="btn yellow" onClick={userTurn}>
        <audio src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"></audio>
      </button>
      <button className="btn red" onClick={userTurn}>
        <audio src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"></audio>
      </button>
      <button className="btn blue" onClick={userTurn}>
        <audio src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"></audio>
      </button>
      <button className="btn green" onClick={userTurn}>
        <audio src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"></audio>
      </button>
    </div>
  )
}