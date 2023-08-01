// this has all the function to query data from the api

import client, { urlFor } from "./utils";

export interface Category {
  _id: string;
  name: string;
  imageUrl: string | null;
}

/***
 * Function to get all categories from sanity
 */
export const fetchCategories = async (): Promise<Category[]> => {
  const sanityQuery = '*[_type == "category"]';

  const data = (await client.fetch(sanityQuery)) as {
    _id: string;
    title: string;
    mainImage: any;
  }[];

  return data
    .map((category) => ({
      _id: category._id,
      name: category.title,
      imageUrl: urlFor(category.mainImage).url(),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
};
