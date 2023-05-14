import { Dispatch } from "@reduxjs/toolkit";
import { Item } from "../../api/items";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../plugins/firebase";
import {
  fetchItems,
  listItem,
  fetchItem,
  updateItemById,
} from "../../utils/api/items-service";
import { ItemsActionTypes } from "../action-types/items-action-type";
import { ItemsAction } from "../actions/items-actions";

export const createItem = (item: any) => {
  return async (dispatch: Dispatch<ItemsAction>) => {
    try {
      dispatch({
        type: ItemsActionTypes.CREATE_ITEM,
      });
      // This function creates an item by making a call to the api

      const metadata = await uploadImages(
        item.photos,
        item.user_id,
        item.title
      );

      const photoUrls: Array<string> = await Promise.all(
        metadata.map(async ({ metadata }: any) => {
          const url = await getDownloadURL(ref(storage, metadata.fullPath));
          return url;
        })
      );

      item.photos = photoUrls;

      const data = await listItem(item);
      dispatch({
        type: ItemsActionTypes.ITEM_SUCCESS,
        payload: data as any,
      });
    } catch (error) {
      dispatch({
        type: ItemsActionTypes.CREATE_ITEM_ERROR,
        payload: error,
      });
      console.log(error);
    }
  };
};

export const getItems = () => {
  return async (dispatch: Dispatch<ItemsAction>) => {
    try {
      const data = await fetchItems();
      dispatch({
        type: ItemsActionTypes.GET_ALL_ITEMS,
        payload: data,
      });
    } catch (error) {
      //alert here
      console.log(error);
    }
  };
};

export const getItem = (id: string) => {
  return async (dispatch: Dispatch<ItemsAction>) => {
    try {
      const data = await fetchItem(id);
      dispatch({
        type: ItemsActionTypes.GET_SELECTED_ITEM,
        payload: data,
      });
      dispatch({
        type: ItemsActionTypes.ITEM_SUCCESS,
        payload: data as any,
      });
    } catch (error) {
      //alert here
      dispatch({
        type: ItemsActionTypes.ITEM_SUCCESS,
        payload: error as any,
      });
      console.log(error);
    }
  };
};

export const updateItem = (
  id: string,
  options: {
    item: any;
    currentPhotos: string[];
  }
) => {
  return async (dispatch: Dispatch<ItemsAction>) => {
    const { item, currentPhotos } = options;
    try {
      const metadata = await uploadImages(
        item.photos,
        item.user_id,
        item.title
      );

      const photoUrls: Array<string> = await Promise.all(
        metadata.map(async ({ metadata }: any) => {
          const url = await getDownloadURL(ref(storage, metadata.fullPath));
          return url;
        })
      );

      item.photos = [...currentPhotos, ...photoUrls];

      dispatch({
        type: ItemsActionTypes.UPDATE_ITEM,
        payload: {
          id,
          item,
        },
      });
      const data = await updateItemById(item, id);
      dispatch({
        type: ItemsActionTypes.ITEM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      //alert here
      console.log(error);
    }
  };
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
