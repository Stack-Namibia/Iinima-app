// This has all the react query queries for the items feature

import {
  UseQueryResult,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import {
  fetchItem,
  fetchItems,
  fetchPaginatedData,
  fetchUserItems,
} from "../../utils/api/items-service";
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
 * This is the query to get all items that belong to a user
 */
export const useGetUserItems = (userId: string) => {
  return useQuery({
    queryKey: ["userItems", userId],
    queryFn: () => fetchUserItems(userId),
    initialData: [],
  });
};

/**
 * This query is used to get paginated data
 */
export const usePaginatedData = () => {
  return useInfiniteQuery(["paginatedItems"], fetchPaginatedData, {
    getNextPageParam: (lastPage, pages) => lastPage.offset,
  });
};

/**
 * This is the query to get a single item from the database
 */

export const useGetItem = (id: string): UseQueryResult<Item> => {
  return useQuery({
    queryKey: ["item", id],
    queryFn: () => {
      if (id.length > 0) {
        return fetchItem(id);
      }
      return null;
    },
  });
};
