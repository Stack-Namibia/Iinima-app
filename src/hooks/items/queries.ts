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
 * This query is used to get paginated data
 */
export const usePaginatedData = () => {
  return useInfiniteQuery(
    ["paginatedData"],
    ({ pageParam = 1 }) => fetchPaginatedData(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        // Check if there are more items to fetch
        const hasMore = lastPage.length >= 15; // Adjust the number as per your API's pageSize
        // Return the next page number (pageParam) or null if no more data
        return hasMore ? allPages.length : null;
      },
    }
  );
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
