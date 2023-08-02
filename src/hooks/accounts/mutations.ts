// This has all the react query mutations for the accounts feature

import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../utils/api/accounts-service";
import { User } from "../../api/accounts";

/**
 * This is the mutation to create a new account
 */
export const useCreateAccount = () => {
  return useMutation({
    mutationFn: (account: User) => {
      return createUser(account);
    },
  });
};
