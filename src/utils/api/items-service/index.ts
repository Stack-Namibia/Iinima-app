import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ItemsApi } from "../../../api/items";
import { storage } from "../../../plugins/firebase";

const itemsApi = new ItemsApi();
const apiToken = `Bearer ${sessionStorage.getItem("firebaseToken")}`;

export const createItem = async (item: any) => {
  // This function creates an item by making a call to the api
  try {
    //upload photos to firebase storage
    const photos = item.photos;
    const photoUrls: any[] = [];
    console.log(item.title);

    photos.forEach(async (photo: any, index: number) => {
      if (photo.file) {
        const storageRef = ref(
          storage,
          `item-images/${item.userId}/${photo.file.path}`
        );
        await uploadBytes(storageRef, photo.file);
        const url = await getDownloadURL(storageRef);
        photoUrls.push(url);
      }
    });
    item.photos = photoUrls;

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
