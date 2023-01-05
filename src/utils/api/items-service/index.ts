import { Item, ItemsApi } from "../../../api/items";
import { getApiConfig } from "../../firebase/api-config";

const itemsApi = new ItemsApi(getApiConfig());
const apiToken = `Bearer ${sessionStorage.getItem("firebaseToken")}`;

export const createItem = async (item: Item) => {
  // This function creates an item by making a call to the api
  try {
    const response = await itemsApi.createItemApiV1Post(item, {
      headers: {
        Authorization: apiToken,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
