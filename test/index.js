"use strict";

const delayPromise = require("../delayPromise");
const hijackConsolePrependTime = require("../hijackConsolePrependTime");
const msToTimeStr = require("../msToTimeStr");

for (let i = 0; i < 10; ++i) {
    console.log("TIME: " + msToTimeStr());
}

hijackConsolePrependTime();
console.log("<-- DATE HERE = console hijacked!");

console.log("delay 1 second");
delayPromise(1000)
    .then(() =>{
        console.log("delay done");
    });
