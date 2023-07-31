// This has all the mutations for the items feature

import { useMutation } from "@tanstack/react-query";
import { Item } from "../../api/items";
import { listItem, updateItemById } from "../../utils/api/items-service";

/**
 * This is the mutation to create a new item
 */

export const useCreateItem = () => {
  return useMutation({
    mutationFn: (item: Item) => {
      return listItem(item);
    },
  });
};

/**
 * This is the mutation to update an item
 */
export const useUpdateItem = () => {
  return useMutation({
    mutationFn: (item: Item) => {
      if (item._id) {
        return updateItemById(item, item._id);
      }
      return Promise.reject("Item id is missing");
    },
  });
};
