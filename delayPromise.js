"use strict";

function delayPromise(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, delay);
    });
}

module.exports = delayPromise;
