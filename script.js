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

function userTurn(e) {
    userSequence.push(parseInt(e.target.dataset.value));
}

function startGame() {
    opBtns[0].removeEventListener('click', startGame);
    intervalId = setInterval(processTurn, 2000);
    return;
}

function correct() {
    processed.forEach(function(element) {
        sequence.push(element);
    })
    processed = [];
    userSequence = [];
    newEntry();
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

gameBtns.forEach(function(element) {
        element.addEventListener('click', userTurn);
})

opBtns[2].addEventListener('click', enableStrict);