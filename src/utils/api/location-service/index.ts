import { LocationsApi } from "../../../api/locations";
import { Location } from "../../../api/locations";
import { getApiConfig } from "../../firebase/api-config";

const locationsApi = new LocationsApi(getApiConfig());


export const syncLocations = async () => {
    const { data } = await locationsApi.syncLocationsApiV1SyncPost();
    return data;
}