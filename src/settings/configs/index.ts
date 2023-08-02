import auth0 from "./auth0";

export const configs = {
  auth0,
  apiKey: process.env.REACT_APP_API_KEY,
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL,
  base_url: process.env.REACT_APP_BASE_URL,
  contentManger: {
    projectId: process.env.REACT_APP_CM_PROJECT_ID,
    dataset: process.env.REACT_APP_CM_DATASET,
    apiVersion: process.env.REACT_APP_CM_API_VERSION,
  },
};
