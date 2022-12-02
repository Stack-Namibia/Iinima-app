import { getApiConfig } from "../../utils/firebase/api-config";
import { User, UsersApi } from "../../api/accounts";
///this is the function that returns the configuration object, this will set the header for the api call
export const usersApi = new UsersApi(getApiConfig());

export const createUser = async (user: User) => {
    const {data} = await usersApi.createUserApiV1Post(user);
    return data
}

