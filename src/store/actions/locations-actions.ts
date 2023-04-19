/**
 * @author Herobiam Heita
 * @email hherobiam@gmail.com
 * @create date 2023-04-17 12:12:25
 * @modify date 2023-04-17 12:12:25
 * @desc [description]
 */

import { Location } from "../../api/locations";
import { LocationActionTypes } from "../action-types/locations-action-type";

interface SyncLocations {
  type: LocationActionTypes.SYNC_LOCATIONS;
  payload?: any[];
}

interface CreateLocationAction {
  type: LocationActionTypes.CREATE_LOCATION;
}

interface LocationAddedSuccessAction {
  type: LocationActionTypes.LOCATION_SUCCESS;
  payload?: Location;
}

interface GetLocationsAction {
  type: LocationActionTypes.GET_ALL_LOCATIONS;
  payload?: any;
}

interface GetSelectedLocationAction {
  type: LocationActionTypes.GET_SELECTED_LOCATION;
  payload?: Location;
}

interface UpdateLocationAction {
  type: LocationActionTypes.UPDATE_LOCATION;
  payload?: {
    id: string;
    location: Location;
  };
}

interface CreateLocationErrorAction {
  type: LocationActionTypes.CREATE_LOCATION_ERROR;
  payload?: any;
}

interface SyncLocationsErrorAction {
  type: LocationActionTypes.SYNC_LOCATIONS_ERROR;
  payload?: any;
}

export type LocationAction =
  | GetLocationsAction
  | CreateLocationAction
  | SyncLocations
  | SyncLocationsErrorAction
  | LocationAddedSuccessAction
  | GetSelectedLocationAction
  | UpdateLocationAction
  | CreateLocationErrorAction;
