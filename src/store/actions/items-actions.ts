/**
 * @author Herobiam Heita
 * @email hherobiam@gmail.com
 * @create date 2023-01-10 12:17:20
 * @modify date 2023-01-10 12:17:20
 * @desc [description]
 */

import { Item } from "../../api/items";
import { ItemsActionTypes } from "../action-types/items-action-type";


interface CreateItemAction {
    type: ItemsActionTypes.CREATE_ITEM;
}

interface ItemAddedSuccessAction {
    type: ItemsActionTypes.ITEM_SUCCESS;
    payload?: Item;
}

interface GetItemsAction {
    type: ItemsActionTypes.GET_ALL_ITEMS;
    payload?: Item[];
}


export type ItemsAction = GetItemsAction | CreateItemAction | ItemAddedSuccessAction;