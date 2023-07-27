// This has all the react query queries for the locations feature

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getLocations, syncLocations } from "../../utils/api/location-service";
import { Location } from "../../api/locations";

/**
 * This is the query to sync locations from the database
 */
export const useSyncLocations = () => {
  return useQuery({
    queryKey: ["syncLocations"],
    queryFn: syncLocations,
  });
};

/**
 * This is the query to get all locations from the database
 * Depends on useSyncLocations
 */
export const useGetLocations = (
  enabled: boolean
): UseQueryResult<Location[]> => {
  return useQuery({
    queryKey: ["locations"],
    queryFn: getLocations,
    initialData: [
      {
        town: "Loading...",
      },
    ],
    enabled,
  });
};
