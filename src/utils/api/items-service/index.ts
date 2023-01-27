import { ItemsApi } from "../../../api/items";
import { Item } from "../../../api/items";

const itemsApi = new ItemsApi();

/// this will be the way forward for the api calls, the rest of the code should be in the reducers or the components will work on this once carlos reviews the uploads
export const listItem = async (item: Item) => {
  const data = itemsApi.createItemApiV1Post(item);
  return data;
};

export const fetchItems = async () => {
  // This function fetches items from the api
  const { data } = await itemsApi.getItemsApiV1Get();
  return data;
};

export const fetchItem = async (id: string) => {
  // This function fetches a single item from the api
  const { data } = await itemsApi.getItemByIdApiV1IdGet(id, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("firebaseToken")}`,
    },
  });
  return data;
};

export const updateItemById = async (item: Item, id: string) => {
  // This function updates an item by making a call to the api
  const { data } = await itemsApi.updateItemApiV1IdPut(item, id, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("firebaseToken")}`,
    },
  });
  return data;
};

export const deleteItemById = async (id: string) => {
  // This function deletes an item by making a call to the api
  const { data } = await itemsApi.deleteItemApiV1IdDelete(id, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("firebaseToken")}`,
    },
  });
  return data;
};
