/**
 * @description - Returns an array without duplicate values
 * @param arr - The array to be processed
 * @returns - The array without duplicate values
 */
const arrayUnique = (arr: unknown[] | undefined) => {
  if (arr === undefined || arr === null) return [];

  return arr.filter((item, index) => arr.indexOf(item) === index);
};

/**
 * @description - Extracts a UUID from a string
 * @param inputString - The string to be processed
 * @returns - The UUID extracted from the string
 */
const extractObjectIdFromString = (inputString: string): string | null => {
  const uuidPattern = /[0-9a-fA-F]{24}/;
  const match = inputString.match(uuidPattern);
  return match ? match[0] : null;
};

//function adds area code to phone number
/**
 * @description - Adds area code to phone number
 * @param {(string | undefined)} number
 * @return {*}
 */
const addAreaCode = (number: string | undefined): string => {
  if (!number) return "";
  if (number.charAt(0) === "0") {
    return `264${number.substring(1)}`;
  }
  if (number.charAt(0) === "+") {
    return number.substring(1);
  }

  return number;
};

export {
  arrayUnique,
  extractObjectIdFromString as extractUUIDFromString,
  addAreaCode,
};
