"use strict";

// add a specified millisecond delay to a promise chain
function delayPromise(milliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, milliseconds);
    });
}

module.exports = delayPromise;
