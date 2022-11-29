import BrowseItems from "../components/pages/browse-items";
import EditItem from "../components/pages/EditItem";
import Home from "../components/pages/Home";
import HowItWorks from "../components/pages/HowItWorks";
import HttpError from "../components/pages/HttpError";
import ListItem from "../components/pages/ListItem";
import Profile from "../components/pages/Profile";
import SignIn from "../components/pages/sign-in";
import SignUp from "../components/pages/sign-up";

const routes = [
  {
    path: "/",
    element: <Home />,
    key: "Home",
  },
  {
    path: "/signin",
    element: <SignIn />,
    key: "SignIn",
  },
  {
    path: "/signup",
    element: <SignUp />,
    key: "SignUp",
  },
  {
    path: "/profile",
    element: <Profile />,
    key: "Profile",
  },
  {
    path: "/howitworks",
    element: <HowItWorks />,
    key: "HowItWorks",
  },
  {
    path: "/item/edit",
    element: <EditItem />,
    key: "EditItem",
  },
  {
    path: "/item/list",
    element: <ListItem />,
    key: "ListItem",
  },
  {
    path: "/item/browse",
    element: <BrowseItems />,
    key: "ListItem",
  },
  {
    path: "*",
    element: <HttpError />,
    key: "HttpError",
  },
];

export default routes;
