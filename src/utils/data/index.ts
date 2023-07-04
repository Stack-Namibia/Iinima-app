/**
 * @description - Returns an array without duplicate values
 * @param arr - The array to be processed
 * @returns - The array without duplicate values
 */
const arrayUnique = (arr: unknown[] | undefined) => {
  console.log(arr);
  if (arr === undefined || arr === null) return [];

  return arr.filter((item, index) => arr.indexOf(item) === index);
};

/**
 * @description - Extracts a UUID from a string
 * @param inputString - The string to be processed
 * @returns - The UUID extracted from the string
 */
const extractObjectIdFromString = (inputString: string): string | null => {
  console.log(inputString);
  const uuidPattern = /[0-9a-fA-F]{24}/;
  const match = inputString.match(uuidPattern);
  console.log(match);
  return match ? match[0] : null;
};

export { arrayUnique, extractObjectIdFromString as extractUUIDFromString };
