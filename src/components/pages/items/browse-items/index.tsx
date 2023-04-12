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
import { connect } from "react-redux";
import { RootState } from "../../../../store/reducers";
import { Dispatch } from "@reduxjs/toolkit";
import { Item } from "../../../../api/items";
import { getItems } from "../../../../store/action-creators/items-action-creator";

import { Component } from "react";

interface Props {
  items: Item[] | undefined;
  getItems: () => void;
}

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

export class BrowseItems extends Component<Props> {
  componentDidMount(): void {
    this.props.getItems();
  }

  render() {
    const items = this.props.items ?? [];
    return (
      <ApplicationWrapper>
        <div className='flex h-screen'>
          {/* Content area */}
          <div className='flex flex-1 flex-col overflow-hidden'>
            <header className='w-full border-b border-gray-200 bg-white shadow-sm'>
              <div className='relative z-10 flex h-16 flex-shrink-0 bg-white'>
                <div className='flex flex-1 justify-between px-4 sm:px-6'>
                  <div className='flex flex-1'>
                    <SearchInput data={items.map((item) => item.title)} />
                  </div>
                </div>
              </div>
              <div className='flex-row md:flex lg:flex pl-5 pr-5'>
                <MultiSelect data={locations} label={"Locations"} />
                <MultiSelect data={categories} label={"Categories"} />
              </div>
            </header>

            {/* Main content */}
            <div className='flex flex-1 items-stretch overflow-hidden'>
              <main className='flex-1 overflow-y-auto'>
                <div className='mx-auto max-w-8xl px-4 pt-8 sm:px-4 lg:px-4'>
                  <div className='flex'>
                    <h1 className='flex-1 text-2xl font-bold text-gray-900'>
                      Items
                    </h1>
                  </div>
                  {/* Gallery */}
                  <section
                    className='mt-8 pb-16'
                    aria-labelledby='gallery-heading'
                  >
                    <h2 id='gallery-heading' className='sr-only'>
                      Recently viewed
                    </h2>
                    <div
                      role='list'
                      className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'
                    >
                      {items.map((item) => (
                        <div key={item.user_id}>
                          <ItemsCard
                            photos={item.photos}
                            description={item.description || ""}
                            dailyPrice={item.dailyPrice}
                            location={item.location}
                            key={item.user_id || ""}
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </main>
            </div>
          </div>
        </div>
      </ApplicationWrapper>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  items: state.items.items,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  getItems: () => dispatch(getItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseItems);
