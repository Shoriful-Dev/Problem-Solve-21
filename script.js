// Programing Challenge: Number of Days Between Two Dates

//? Write a Function calculateDaysBetweenDates That calculates the number of days between two days. The dates will be provided in the format "YYYY-MM-DD".

const calculateDaysBetweenDates = (d1, d2) => {
  let date1 = new Date(d1);
  let date2 = new Date(d2);

  let diff = Math.abs(date2 - date1);
  return diff / (24 * 60 * 60 * 1000)
}

console.log(calculateDaysBetweenDates('2024-01-01', '2024-01-31')); // Output: 30

// Days = 24*60*60*1000;
