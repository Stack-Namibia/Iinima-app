import { UsersApi } from "../../../api/accounts";
import { User } from "../../../api/accounts";
import { getApiConfig } from "../../firebase/api-config";

const usersApi = new UsersApi(getApiConfig());

export const fetchUsers = async () => {
  const { data } = await usersApi.getUsersApiV1Get();
  return data;
};

export const fetchUser = async (id: string) => {
  const { data } = await usersApi.getUserByIdApiV1IdGet(id);
  return data;
};

export const updateUserById = async (user: User, id: string) => {
  const { data } = await usersApi.updateUserApiV1Put(user);
  return data;
};
