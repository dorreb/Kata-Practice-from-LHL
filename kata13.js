// Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.


const talkingCalendar = function(date) {
  // Parse the input date string into a Date object
  const parsedDate = new Date(date);

  // Extract the year, month, and day components from the parsed date
  const year = parsedDate.getFullYear();
  const month = parsedDate.getMonth();
  const day = parsedDate.getDate();

  // Define the month names and suffixes for day numbers
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const daySuffixes = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st'];

  // Use the extracted components to construct the human readable date string
  const dateString = `${monthNames[month]} ${day}${daySuffixes[day - 1]}, ${year}`;

  // Return the result
  return dateString;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));