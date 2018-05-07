/**
 * Constants
 */
const gameBtns = document.querySelectorAll('.btn');
const opBtns = document.querySelectorAll('.button');
const display = document.querySelector('.display');

let strict = false;
let sequence = [];
let userSequence = [];

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

function startGame() {
    newEntry();
    opBtns[0].removeEventListener('click', startGame);
    return;
}

function activeBtn(element) {
    console.log(element);
    element.className = element.id + '-active btn';
    setTimeout(function() {
        element.className = element.id + ' btn';
    }, 2000);
}

function start() {
    setTimeout(runSequence, 3000);
}

function runSequence() {
    sequence.forEach(function(element) {
        activeBtn(gameBtns[element]);
    });
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

enableStart();
opBtns[2].addEventListener('click', enableStrict);