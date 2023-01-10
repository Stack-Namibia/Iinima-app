import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ItemsApi } from "../../../api/items";
import { storage } from "../../../plugins/firebase";
import { getApiConfig } from "../../firebase/api-config";
import { Item } from "../../../api/items";

const itemsApi = new ItemsApi(getApiConfig());

export const createItem = async (item: any) => {
  // This function creates an item by making a call to the api
  
  const metadata = await uploadImages(item.photos, item.user_id, item.title)

    const photoUrls: Array<string> = await Promise.all(metadata.map(async ({metadata}: any) => {
      const url = await getDownloadURL(ref(storage, metadata.fullPath));
      return url;
    }));

    item.photos = photoUrls;

    await itemsApi.createItemApiV1Post(item);
};
function uploadImages(
  files: any[],
  userId: string,
  itemName: string
): Promise<any> {
  /** This function returns a promise that is resolved after uploading images to firbase storage */
  const promises: any[] = [];
  files.forEach(({ file }) => {
    if (file) {
      const storageRef = ref(
        storage,
        `items/${userId}/${itemName}/${file.path}`
      );
      const uploadTask = uploadBytes(storageRef, file);
      promises.push(uploadTask);
    }
  });

  return Promise.all(promises);
}

/// this will be the way forward for the api calls, the rest of the code should be in the reducers or the components will work on this once carlos reviews the uploads
export const createItem1 = async (item: Item) => {
  const  data  = itemsApi.createItemApiV1Post(item);
  return data;
}

export const fetchItems = async () => {
  // This function fetches items from the api
  const { data } = await itemsApi.getItemsApiV1Get();
  return data;
};

export const fetchItem = async (id: string) => {
  // This function fetches a single item from the api
  const { data } = await itemsApi.getItemByIdApiV1IdGet(id);
  return data;
};

export const updateItem = async (item: Item, id: string) => {
  // This function updates an item by making a call to the api
  const { data } = await itemsApi.updateItemApiV1IdPut(item, id);
  return data;
}
