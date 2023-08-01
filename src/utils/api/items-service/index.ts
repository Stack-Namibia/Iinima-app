// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { QueryFunction } from "@tanstack/react-query";
import { ItemsApi } from "../../../api/items";
import { Item } from "../../../api/items";
// import { storage } from "../../../plugins/firebase";
import { getApiConfig } from "../../firebase/api-config";

const itemsApi = new ItemsApi(getApiConfig());

// function uploadImages(
//   files: any[],
//   userId: string,
//   itemName: string
// ): Promise<any> {
//   /** This function returns a promise that is resolved after uploading images to firbase storage */
//   const promises: any[] = [];
//   files.forEach(({ file }) => {
//     if (file) {
//       const storageRef = ref(
//         storage,
//         `items/${userId}/${itemName}/${file.path}`
//       );
//       const uploadTask = uploadBytes(storageRef, file);
//       promises.push(uploadTask);
//     }
//   });

//   return Promise.all(promises);
// }

/// this will be the way forward for the api calls, the rest of the code should be in the reducers or the components will work on this once carlos reviews the uploads
export const listItem = async (item: Item) => {
  const data = await itemsApi.createItemApiV1Post(item);

  return data;
};

export const fetchItems = async (): Promise<Item[]> => {
  // This function fetches items from the api
  const { data } = await itemsApi.getItemsApiV1Get(0, 100000000);
  return data;
};

export const fetchUserItems = async (userId: string): Promise<Item[]> => {
  // This function fetches items from the api
  const { data } = await itemsApi.getItemsApiV1Get(0, 100000000);
  return data.filter((item: Item) => item.user_id === userId);
};

// export const fetchPaginatedData = async (pageParam = 1, limit = 15) => {
//   const skip = (pageParam - 1) * limit;
//   const { data } = await itemsApi.getItemsApiV1Get(skip, limit);
//   return data;
// };

interface APIResultsI {
  results: Item[];
  offset: number | null;
}

export const fetchPaginatedData: QueryFunction<
  APIResultsI,
  ["paginatedItems"]
> = async ({ pageParam }: any) => {
  const offset = pageParam ? pageParam : 0;
  const data = await itemsApi.getItemsApiV1Get(offset, 15);
  return {
    results: data.data,
    offset: offset + 15,
  };
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
  delete item._id;
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
