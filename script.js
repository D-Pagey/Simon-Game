/**
 * Constants
 */
const gameBtns = document.querySelectorAll('.btn');
const opBtns = document.querySelectorAll('.button');
const display = document.querySelector('.display');

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
    console.log(e.target.dataset.value);
    userSequence.push(parseInt(e.target.dataset.value));
    isTurnOver();
}

function startGame() {
    opBtns[0].removeEventListener('click', startGame); // Doesnt work
    disableGameBtns();
    intervalId = setInterval(processTurn, 2000);
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
    if (JSON.stringify(userSequence) === JSON.stringify(processed)) {
        console.log('Well done you got it right!');
        correct();
    } else {
        console.log('You fucked it.');
    }
}

function correct() {
    console.log('Sequence: ' + sequence + 'Processed: ' + processed + 
    'UserSequence: ' + userSequence);
    processed.forEach(function(element) {
        sequence.push(element);
    })
    processed = [];
    userSequence = [];
    newEntry();
    intervalId = setInterval(processTurn, 2000);
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

opBtns[2].addEventListener('click', enableStrict);

/**
 * If userSequence == processed.length then disable buttons
 * Fix double colour issue
 * Redo button colors
*/
