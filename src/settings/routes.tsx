import BrowseItems from "../components/pages/items/browse-items";
import Home from "../components/pages/Landing-page";
import ListItem from "../components/pages/items/list-items";
import Profile from "../components/pages/profile";
import ProfileEdit from "../components/pages/profile/edit";
import HowItWorks from "../components/pages/how-it-works";
import SingleItem from "../components/pages/items/single-item";
import SignUp from "../components/pages/sign-up";

const routes = [
  {
    path: "/",
    exact: true,
    element: <Home />,
    key: "Home",
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
    path: "/item/edit/:id",
    exact: true,
    element: <ListItem />,
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
    element: <SingleItem />,
    key: "ListItem",
  },
];

export default routes;
