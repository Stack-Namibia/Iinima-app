import { Configuration } from "../../api/accounts";
import { configs } from "../../settings/configs";
///this is the function that returns the configuration object, this will set the header for the api call

export function getApiConfig() {
  return new Configuration({
    accessToken: () => {
      return sessionStorage.getItem("auth0_token") || "";
    },
    baseOptions: {
      headers: {
        "x-api-key": configs.apiKey,
      },
    },
  });
}
