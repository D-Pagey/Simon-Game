/**
 * Constants
 */
const gameBtns = document.querySelectorAll('.btn');
const opBtns = document.querySelectorAll('.button');

let strict = false;
let sequence = [];

/**
 * Methods
 */
function randomNumber() {
    return Math.floor(Math.random() * Math.floor(4));
}

function newButton() {
    sequence.push(randomNumber());
    return;
}

function toggleStrict() {
    return strict = (strict ? false : true);
}

function startGame() {
    newButton();
    opBtns[0].removeEventListener('click', startGame);
    return;
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