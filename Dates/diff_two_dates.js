const moment = require('moment');

function getHours(h) {
    let dur = moment.duration(h, 'hours');
    let hours = Math.floor(dur.asHours());
    let mins = Math.floor(dur.asMinutes()) - hours * 60;
    let secs = Math.floor(dur.asSeconds()) - hours * 60 * 60 - mins * 60;

    let result =   ((hours > 9) ? hours : ("0" + hours)) + ":"
                 + ((mins > 9)  ? mins  : ("0" + mins))  + ":" 
                 + ((sec > 9)   ? sec   : ("0" + sec));
    console.log(result);
    return result;
}

function getDiff(start, end) {
    let diff = start.diff(end, 'hours', true);
    console.log('diff: ', diff);
    return getHours(diff);
}

let date = 49.75;
let start = moment('2019-07-13T18:03:55');
let end = moment('2019-07-11T09:15:15');
getDiff(start, end);