import BrowseItems from "../components/pages/items/browse-items";
import EditItem from "../components/pages/EditItem";
import Home from "../components/pages/Landing-page";
import ListItem from "../components/pages/items/list-items";
import HttpError from "../components/pages/http-error";
import Profile from "../components/pages/profile";
import SignIn from "../components/pages/sign-in";
import SignUp from "../components/pages/sign-up";
import HowItWorks from "../components/pages/how-it-works";

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
    element: <Profile />,
    key: "Profile",
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
    element: <EditItem />,
    key: "EditItem",
  },
  {
    path: "/item/list",
    exact: true,
    element: <ListItem />,
    key: "ListItem",
  },
  {
    path: "/item/browse",
    exact: true,
    element: <BrowseItems />,
    key: "ListItem",
  },
  {
    path: "*",
    exact: true,
    element: <HttpError />,
    key: "HttpError",
  },
];

export default routes;
