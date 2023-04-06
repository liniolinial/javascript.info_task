// let now = new Date();
// console.log(now.getUTCHours());

// let date = new Date("2023-03-26");
// console.log(date);

// new Date(2023, 2, 26, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
// new Date(2023, 2, 26); // the same, hours etc are 0 by default
// let date = new Date(2023, 2, 26, 2, 3, 4, 567);
// console.log(date);
// if you are in timezone UTC-1, outputs 60
// if you are in timezone UTC+3, outputs -180
// alert( new Date().getTimezoneOffset() );

// let today = new Date();
// today.setHours(0);
// console.log(today); // 2023-03-25T23:08:45.341Z (still today, but the hour is changed to 0)
// today.setHours(0, 0, 0, 0);
// console.log(today); //2023-03-25T23:00:00.000Z

// let date = new Date(2013, 0, 32);
// console.log(date);

// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2);
// alert( date ); // 1 Mar 2016

// let date = new Date();
// date.setSeconds(date.getSeconds() + 70);
// console.log(date); // shows the current date with plus 70

// let date = new Date(2016, 0, 2); // 2 Jan 2016
// date.setDate(0); // set day 1 of month
// // min day is 1, so the last day of the previous month is assumed
// console.log(date);

// let date = new Date();
// console.log(-date);

// let start = new Date(); // start measuring time
// // do the job
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }
// let end = new Date(); // end measuring time
// console.log(`The loop took ${end - start} ms`);

// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//   let date1 = new Date(0); //1970 the beginning
//   let date2 = new Date(); // current time

//   let start = Date.now();
//   for (let i = 0; i < 100000; i++) {
//     f(date1, date2);
//   }
//   return Date.now() - start;
// }
// // eine Wiederholung Schleife min 10mal
// let time1 = 0;
// let time2 = 0;

// // run bench(diffSubtract) and bench(diffGetTime) each 10 times alternating
// for (let i = 0; i < 10; i++) {
//   time1 += bench(diffSubtract);
//   time2 += bench(diffGetTime);
// }
// console.log("Total time for diffSubtract: " + time1 + "ms");
// console.log("Total time for diffGetTime: " + time2 + "ms");

// console.log(`Loading started ${performance.now()}ms ago`);

//task1
// let date = new Date(2012, 1, 20, 3, 12);
// console.log(date);

//task2-meine lösung
// function getWeekDay(date) {
//   let weekDate = date.getDay();
//   switch (weekDate) {
//     case 0:
//       console.log("SU");
//       break;
//     case 1:
//       console.log("MO");
//       break;
//     case 2:
//       console.log("TU");
//       break;
//     case 3:
//       console.log("WE");
//       break;
//     case 4:
//       console.log("TH");
//       break;
//     case 5:
//       console.log("FR");
//       break;
//     case 6:
//       console.log("SA");
//       break;
//   }
// }
// let date = new Date(2012, 0, 3); // 3 Jan 2012
// console.log(getWeekDay(date));

//task2-lösung
// function getWeekDay(date) {
//   let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

//   return days[date.getDay()];
// }

// let date = new Date(2014, 0, 3); // 3 Jan 2014
// alert( getWeekDay(date) ); // FR

//task3
// function getLocalDay(date) {
//   let days = [7, 1, 2, 3, 4, 5, 6];
//   // let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
//   return days[date.getDay()];
// }

// // let date1 = new Date(2023, 2, 20); // mon -> 1
// // let date2 = new Date(2023, 2, 26); // sun -> 7
// // console.log(getLocalDay(date1)); // monday, should show 1
// // console.log(getLocalDay(date2));
// let date = new Date(2012, 0, 3);
// console.log(getLocalDay(date));

//task4 - meine Lösung
// function getDateAgo(date, days) {
//   let tag = days * -23;
//   let day = new Date(date.getTime() + tag * 3600 * 1000);
//   return day;
// }

//task4- lösung mit Set1
// function getDateAgo(date, days) {
//   date.setDate(date.getDate() - days);
//   return date.getDate();
// }

//task4-lösung mit Set2
// function getDateAgo(date, days) {
//   let dateCopy = new Date(date);

//   dateCopy.setDate(date.getDate() - days);
//   return dateCopy.getDate();
// }

// let date1 = new Date(2015, 0, 2);

// console.log(getDateAgo(date1, 1)); // 1, (1 Jan 2015)
// console.log(getDateAgo(date1, 2)); // 31, (31 Dec 2014)
// console.log(getDateAgo(date1, 365)); // 2, (2 Jan 2014)

