// ---- Creating a new date ----
const date = Date();
console.log('Date:', date);
console.log('typeof Date:', typeof date); // string

const newDate = new Date();
console.log('new Date:', newDate);
console.log('typeof new Date', typeof newDate); // object

console.log('Date.now:', Date.now()); // Prints the number of milliseconds since 1st of January 1970
console.log('typeof Date.now:', typeof Date.now()); // number

// ---- get methods ----
// Why are there no built in methods on the "date" variable?
console.log('getDate', newDate.getDate());
console.log('getDay', newDate.getDay());
console.log('getMonth', newDate.getMonth());
console.log('getFullYear', newDate.getFullYear());
console.log('getHours', newDate.getHours());
// alternative
console.log('alternartive getYear', date.slice(11, 15))

// ---- Time since ----
const timeSinceTitanic = Date.now() - new Date('1998-01-28');
console.log('In milliseconds', timeSinceTitanic);

// However now we need to make a function to parse the millisecons back into a time duration we can understand
// function convertMS( milliseconds ) {
//   var days, hours, minutes, seconds;
//   seconds = Math.floor(milliseconds / 1000);
//   minutes = Math.floor(seconds / 60);
//   seconds = seconds % 60;
//   hours = Math.floor(minutes / 60);
//   minutes = minutes % 60;
//   days = Math.floor(hours / 24);
//   hours = hours % 24;
//   return {
//       days,
//       hours,
//       minutes,
//       seconds,
//   };
// }
// console.log('Parsed', convertMS(timeSinceTitanic));