/**
 * @author Herobiam Heita
 * @email hherobiam@gmail.com
 * @create date 2023-01-10 12:54:18
 * @modify date 2023-01-10 12:54:18
 * @desc [description]
 */

import { Item } from "../../api/items";
import { ItemsActionTypes } from "../action-types/items-action-type";
import { ItemsAction } from "../actions/items-actions";

export interface ItemsState {
  isLoading: boolean;
  isError: boolean;
  itemResponse?: Item;
  items?: Array<Item>;
  item?:Item;
}

const initialState: ItemsState = { isLoading: false, isError: false };

function reducer(
  state: ItemsState = initialState,
  action: ItemsAction
): ItemsState {
  switch (action.type) {
    case ItemsActionTypes.GET_ALL_ITEMS:
      return { isLoading: true, isError: false, items: action.payload };
    case ItemsActionTypes.GET_SELECTED_ITEM:
        return { isLoading: true, isError: false, item: action.payload };
    case ItemsActionTypes.CREATE_ITEM:
        return { isLoading: true, isError: false };
    case ItemsActionTypes.ITEM_SUCCESS:
        return { isLoading: false, isError: false, itemResponse: action.payload };
    default:
      return state;
  }
}

export default reducer;
