"use strict";

// convert milliseconds to the string format of HH:MM:SS.NNN
// or more specifically hours:minutes:seconds.milliseconds
// forked from https://stackoverflow.com/a/19700358
function msToTimeStr(milliseconds) {
    if (!milliseconds) {
        milliseconds = (new Date).getTime();
    }
    var ms = milliseconds % 1000,
        sec = parseInt(milliseconds / 1000) % 60,
        min = parseInt(milliseconds / (1000*60)) % 60,
        hr = parseInt(milliseconds / (1000*60*60)) % 24;

    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    ms = (ms < 100) ? "0" + ms : ms;
    
    return hr + ":" + min + ":" + sec + "." + ms;
}

module.exports = msToTimeStr;
