import { LocationsApi } from "../../../api/locations";
import { getApiConfig } from "../../firebase/api-config";

const locationsApi = new LocationsApi(getApiConfig());

export const syncLocations = async () => {
  await locationsApi.syncLocationsApiV1SyncPost([]);
};

export const getLocations = async () => {
  const data = await locationsApi.getLocationsApiV1Get();
  return data.data.sort((a:any, b:any) => a.town.localeCompare(b.town));
};
