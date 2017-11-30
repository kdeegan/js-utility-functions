"use strict";

const msToTimeStr = require("./msToTimeStr");

// modify the console.log function so that every output prepends a time string
function hijackConsolePrependTime() {
    console.logCopy = console.log.bind(console);

    console.log = (...args) => {
        var currentDate = '[' + msToTimeStr() + '] ';
        console.logCopy(currentDate, ...args);
    };
}

module.exports = hijackConsolePrependTime;
