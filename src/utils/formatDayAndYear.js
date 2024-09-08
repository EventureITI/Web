const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function formatDate(myDate) {
const date = new Date(myDate);
const day = date.getDay();
  const month = date.getMonth(); 
  const year = date.getFullYear(); 
const dayName = daysOfWeek[day];
  return {
      day:dayName,
      year:`${monthsOfYear[month]} ${day}, ${year}`};
}