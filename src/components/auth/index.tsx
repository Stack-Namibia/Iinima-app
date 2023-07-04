import { withAuthenticationRequired } from "@auth0/auth0-react";
import LoadingPage from "../pages/loading-page";

const withAuth = (Component: any) => {
  return withAuthenticationRequired(Component, {
    onRedirecting: () => <LoadingPage />,
  });
};

export default withAuth;
