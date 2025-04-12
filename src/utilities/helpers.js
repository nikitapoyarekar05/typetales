const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const formatDate = (unformattedDate) => {
  const dateObj = new Date(unformattedDate);
  const year = dateObj.getFullYear();
  const monthIndex = dateObj.getMonth();
  const day = dateObj.getDate();

  return `${month[monthIndex]} ${day}, ${year}`;
};

export const dateInLocale = (date) => {
  const userLocale = navigator.language;
  const dateToFormat = date ? new Date(date) : new Date();

  const formatted = dateToFormat.toLocaleString(userLocale, {
    month: "short",
    day: "numeric",
    year: "numeric"
  }) + " at " + dateToFormat.toLocaleTimeString(userLocale, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });

  return formatted
}

export const cleanText = (text) => {
  return text.trim()
}