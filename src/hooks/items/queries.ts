// This has all the react query queries for the items feature

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { fetchItem, fetchItems } from "../../utils/api/items-service";
import { Item } from "../../api/items";

/**
 * This is the query to get all items from the database
 */
export const useGetItems = () => {
  return useQuery({
    queryKey: ["items"],
    queryFn: fetchItems,
    initialData: [],
  });
};

/**
 * This is the query to get a single item from the database
 */

export const useGetItem = (id: string): UseQueryResult<Item> => {
  return useQuery({
    queryKey: ["item", id],
    queryFn: () => fetchItem(id),
  });
};
