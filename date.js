function formatStopwatchOutput({ days, hours, minutes, seconds }) {
    return `${days} days, ${hours} hours,<br class="block sm:hidden"> ${minutes} minutes, ${seconds} seconds`;
  }

function timeSince(dateString) {
    // Convert the date string to a Date object
    const pastDate = new Date(dateString);
    // Grab the current date
    const now = new Date();

    // Calculate the difference in milliseconds
    const diffInMs = now - pastDate;

    // Calculate the difference in seconds, minutes, hours, and days
    const seconds = Math.floor(diffInMs / 1000); // Convert milliseconds to seconds
    const minutes = Math.floor(seconds / 60); // Convert seconds to minutes
    const hours = Math.floor(minutes / 60); // Convert minutes to hours
    const days = Math.floor(hours / 24); // Convert hours to days

    const remainingHours = hours % 24; // Remaining hours in the current day
    const remainingMinutes = minutes % 60; // Remaining minutes in the current hour
    const remainingSeconds = seconds % 60; // Remaining seconds in the current minute

    // Return the result as an object
    return { 
        days, // Total days since the date
        hours: remainingHours, // Remaining hours in the current day
        minutes: remainingMinutes, // Remaining minutes in the current hour
        seconds: remainingSeconds // Remaining seconds in the current minute
    };
}
// This function will be called to update the time difference every second
function updateTime() {
    const boy_result = timeSince('2025-03-18T10:25:00Z'); // Tue March 18 10:25am
    const girl_result = timeSince('2024-06-18T12:10:00Z'); // Tue June 18 12:10pm
    const boy_dateElement = document.getElementById('boy-date');
    const girls_dateElement = document.getElementById('girls-date');
    // Update the content of the date element with the time difference
    // Format the output as "Days: W, Hours: X, Minutes: Y, Seconds: Z"
    boy_dateElement.innerHTML = `${formatStopwatchOutput(boy_result)} ago`;
    girls_dateElement.innerHTML = `${formatStopwatchOutput(girl_result)} ago`;
}

// Call the updateTime function
updateTime();

// Update every second
setInterval(updateTime, 1000);
