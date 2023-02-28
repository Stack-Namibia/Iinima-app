import { User, UsersApi } from "../../../api/accounts";
import { getApiConfig } from "../../firebase/api-config";

const userApi = new UsersApi(getApiConfig());

export const createUser = async (user: User) => {
  // This will create a user
  const data = userApi.createUserApiV1Post(user);
  return data;
};
export const fetchUser = async (email: string) => {
  // This function gets a user from the api
  const { data } = await userApi.getUserByEmailApiV1EmailEmailGet(email, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("firebaseToken")}`,
    },
  });
  return data;
};

export const updateUser = async (user: User) => {
  // This function updates user

  const { data } = await userApi.updateUserApiV1Put(user, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("firebaseToken")}`,
    },
  });
  return data;
};
