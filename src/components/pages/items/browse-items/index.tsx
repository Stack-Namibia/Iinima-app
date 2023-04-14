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
import { SelectChangeEvent } from "@mui/material";
import { arrayUnique } from "../../../../utils/data";

interface Props {
  items: Item[] | undefined;
  getItems: () => void;
  categories: string[];
  locations: string[];
}

interface ComponentState {
  modalOpen: boolean;
  selectedItem: Item | undefined;
  searchValue: string;
  locations: string[];
  categories: string[];
}

export class BrowseItems extends Component<Props> {
  state: ComponentState = {
    modalOpen: false,
    selectedItem: undefined,
    searchValue: "",
    locations: [],
    categories: [],
  };

  componentDidMount(): void {
    this.props.getItems();

    const regex = /\/item\/browse\/([a-f0-9-]+)/;

    // eslint-disable-next-line no-restricted-globals
    const match = location.pathname.match(regex);

    if (match) {
      console.log(match);
      this.setState((prevState: ComponentState) => ({
        ...prevState,
        modalOpen: true,
        selectedItem: this.props.items?.find((i) => i._id === match[1]),
      }));
    }
  }

  handleSearchValueChange = (e: any) => {
    this.setState((prevState) => ({
      ...prevState,
      searchValue: e.target.value,
    }));
  };

  handleLocationsChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    console.log(value);

    this.setState((prevState) => ({
      ...prevState,
      locations: value,
    }));
  };

  handleCategoriesChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    console.log(value);

    this.setState((prevState) => ({
      ...prevState,
      categories: value,
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

  setFilteredItems = () => {
    const { searchValue } = this.state;
    const items = this.props.items;

    if (
      !searchValue &&
      this.state.locations.length === 0 &&
      this.state.categories.length === 0
    ) {
      return items;
    }

    if (!items) return [];

    let filteredItems = items.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    if (this.state.locations.length > 0) {
      filteredItems = filteredItems.filter((item) => {
        return this.state.locations.includes(item.location);
      });
    }

    if (this.state.categories.length > 0) {
      filteredItems = filteredItems.filter((item) => {
        return this.state.categories.includes(item.category);
      });
    }

    return filteredItems;
  };

  removeLocationOption = (option: string) => {
    this.setState((prevState: ComponentState) => ({
      ...prevState,
      locations: prevState.locations.filter((l) => l !== option),
    }));
  };

  removeCategoryOption = (option: string) => {
    this.setState((prevState: ComponentState) => ({
      ...prevState,
      categories: prevState.categories.filter((l) => l !== option),
    }));
  };

  render() {
    const items = this.setFilteredItems();

    const { selectedItem, locations, categories } = this.state;
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
      itemId: selectedItem?._id ?? "",
    };

    return (
      <ApplicationWrapper>
        <BasicModal
          open={this.state.modalOpen}
          handleClose={this.setModalOpen}
          width={700}
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
                      handleSearch={() => this.setFilteredItems()}
                    />
                  </div>
                </div>
              </div>
              <div className='flex-row md:flex lg:flex pl-5 pr-5'>
                <MultiSelect
                  data={arrayUnique(this.props.locations)}
                  label={"Locations"}
                  options={locations}
                  handleChange={this.handleLocationsChange}
                />
                <MultiSelect
                  data={arrayUnique(this.props.categories)}
                  label={"Categories"}
                  options={categories}
                  handleChange={this.handleCategoriesChange}
                />
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
                      {items ? (
                        items.map((item: any) => (
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
                        ))
                      ) : (
                        <div>Its lonely here</div>
                      )}
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
  categories: state.items.items?.map((item) => item.category) ?? [],
  locations: state.items.items?.map((item) => item.location) ?? [],
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  getItems: () => dispatch(getItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseItems);