//task5
// function getLastDayOfMonth(year, month) {
//   let lastDay = inputDay.setDate(31);
//   let inputDay = new Date(year, month, lastDay);
//   inputDay.setFullYear(year, month, lastDay);
//   return inputDay;
// }

// console.log(getLastDayOfMonth(2012, 1)); //= 29

// let a = new Date();
// a.setFullYear(2022, 1);
// console.log(a);

// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month, 1);
//   date.setDate(0);
//   return date.getDate();
// }
// console.log(getLastDayOfMonth(2023, 3)); //= 29
// //idee: setDate(0)-> so the last day of the previous month is assumed

//idee1
// let date = new Date(2016, 0, 1);
// date.setDate(1);
// console.log(date);

//idee1-1
// let date = new Date(2012, 2);
// date.setDate(1);
// console.log(date);

//aktuell input, output nicht passen.
// let date = new Date(2012, 2);
// date.setDate(1);
// console.log(date);

//meine Antwort für task5
// function getLastDayOfMonth(year, month) {
//   let aktuellMonth = month + 1;
//   let date = new Date(year, aktuellMonth);
//   date.setDate(1);
//   date.setHours(-1);
//   return date.getDate();
// }
// console.log(getLastDayOfMonth(2012, 0)); //29

//task5-lösung
// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month + 1, 0);
//   return date.getDate();
// }

// console.log(getLastDayOfMonth(2012, 0)); // 31
// console.log(getLastDayOfMonth(2012, 1)); // 29
// console.log(getLastDayOfMonth(2013, 1)); // 28

//task6 -meine Lösung
// function getSecondsToday() {
//   let now = new Date();
//   let passedTimeInSec =
//     now.getHours() * 3600000 +
//     now.getMinutes() * 60000 +
//     now.getSeconds() * 1000;
//   return passedTimeInSec / 1000;
// }
// console.log(getSecondsToday()); //== 36000; // (3600 * 10)

//task6-lösung
// function getSecondsToday() {
//   let now = new Date();
//   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//   let diff = now - today;

//   return Math.round(diff / 1000);;
// }
// console.log(getSecondsToday());

//task7-meine Lösung
// function getSecondsToTomorrow() {
//   let now = new Date(2023, 2, 28, 23, 0, 0, 0);
//   let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//   tomorrow.setDate(tomorrow.getDate() + 1);
//   let rest = tomorrow - now;

//   return Math.floor(rest / 1000);
// }
// console.log(getSecondsToTomorrow()); //== 3600

//task8-meine Lösung
function formatDate(date) {
  let now = new Date();
  let diff = now - date; //milliseconds

  if (diff < 1000) {
    return "right now";
  } else if (diff < 60 * 1000) {
    let gap1 = Math.floor(diff / 1000);
    return gap1 + "sec. ago";
  } else if (diff < 60 * 60 * 1000) {
    let gap2 = Math.floor(diff / (60 * 1000));
    return gap2 + " min. ago";
  } else {
    let oneDay = Math.floor(diff / (60 * 60 * 1000));
    let yesterday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      now.getHours() - oneDay,
      now.getMinutes()
    );
    let formattedDate = yesterday.toLocaleString("de-DE", {
      day: "2-digit",
      weekday: "long",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    return formattedDate;
  }
}
console.log(formatDate(new Date(new Date() - 1))); // "right now"
console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"
// yesterday's date like 31.12.16 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

//task8 -lösung
// function formatDate(date) {
//   let diff = new Date() - date; // the difference in milliseconds
//   if (diff < 1000) {
//     // less than 1 second
//     return "right now";
//   }
//   let sec = Math.floor(diff / 1000); // convert diff to seconds
//   if (sec < 60) {
//     return sec + " sec. ago";
//   }
//   let min = Math.floor(diff / 60000); // convert diff to minutes
//   if (min < 60) {
//     return min + " min. ago";
//   }
//   // format the date
//   // add leading zeroes to single-digit day/month/hours/minutes
//   let d = date;
//   d = [
//     "0" + d.getDate(),
//     "0" + (d.getMonth() + 1),
//     "" + d.getFullYear(),
//     "0" + d.getHours(),
//     "0" + d.getMinutes(),
//   ].map((component) => component.slice(-2)); // take last 2 digits of every component

//   // join the components into date
//   return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
// }

// console.log(formatDate(new Date(new Date() - 1))); // "right now"
// console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"
// console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"
// // yesterday's date like 31.12.2016 20:00
// console.log(formatDate(new Date(new Date() - 86400 * 1000)));
