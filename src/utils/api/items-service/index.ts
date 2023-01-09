import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ItemsApi } from "../../../api/items";
import { storage } from "../../../plugins/firebase";
import { getApiConfig } from "../../firebase/api-config";

const itemsApi = new ItemsApi(getApiConfig());

export const createItem = async (item: any) => {
  // This function creates an item by making a call to the api
  const photoUrls: Array<string> = [];
  uploadImages(item.photos, item.user_id, item.title).then((metadata) => {
    metadata.forEach(async ({ metadata }: any) =>
      getDownloadURL(ref(storage, metadata.fullPath))
        .then((url) => photoUrls.push(url))
        .finally(() => console.log(photoUrls))
    );
  });
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
