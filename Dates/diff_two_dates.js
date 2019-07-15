const moment = require('moment');

// function diffDates(end, start) {
//     let diff =  start.diff(end, 'milliseconds');
//     diff = moment(diff).format('HH:mm:ss');
//     console.log('diff: ', diff);

//     let hours = start.diff(end, 'hours');
//     console.log('hours: ', hours);
// }

// let start = moment('2019-07-13T18:03:55');
// let end = moment('2019-07-02T18:03:55');


// diffDates(end, start);

// var dur = moment.duration(49.75, 'hours');
// var hours = Math.floor(dur.asHours());
// var mins = Math.floor(dur.asMinutes()) - hours * 60;
// var sec = Math.floor(dur.asSeconds()) - hours * 60 * 60 - mins * 60;

// var result = hours + ":" + mins + ":" + ((sec > 9) ? sec : ("0" + sec));
// console.log(result);

function getHours(h) {
    let dur = moment.duration(h, 'hours');
    let hours = Math.floor(dur.asHours());
    let mins = Math.floor(dur.asMinutes()) - hours * 60;
    let sec = Math.floor(dur.asSeconds()) - hours * 60 * 60 - mins * 60;

    let result = hours + ":" + mins + ":" + ((sec > 9) ? sec : ("0" + sec));
    console.log(result);
    return result;
}

function getDiff(start, end) {
    let diff = end.diff(start, 'hours', true);
    console.log('diff: ', diff);
    return getHours(diff);
}

let date = 49.75;
let start = moment('2019-07-13T18:03:55');
let end = moment('2019-07-04T09:15:55');
getDiff(start, end);