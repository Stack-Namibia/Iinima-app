// This has all the react query queries for the accounts feature

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { fetchUser, fetchUsers } from "../../utils/api/accounts-service";
import { User } from "../../api/accounts";

/**
 * This is the query to get all accounts from the database
 */
export const useAccounts = (): UseQueryResult<User[]> => {
  return useQuery({
    queryKey: ["accounts"],
    queryFn: fetchUsers,
    initialData: [],
    refetchInterval: 1000,
  });
};

/**
 * This is the query to get a single account from the database
 */
export const useAccount = (
  id: string,
  enabled: boolean
): UseQueryResult<User> => {
  return useQuery({
    queryKey: ["account", id],
    queryFn: () => fetchUser(id),
    enabled,
    refetchInterval: 100000,
  });
};
