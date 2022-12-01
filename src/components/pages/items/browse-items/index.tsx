import ApplicationWrapper from "../../../general/ApplicationWrapper";
import { Phone, WhatsApp } from "@mui/icons-material";
import ItemsCard from "../../../general/ItemCard";
import Couresal from "../../../general/Couresal";
import { IconButton, Typography } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ItemsCouresal from "../../../general/ItemsCouresal";
import SearchInput from "./SearchInput";
import MultiSelect from "../../../general/MultiSelect";

const itemsMock = [
  {
    id: "ajsdlkadsubia",
    name: "Drill Machine",
    images: [
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    ],
    location: "Windhoek",
    price: {
      day: 300,
      week: 500,
      month: 1000,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    category: "Tools",
    likes: 200,
    user: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      id: "dsjhkgfsk",
    },
    liked: false,
  },
  {
    id: "ajsdlkadsubiaas",
    name: "Electric Drill Machine",
    images: [
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    ],
    location: "Windhoek",
    price: {
      day: 250,
      week: 500,
      month: 1000,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    category: "Tools",
    likes: 200,
    user: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      id: "dsjhkgfsk",
    },
    liked: true,
  },
  {
    id: "ajsdlkadsubia",
    name: "Drill Machine",
    images: [
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    ],
    location: "Windhoek",
    price: {
      day: 150,
      week: 500,
      month: 1000,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    category: "Tools",
    likes: 200,
    user: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      id: "dsjhkgfsk",
    },
    liked: true,
  },
  {
    id: "ajsdlkadsubiaas",
    name: "Electric Drill Machine",
    images: [
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    ],
    location: "Windhoek",
    price: {
      day: 250,
      week: 500,
      month: 1000,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    category: "Tools",
    likes: 200,
    user: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      id: "dsjhkgfsk",
    },
    liked: false,
  },
  {
    id: "ajsdlkadsubia",
    name: "Drill Machine",
    images: [
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    ],
    location: "Windhoek",
    price: {
      day: 90,
      week: 500,
      month: 1000,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    category: "Tools",
    likes: 200,
    user: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      id: "dsjhkgfsk",
    },
    liked: false,
  },
  {
    id: "ajsdlkadsubiaas",
    name: "Electric Drill Machine",
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    ],
    location: "Windhoek",
    price: {
      day: 50,
      week: 500,
      month: 1000,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    category: "Tools",
    likes: 200,
    user: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      id: "dsjhkgfsk",
    },
    liked: false,
  },
];

const locations = [
  "Windhoek",
  "Swakopmund",
  "Walvis Bay",
  "Oshakati",
  "Otjiwarongo",
  "Gobabis",
];
const categories = ["Tools", "Electronics", "Furniture", "Clothing", "Books"];

const BrowseItems = () => {
  return (
    <ApplicationWrapper>
      <div className="flex h-screen">
        {/* Content area */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <header className="w-full border-b border-gray-200 bg-white shadow-sm">
            <div className="relative z-10 flex h-16 flex-shrink-0 bg-white">
              <div className="flex flex-1 justify-between px-4 sm:px-6">
                <div className="flex flex-1">
                  <SearchInput data={itemsMock.map((item) => item.name)} />
                </div>
              </div>
            </div>
            <div className="flex-row md:flex lg:flex pl-5 pr-5">
              <MultiSelect data={locations} label={"Locations"} />
              <MultiSelect data={categories} label={"Categories"} />
            </div>
          </header>

          {/* Main content */}
          <div className="flex flex-1 items-stretch overflow-hidden">
            <main className="flex-1 overflow-y-auto">
              <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-4 lg:px-4">
                <div className="flex">
                  <h1 className="flex-1 text-2xl font-bold text-gray-900">
                    Items
                  </h1>
                </div>
                {/* Gallery */}
                <section
                  className="mt-8 pb-16"
                  aria-labelledby="gallery-heading"
                >
                  <h2 id="gallery-heading" className="sr-only">
                    Recently viewed
                  </h2>
                  <div
                    role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
                  >
                    {itemsMock.map((item) => (
                      <li
                        key={item.name}
                        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                      >
                        <ItemsCard item={item} />
                      </li>
                    ))}
                  </div>
                </section>
              </div>
            </main>

            {/* Details sidebar */}
            <aside className="hidden w-96 overflow-y-auto border-l border-gray-200 bg-white p-8 lg:block">
              <div className="space-y-6 pb-16">
                {/* select items details here */}
                <div className="flex-row">
                  <Couresal data={itemsMock[0].images} maxWidth={400} />
                  <div className="flex justify-between mt-2">
                    <div className="flex-row">
                      <h1 className="text-2xl font-bold text-gray-900">
                        {itemsMock[0].name}
                      </h1>
                      <span className="font-semibold text-gray-400 text-sm">
                        {itemsMock[0].location}
                      </span>
                    </div>
                    <div className="flex-col">
                      <IconButton aria-label="add to favorites">
                        <Favorite />
                      </IconButton>
                      <IconButton>
                        <WhatsApp />
                      </IconButton>
                      <IconButton>
                        <Phone />
                      </IconButton>
                    </div>
                  </div>
                </div>
                <Typography variant="subtitle1">Description</Typography>
                <div>
                  <Typography variant="body2" color="text.secondary">
                    {itemsMock[0].description}
                  </Typography>
                </div>
                <Typography variant="subtitle1">Prices</Typography>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                    display: "flex",
                  }}
                >
                  <ListItem>
                    <ListItemText
                      primary={`N$ ${itemsMock[0].price.day}`}
                      secondary="Per Day"
                      sx={{ textAlign: "center" }}
                    />
                  </ListItem>
                  <Divider component="li" orientation="vertical" flexItem />
                  <ListItem>
                    <ListItemText
                      primary={`N$ ${itemsMock[0].price.week}`}
                      secondary="Per Week"
                      sx={{ textAlign: "center" }}
                    />
                  </ListItem>
                  <Divider component="li" orientation="vertical" flexItem />
                  <ListItem>
                    <ListItemText
                      primary={`N$ ${itemsMock[0].price.month}`}
                      secondary="Per Month"
                      sx={{ textAlign: "center" }}
                    />
                  </ListItem>
                </List>
                <Typography variant="subtitle1">Other Items</Typography>
                <ItemsCouresal items={itemsMock} maxWidth={400} />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </ApplicationWrapper>
  );
};

export default BrowseItems;
