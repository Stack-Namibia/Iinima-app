/**
 * @author Herobiam Heita
 * @email hherobiam@gmail.com
 * @create date 2023-04-17 22:19:32
 * @modify date 2023-04-17 22:19:32
 * @desc [description]
 */
import { Dispatch } from "@reduxjs/toolkit";
import { Location } from "../../api/locations";
import { syncLocations } from "../../utils/api/location-service";
import { LocationActionTypes } from "../action-types/locations-action-type";
import { LocationAction } from "../actions/locations-actions";

export const loadLocations = () =>{
    return async (dispatch: Dispatch<LocationAction>) => {
        try {
            const data = await syncLocations();
            dispatch({
                type: LocationActionTypes.SYNC_LOCATIONS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: LocationActionTypes.SYNC_LOCATIONS_ERROR,
                payload: error
            });
        }
    }
}
