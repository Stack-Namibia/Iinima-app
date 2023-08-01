// This has all the react query queries for the content feature

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Category, fetchCategories } from "../../utils/api/content-manager";

/**
 * Custom hook to get all categories from the content manager
 */

export const useCategories = (): UseQueryResult<Category[]> => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    initialData: [],
  });
};
