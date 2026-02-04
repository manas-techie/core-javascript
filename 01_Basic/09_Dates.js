//Dates

let myDate = new Date();
console.log(typeof myDate); // "object"

console.log(myDate); // Current date and time   

console.log(myDate.toString()); // String representation
console.log(myDate.toDateString()); // Date portion only
console.log(myDate.toTimeString()); // Time portion only
console.log(myDate.toISOString()); // ISO format
console.log(myDate.toLocaleString()); // Localized format


// Getting individual components
console.log("Year:", myDate.getFullYear()); // Current year
console.log("Month:", myDate.getMonth()); // Month (0-11)
console.log("Date:", myDate.getDate()); // Day of the month (1-31)
console.log("Day:", myDate.getDay()); // Day of the week (0-6)
console.log("Hours:", myDate.getHours()); // Hours (0-23)
console.log("Minutes:", myDate.getMinutes()); // Minutes (0-59)
console.log("Seconds:", myDate.getSeconds()); // Seconds (0-59)
console.log("Milliseconds:", myDate.getMilliseconds()); // Milliseconds (0-999)

let spaecificDate = new Date(2025, 0, 15); // month is 0-indexed (0 = January)
console.log(spaecificDate.toDateString());
console.log(spaecificDate.getTime()); // timestamp in milliseconds since Jan 1, 1970

let dateFromString = new Date("2025-12-18");
console.log(dateFromString.toDateString());

let myTimestampDate = Date.now(); // current timestamp in milliseconds
console.log(myTimestampDate);
console.log(Math.floor(myTimestampDate / 1000)); // current timestamp in seconds

let newDate = new Date();

console.log(newDate.toLocaleString('Default', {
    weekday: "long",
    timeZone: "Asia/Kolkata"
})); // e.g., "Friday" because long format

console.log(newDate.toLocaleString('Default', {
    month: "long",
    timeZone: "Asia/Kolkata"
})); // e.g., "September" because long format

console.log(newDate.toLocaleString('Default', {
    month: "short",
    timeZone: "Asia/Kolkata"
})); // e.g., "Sep" because short format

console.log(newDate.toLocaleString('Default', {
    day: "2-digit",
    timeZone: "Asia/Kolkata"
})); // e.g., "05" because 2-digit format

console.log(newDate.toLocaleString('Default', {
    year: "numeric",
    timeZone: "Asia/Kolkata"
})); // e.g., "2024" because numeric format 


// Summary
// This code demonstrates the creation and manipulation of Date objects in JavaScript,
// including retrieving individual components and formatting dates.