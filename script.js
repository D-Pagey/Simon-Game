/**
 * Constants
 */
const gameBtns = document.querySelectorAll('.btn');
const opBtns = document.querySelectorAll('.button');

let strict = false;

/**
 * Methods
 */
function randomNumber() {
    
}


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
opBtns[2].addEventListener('click', enableStrict);