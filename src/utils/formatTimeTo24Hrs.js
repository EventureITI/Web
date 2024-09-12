function convertTo24HourFormat(time12h) {

  if (time12h.includes("AM") || time12h.includes("PM")) {
    const [time, modifier] = time12h.split(" "); // Split the time and the AM/PM modifier
    let [hours, minutes] = time.split(":"); // Split the hours and minutes


    if (hours === "12") {
      hours = "00"; // Convert 12 AM to 00 hours
    }

    if (modifier.toLowerCase() === "pm") {
      hours = (parseInt(hours, 10) + 12).toString(); // Convert PM hours to 24-hour format
    }

    return `${hours.padStart(2, "0")}:${minutes}`;
  } // Return in HH:mm format, padding single digit hours with 0
}
export default convertTo24HourFormat;
