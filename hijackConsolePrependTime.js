"use strict";

const msToTimeStr = require("./msToTimeStr");

function hijackConsolePrependTime() {
    console.logCopy = console.log.bind(console);

    console.log = (...args) => {
        var currentDate = '[' + msToTimeStr() + '] ';
        console.logCopy(currentDate, ...args);
    };
}

module.exports = hijackConsolePrependTime;
