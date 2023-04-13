import ApplicationWrapper from "../../../general/ApplicationWrapper";
import ItemsCard from "../../../general/ItemCard";
import SearchInput from "./SearchInput";
import MultiSelect from "../../../general/MultiSelect";
import { connect } from "react-redux";
import { RootState } from "../../../../store/reducers";
import { Dispatch } from "@reduxjs/toolkit";
import { Item } from "../../../../api/items";
import { getItems } from "../../../../store/action-creators/items-action-creator";

import { Component } from "react";
import BasicModal from "../../../general/BasicModal";
import SingleItem, { SingleItemProps } from "./SingleItem";

interface Props {
  items: Item[] | undefined;
  getItems: () => void;
}

const itemsMock = [
  {
    _id: "63f8738a9e11e088f8d57578",
    user_id: "auth0|63c9439f97e75e1c36d98b0c",
    title: "Test",
    category: "power-tools",
    photos: [],
    description: "Some smart ass description that i could not make sense off!",
    location: "6sdafsid7fshd2",
    dailyPrice: 10,
    weeklyPrice: 4,
    monthlyPrice: 10,
    miniRentalDays: 10,
    itemValue: 10,
    deleted: false,
    createdAt: "2023-02-24T08:21:30.032000",
    updatedAt: null,
  },
  {
    _id: "63f8738a9e11e088f8d57578",
    user_id: "auth0|63c9439f97e75e1c36d98b0c",
    title: "Test",
    category: "power-tools",
    photos: [
      "https://firebasestorage.googleapis.com/v0/b/iinima.appspot.com/o/items%2Fauth0%7C63c9439f97e75e1c36d98b0c%2FTest%2FImage%202.png?alt=media&token=05cbc218-dc54-467a-8e6e-debbccd93755",
    ],
    description: "Some smart ass description that i could not make sense off!",
    location: "6sdafsid7fshd2",
    dailyPrice: 10,
    weeklyPrice: 4,
    monthlyPrice: 10,
    miniRentalDays: 10,
    itemValue: 10,
    deleted: false,
    createdAt: "2023-02-24T08:21:30.032000",
    updatedAt: null,
  },
  {
    _id: "63f8738a9e11e088f8d57578",
    user_id: "auth0|63c9439f97e75e1c36d98b0c",
    title: "Test",
    category: "power-tools",
    photos: [
      "https://firebasestorage.googleapis.com/v0/b/iinima.appspot.com/o/items%2Fauth0%7C63c9439f97e75e1c36d98b0c%2FTest%2FImage%202.png?alt=media&token=05cbc218-dc54-467a-8e6e-debbccd93755",
    ],
    description: "Some smart ass description that i could not make sense off!",
    location: "6sdafsid7fshd2",
    dailyPrice: 10,
    weeklyPrice: 4,
    monthlyPrice: 10,
    miniRentalDays: 10,
    itemValue: 10,
    deleted: false,
    createdAt: "2023-02-24T08:21:30.032000",
    updatedAt: null,
  },
  {
    _id: "63f8738a9e11e088f8d57578",
    user_id: "auth0|63c9439f97e75e1c36d98b0c",
    title: "Test",
    category: "power-tools",
    photos: [
      "https://firebasestorage.googleapis.com/v0/b/iinima.appspot.com/o/items%2Fauth0%7C63c9439f97e75e1c36d98b0c%2FTest%2FImage%202.png?alt=media&token=05cbc218-dc54-467a-8e6e-debbccd93755",
    ],
    description: "Some smart ass description that i could not make sense off!",
    location: "6sdafsid7fshd2",
    dailyPrice: 10,
    weeklyPrice: 4,
    monthlyPrice: 10,
    miniRentalDays: 10,
    itemValue: 10,
    deleted: false,
    createdAt: "2023-02-24T08:21:30.032000",
    updatedAt: null,
  },
  {
    _id: "63f8738a9e11e088f8d57578",
    user_id: "auth0|63c9439f97e75e1c36d98b0c",
    title: "Test",
    category: "power-tools",
    photos: [
      "https://firebasestorage.googleapis.com/v0/b/iinima.appspot.com/o/items%2Fauth0%7C63c9439f97e75e1c36d98b0c%2FTest%2FImage%202.png?alt=media&token=05cbc218-dc54-467a-8e6e-debbccd93755",
    ],
    description: "Some smart ass description that i could not make sense off!",
    location: "6sdafsid7fshd2",
    dailyPrice: 10,
    weeklyPrice: 4,
    monthlyPrice: 10,
    miniRentalDays: 10,
    itemValue: 10,
    deleted: false,
    createdAt: "2023-02-24T08:21:30.032000",
    updatedAt: null,
  },
  {
    _id: "63f8738a9e11e088f8d57578",
    user_id: "auth0|63c9439f97e75e1c36d98b0c",
    title: "Test",
    category: "power-tools",
    photos: [
      "https://firebasestorage.googleapis.com/v0/b/iinima.appspot.com/o/items%2Fauth0%7C63c9439f97e75e1c36d98b0c%2FTest%2FImage%202.png?alt=media&token=05cbc218-dc54-467a-8e6e-debbccd93755",
    ],
    description: "Some smart ass description that i could not make sense off!",
    location: "6sdafsid7fshd2",
    dailyPrice: 10,
    weeklyPrice: 4,
    monthlyPrice: 10,
    miniRentalDays: 10,
    itemValue: 10,
    deleted: false,
    createdAt: "2023-02-24T08:21:30.032000",
    updatedAt: null,
  },
  {
    _id: "63f8738a9e11e088f8d57578",
    user_id: "auth0|63c9439f97e75e1c36d98b0c",
    title: "Test",
    category: "power-tools",
    photos: [
      "https://firebasestorage.googleapis.com/v0/b/iinima.appspot.com/o/items%2Fauth0%7C63c9439f97e75e1c36d98b0c%2FTest%2FImage%202.png?alt=media&token=05cbc218-dc54-467a-8e6e-debbccd93755",
    ],
    description: "Some smart ass description that i could not make sense off!",
    location: "6sdafsid7fshd2",
    dailyPrice: 10,
    weeklyPrice: 4,
    monthlyPrice: 10,
    miniRentalDays: 10,
    itemValue: 10,
    deleted: false,
    createdAt: "2023-02-24T08:21:30.032000",
    updatedAt: null,
  },
  {
    _id: "63f8738a9e11e088f8d57578",
    user_id: "auth0|63c9439f97e75e1c36d98b0c",
    title: "Test",
    category: "power-tools",
    photos: [
      "https://firebasestorage.googleapis.com/v0/b/iinima.appspot.com/o/items%2Fauth0%7C63c9439f97e75e1c36d98b0c%2FTest%2FImage%202.png?alt=media&token=05cbc218-dc54-467a-8e6e-debbccd93755",
    ],
    description: "Some smart ass description that i could not make sense off!",
    location: "6sdafsid7fshd2",
    dailyPrice: 10,
    weeklyPrice: 4,
    monthlyPrice: 10,
    miniRentalDays: 10,
    itemValue: 10,
    deleted: false,
    createdAt: "2023-02-24T08:21:30.032000",
    updatedAt: null,
  },
  {
    _id: "63f8738a9e11e088f8d57578",
    user_id: "auth0|63c9439f97e75e1c36d98b0c",
    title: "Test",
    category: "power-tools",
    photos: [
      "https://firebasestorage.googleapis.com/v0/b/iinima.appspot.com/o/items%2Fauth0%7C63c9439f97e75e1c36d98b0c%2FTest%2FImage%202.png?alt=media&token=05cbc218-dc54-467a-8e6e-debbccd93755",
    ],
    description: "Some smart ass description that i could not make sense off!",
    location: "6sdafsid7fshd2",
    dailyPrice: 10,
    weeklyPrice: 4,
    monthlyPrice: 10,
    miniRentalDays: 10,
    itemValue: 10,
    deleted: false,
    createdAt: "2023-02-24T08:21:30.032000",
    updatedAt: null,
  },
  {
    _id: "63f8738a9e11e088f8d57578",
    user_id: "auth0|63c9439f97e75e1c36d98b0c",
    title: "Test",
    category: "power-tools",
    photos: [
      "https://firebasestorage.googleapis.com/v0/b/iinima.appspot.com/o/items%2Fauth0%7C63c9439f97e75e1c36d98b0c%2FTest%2FImage%202.png?alt=media&token=05cbc218-dc54-467a-8e6e-debbccd93755",
    ],
    description: "Some smart ass description that i could not make sense off!",
    location: "6sdafsid7fshd2",
    dailyPrice: 10,
    weeklyPrice: 4,
    monthlyPrice: 10,
    miniRentalDays: 10,
    itemValue: 10,
    deleted: false,
    createdAt: "2023-02-24T08:21:30.032000",
    updatedAt: null,
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

interface ComponentState {
  modalOpen: boolean;
  selectedItem: Item | undefined;
  searchValue: string;
}

export class BrowseItems extends Component<Props> {
  state: ComponentState = {
    modalOpen: false,
    selectedItem: undefined,
    searchValue: "",
  };

  componentDidMount(): void {
    this.props.getItems();
  }

  handleSearchValueChange = (e: any) => {
    this.setState((prevState) => ({
      ...prevState,
      searchValue: e.target.value,
    }));
  };

  setSelectedItem = (item: Item) => {
    this.setState((prevState: ComponentState) => ({
      ...prevState,
      selectedItem: item,
    }));
  };

  setModalOpen = () => {
    this.setState((prevState: ComponentState) => ({
      ...prevState,
      modalOpen: !prevState.modalOpen,
    }));
  };

  render() {
    const items = itemsMock;
    console.log("search value", this.state.searchValue);
    const { selectedItem } = this.state;
    const currentItem: SingleItemProps = {
      title: selectedItem?.title ?? "",
      description: selectedItem?.description ?? "",
      photos: selectedItem?.photos ?? [],
      location: selectedItem?.location ?? "",
      category: selectedItem?.category ?? "",
      dailyPrice: selectedItem?.dailyPrice ?? 0,
      weeklyPrice: selectedItem?.weeklyPrice ?? 0,
      monthlyPrice: selectedItem?.monthlyPrice ?? 0,
      userId: selectedItem?.user_id ?? "",
    };
    console.log("selectedItem", selectedItem);
    return (
      <ApplicationWrapper>
        <BasicModal
          open={this.state.modalOpen}
          handleClose={this.setModalOpen}
          width={700}
          height={800}
        >
          {<SingleItem {...currentItem} />}
        </BasicModal>
        <div className='flex h-screen'>
          {/* Content area */}
          <div className='flex flex-1 flex-col overflow-hidden'>
            <header className='w-full border-b border-gray-200 bg-white shadow-sm'>
              <div className='relative z-10 flex h-16 flex-shrink-0 bg-white'>
                <div className='flex flex-1 justify-between px-4 sm:px-6'>
                  <div className='flex flex-1'>
                    <SearchInput
                      value={this.state.searchValue}
                      onChange={this.handleSearchValueChange}
                      handleSearch={() => console.log("searching")}
                    />
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
                      className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'
                    >
                      {items.map((item: any) => (
                        <button
                          onClick={() => {
                            this.setSelectedItem(item);
                            this.setModalOpen();
                          }}
                          className='text-left'
                        >
                          <ItemsCard
                            photos={item.photos}
                            description={item.description || ""}
                            dailyPrice={item.dailyPrice}
                            location={item.location}
                            title={item.title}
                            category={item.category}
                          />
                        </button>
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
