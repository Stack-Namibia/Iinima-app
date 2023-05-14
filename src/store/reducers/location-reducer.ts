/**
 * @author Herobiam Heita
 * @email hherobiam@gmail.com
 * @create date 2023-04-17 12:26:44
 * @modify date 2023-04-17 12:26:44
 * @desc [description]
 */

import { Location } from "../../api/locations";
import { LocationActionTypes } from "../action-types/locations-action-type";
import { LocationAction } from "../actions/locations-actions";

export interface LocationState {
  isLoading: boolean;
  isError: boolean;
  locationResponse?: Location;
  locations?: Array<Location>;
  location?: Location;
  updateLocation?: {
    id: string;
    location: Location;
  };
  errResponse?: any;
}

const initialState: LocationState = {
  isLoading: false,
  isError: false,
  locations: [],
};

const reducer = (
  state: LocationState = initialState,
  action: LocationAction
): LocationState => {
  switch (action.type) {
    case LocationActionTypes.GET_ALL_LOCATIONS:
      return {
        ...state,
        isLoading: true,
        isError: false,
        locations: action.payload,
      };
    case LocationActionTypes.GET_SELECTED_LOCATION:
      return {
        ...state,
        isLoading: true,
        isError: false,
        location: action.payload,
      };
    case LocationActionTypes.CREATE_LOCATION:
      return { ...state, isLoading: true, isError: false };
    case LocationActionTypes.SYNC_LOCATIONS:
      return {
        ...state,
        isLoading: true,
        isError: false,
        locations: action.payload,
      };
    case LocationActionTypes.LOCATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        locationResponse: action.payload,
      };
    case LocationActionTypes.UPDATE_LOCATION:
      return {
        ...state,
        isLoading: true,
        isError: false,
        updateLocation: action.payload,
      };
    case LocationActionTypes.CREATE_LOCATION_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errResponse: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
