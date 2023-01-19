import BrowseItems from "../components/pages/items/browse-items";
import EditItem from "../components/pages/EditItem";
import Home from "../components/pages/Landing-page";
import ListItem from "../components/pages/items/list-items";
import HttpError from "../components/pages/http-error";
import Profile from "../components/pages/profile";
import ProfileEdit from "../components/pages/profile/edit";
import SignIn from "../components/pages/sign-in";
import SignUp from "../components/pages/sign-up";
import HowItWorks from "../components/pages/how-it-works";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import LoadingPage from "../components/pages/loading-page";

const ProtectedRoute = ({ component, ...args }: any) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

const routes = [
  {
    path: "/",
    exact: true,
    element: <Home />,
    key: "Home",
  },
  {
    path: "/signin",
    exact: true,
    element: <SignIn />,
    key: "SignIn",
  },
  {
    path: "/signup",
    exact: true,
    element: <SignUp />,
    key: "SignUp",
  },
  {
    path: "/profile",
    exact: true,
    element: <ProtectedRoute component={Profile} />,
    key: "Profile",
  },
  {
    path: "/profile/edit",
    exact: true,
    element: <ProtectedRoute component={ProfileEdit} />,
    key: "Profile-edit",
  },
  {
    path: "/howitworks",
    exact: true,
    element: <HowItWorks />,
    key: "HowItWorks",
  },
  {
    path: "/item/edit",
    exact: true,
    element: <ProtectedRoute component={EditItem} />,
    key: "EditItem",
  },
  {
    path: "/item/list",
    exact: true,
    element: <ProtectedRoute component={ListItem} />,
    key: "ListItem",
  },
  {
    path: "/item/browse",
    exact: true,
    element: <BrowseItems />,
    key: "ListItem",
  },
  {
    path: "/loading",
    exact: true,
    element: <LoadingPage />,
    key: "Loading",
  },
  {
    path: "*",
    exact: true,
    element: <HttpError />,
    key: "HttpError",
  },
];

export default routes;
