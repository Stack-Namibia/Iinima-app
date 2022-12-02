import { Configuration } from "../../api/accounts";


///this is the function that returns the configuration object, this will set the header for the api call

export function getApiConfig() {
    return new Configuration({
        basePath: process.env.REACT_APP_BASE_URL,
        accessToken: () => {
            ////getting from the store but i will suggest to use the local storage for the token or session
            return sessionStorage.getItem('firebaseToken') || '';
        },
    });
}