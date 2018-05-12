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

// processed
// set interval processQ if queue length = 0 then cancel interval

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
    } else {
        let element = gameBtns[sequence[0]];
        element.className = element.id + '-active btn';
        setTimeout(function() {
            element.className = element.id + ' btn';
        }, 2000);
        processed.push(sequence.shift());
    }
}

function startGame() {
    newEntry();
    opBtns[0].removeEventListener('click', startGame);
    intervalId = setInterval(processTurn, 2000);
    return;
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
function enableStart() {
    opBtns[0].addEventListener('click', startGame);
}

opBtns[2].addEventListener('click', enableStrict);

enableStart();