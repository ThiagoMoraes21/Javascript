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

// function getHours(h) {
//     let dur = moment.duration(h, 'hours');
//     let hours = Math.floor(dur.asHours());
//     let mins = Math.floor(dur.asMinutes()) - hours * 60;
//     let sec = Math.floor(dur.asSeconds()) - hours * 60 * 60 - mins * 60;

//     let result = hours + ":" + mins + ":" + ((sec > 9) ? sec : ("0" + sec));
//     console.log(result);
//     return result;
// }

// function getDiff(start, end) {
//     let diff = end.diff(start, 'hours', true);
//     console.log('diff: ', diff);
//     return getHours(diff);
// }

// let date = 49.75;
// let start = moment('2019-07-13T18:03:55');
// let end = moment('2019-07-04T09:15:55');
// getDiff(start, end);

  getDiff(arr) {
    let totalSchedule = this.getTotal(arr, "dutyStartsAt", "dutyEndsAt", false);
    let totalWorked = this.getTotal(arr, "startedAt", "endedAt", true);
    let signal = Math.max(totalSchedule, totalWorked) == totalSchedule ? "-" : "+";
    let difference =  totalSchedule - totalWorked;

    return signal + this.getHours(difference);
  }

  getTotal(arr, start, end, hasCheckin) {
    return arr.reduce((sum, current) => {
      let total = 0;
      
      if(hasCheckin) {
        let startDate = current[0]["checkin"][start];
        let endDate = current[0]["checkin"][end];
        total = moment(startDate).diff(moment(endDate), "hours", true);

      } else {
        let startDate = current[0][start];
        let endDate = current[0][end];
        total = moment(startDate).diff(moment(endDate), "hours", true);
      }

      return sum + Math.abs(total);
    }, 0);
  }

  getHours(date) {
    let dur = moment.duration(date, "hours");
    let hours = Math.floor(dur.asHours());
    let mins = Math.floor(dur.asMinutes()) - hours * 60;
    let secs = Math.floor(dur.asSeconds()) - hours * 60 * 60 - mins * 60;

    let result = ((hours > 9)  ? hours : ("0" + hours)) + ":"
               + ((mins  > 9)  ? mins  : ("0" + mins))  + ":" 
               + ((secs  > 9)  ? secs  : ("0" + secs));

    return result; 
  }
