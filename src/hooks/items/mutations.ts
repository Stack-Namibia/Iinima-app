// This has all the mutations for the items feature

import { useMutation } from "@tanstack/react-query";
import { Item } from "../../api/items";
import { listItem } from "../../utils/api/items-service";

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
