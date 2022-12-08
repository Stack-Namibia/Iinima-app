import BrowseItems from "../components/pages/items/browse-items";
import EditItem from "../components/pages/EditItem";
import Home from "../components/pages/Landing-page";
import ListItem from "../components/pages/items/list-items";
import HttpError from "../components/pages/http-error";
import Profile from "../components/pages/profile";
import SignIn from "../components/pages/sign-in";
import SignUp from "../components/pages/sign-up";
import HowItWorks from "../components/pages/how-it-works";
import ProfileEdit from "../components/pages/profile-edit";

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
    path: "/profile/edit",
    element: <ProfileEdit />,
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
