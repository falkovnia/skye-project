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
        days,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds
    };
}
// This function will be called to update the time difference every second
function updateTime() {
    const result = timeSince('2025-03-18T10:25:00Z');
    const dateElement = document.getElementById('date');
    // Update the content of the date element with the time difference
    // Format the output as "Days: W, Hours: X, Minutes: Y, Seconds: Z"
    dateElement.textContent = `Days: ${result.days}, Hours: ${result.hours}, Minutes: ${result.minutes}, Seconds: ${result.seconds}`;
}

// Call the updateTime function
updateTime();

// Update every second
setInterval(updateTime, 1000);
