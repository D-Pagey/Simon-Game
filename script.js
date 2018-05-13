/**
 * Constants
 */
const gameBtns = document.querySelectorAll('.btn');
const opBtns = document.querySelectorAll('.button');
const display = document.querySelector('.display');
const result = document.querySelector('.result-modal');
const resultMsg = document.querySelector('.result-message');

let strict = false;
let sequence = [];
let processed = [];
let userSequence = [];
let intervalId;

/**
 * Methods
 */
function randomNumber() {
    return Math.floor(Math.random() * Math.floor(4));
}

function newEntry() {
    sequence.push(randomNumber());
    updateCount();
    return;
}

function processTurn() {
    if (sequence.length === 0 ) {
        clearInterval(intervalId);
        enableGameBtns();
    } else {
        let element = gameBtns[sequence[0]];
        element.className = element.id + '-active btn';
        setTimeout(function() {
            element.className = element.id + ' btn';
        }, 2000);
        processed.push(sequence.shift());
    }
}

function userTurn(e) {
    userSequence.push(parseInt(e.target.dataset.value));
    isTurnOver();
}

function startGame() {
    opBtns[0].removeEventListener('click', startGame); // Doesnt work
    disableGameBtns();
    intervalId = setInterval(processTurn, 1500);
    return;
}

function isTurnOver() {
    if (userSequence.length === processed.length) {
        disableGameBtns();
        console.log('Your turn is over.');
        rightOrWrong();
    } else {
        console.log('Keep going');
    }
}

function rightOrWrong() {
    if (JSON.stringify(userSequence) === JSON.stringify(processed) &&
        processed.length == 20) {
            gameOver('You Won! lets go again...');
            resetGame();
            newEntry();
            setTimeout(startGame, 1000);
        } else if (JSON.stringify(userSequence) === JSON.stringify(processed)) {
        console.log('Well done you got it right!');
        correct();
    } else {
        if (strict) {
            gameOver('Strict mode => starting over.');
            resetGame();
            newEntry();
            setTimeout(startGame, 2000);
        } else {
            gameOver('Try again twat');
            userSequence = [];
            sequence = processed;
            processed = [];
            setTimeout(startGame, 2000);
        }
    }
}

function gameOver(message) {
    resultMsg.innerHTML = message;
    result.showModal();
        setTimeout(function() {
            result.close();
        }, 2000)
}

function correct() {
    processed.forEach(function(element) {
        sequence.push(element);
    })
    processed = [];
    userSequence = [];
    newEntry();
    intervalId = setInterval(processTurn, 2000);
}

function resetGame() {
    sequence = [];
    processed = [];
    userSequence = [];
    updateCount();
}

// STEP COUNTER
function updateCount() {
    display.innerHTML = sequence.length;
}

// STRICT FUNCTIONS
function toggleStrict() {
  return strict = (strict ? false : true);
}

function enableStrict() {
    if (strict) {
        opBtns[2].className = 'button strict';
        toggleStrict();
    } else {
        opBtns[2].className = 'button';
        toggleStrict();
    }
}

/**
 * Event Listeners
 */
opBtns[0].addEventListener('click', function() {
    newEntry();
    startGame();
});

function enableGameBtns() {
    gameBtns.forEach(function(element) {
            element.addEventListener('click', userTurn);
    });
}

function disableGameBtns() {
    gameBtns.forEach(function(element) {
        element.removeEventListener('click', userTurn);
    });
}

opBtns[1].addEventListener('click', resetGame);
opBtns[2].addEventListener('click', enableStrict);

// Modal Functionality
const modalBtn = document.getElementsByClassName('modal-btn');
const modal = document.getElementsByClassName('modal-about');
const button = document.getElementsByClassName('modal-cancel');

modalBtn[0].addEventListener('click', function() {
  modal[0].showModal();
});

button[0].addEventListener('click', function() {
  modal[0].close();
})

/**
 * Fix double colour issue
 * Mobile responsive result modal
*/
