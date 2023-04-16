/**
 * @description - Returns an array without duplicate values
 * @param arr - The array to be processed
 * @returns - The array without duplicate values
 */
const arrayUnique = (arr: any[]) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

export { arrayUnique };
