/**
 * Formats a given date into a localized string based on the user's locale.
 * If no date is provided, the current date and time is used.
 *
 * @param {string|Date} [date] - The date to format. Can be a date string or a Date object. If omitted, current date is used.
 * @param {boolean} [includeTime=false] - Whether to include the time in the formatted output.
 * @returns {string} A formatted date string in the user's locale, optionally including time.
 *
 * @example
 * dateInLocale("2025-04-15", true);
 * - returns "Apr 15, 2025 at 2:00 PM"
 *
 * @example
 * dateInLocale();
 * - returns "April 15, 2025"
 */
export const dateInLocale = (date, includeTime = false) => {
  const userLocale = navigator.language;
  const dateToFormat = date ? new Date(date) : new Date();

  if (includeTime) {
    return dateToFormat.toLocaleString(userLocale, {
      month: "short",
      day: "numeric",
      year: "numeric"
    }) + " at " + dateToFormat.toLocaleTimeString(userLocale, {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    });
  }
  return new Date(`${date}T00:00:00`).toLocaleString(navigator.language, {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

/**
 * Removes leading and trailing whitespace from a string.
 *
 * @param {string} text - The string to clean.
 * @returns {string} The trimmed string.
 */
export const cleanText = (text) => {
  return text.trim()
}

/**
 * Extracts and cleans plain text from a string of HTML content.
 *
 * @param {string} htmlContent - The HTML string to extract text from.
 * @returns {string} The extracted and trimmed text.
 */
export const extractTextFromHtml = (htmlContent) => {
  const html = htmlContent;
  const tempContainer = document.createElement("span");
  tempContainer.innerHTML = html;
  const text = tempContainer.innerText;
  return cleanText(text);
}

/**
 * Generates a simple numeric hash from a given string.
 *
 * @param {string} str - The string to hash.
 * @returns {number} The numeric hash value.
 */
export const getHash = (str) =>
  Array.from(str).reduce((acc, char) => acc + char.charCodeAt(0), 0);