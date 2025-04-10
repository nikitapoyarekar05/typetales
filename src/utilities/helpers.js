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
  const year = dateObj.getUTCFullYear();
  const monthIndex = dateObj.getUTCMonth();
  const day = dateObj.getUTCDate();

  return `${month[monthIndex]} ${day}, ${year}`;
};
