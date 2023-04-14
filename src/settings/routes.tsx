import BrowseItems from "../components/pages/items/browse-items";
import EditItem from "../components/pages/EditItem";
import Home from "../components/pages/Landing-page";
import ListItem from "../components/pages/items/list-items";
import Profile from "../components/pages/profile";
import ProfileEdit from "../components/pages/profile/edit";
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
    path: "/profile/edit",
    exact: true,
    element: <ProfileEdit />,
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
    exact: true,
    element: <BrowseItems />,
    key: "ListItem",
  },
  {
    path: "/item/browse/:id",
    exact: true,
    element: <BrowseItems />,
    key: "ListItem",
  },
];

export default routes;
