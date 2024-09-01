export const formatTimeTo12Hour = (time) => {
  const [hour, minutes] = time.split(":");
  const hours = parseInt(hour, 10);
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHour = hours % 12 || 12;
  return `${formattedHour}:${minutes} ${ampm}`;
};
