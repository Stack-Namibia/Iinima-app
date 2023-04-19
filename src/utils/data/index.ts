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

export { arrayUnique };
