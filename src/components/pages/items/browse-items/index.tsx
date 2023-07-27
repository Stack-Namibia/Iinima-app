/* eslint-disable no-restricted-globals */
import ApplicationWrapper from "../../../general/ApplicationWrapper";
import ItemsCard from "../../../general/ItemCard";
import SearchInput from "./SearchInput";
import MultiSelect from "../../../general/MultiSelect";
import { arrayUnique } from "../../../../utils/data";
import { categories as staticCategories } from "../../../../settings/constants";
import { useHistory, useLocation } from "react-router-dom";
import { useGetItems } from "../../../../hooks/items/queries";
import { useGetLocations } from "../../../../hooks/locations/queries";
import { useEffect, useState } from "react";

const BrowseItems = () => {
  const location = useLocation();
  const history = useHistory();
  const items = useGetItems();
  const locations = useGetLocations(true);

  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("searchValue") || "";
  const categoryQuery = queryParams.get("category") || "";

  const [searchValue, setSearchValue] = useState<string>(searchQuery);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  useEffect(() => {
    // Update the state with the search value from the URL
    setSearchValue(searchQuery);
    setCategories(categoryQuery ? categoryQuery.split(",") : []);
  }, [searchQuery, categoryQuery]);

  const handleSearchValueChange = (e: any) => {
    const value = e.target.value;
    setSearchValue(value);
    // Update the URL with the new search value
    queryParams.set("searchValue", value);
    history.push({ search: queryParams.toString() });
  };

  const handleCategoriesChange = (event: any) => {
    const { value } = event.target;
    setCategories(Array.isArray(value) ? value : [value]); // Ensure categories is an array
    // Update the URL with the new categories (using append instead of set)
    queryParams.delete("category"); // Remove existing category parameters
    value.forEach((category: string) =>
      queryParams.append("category", category)
    );
    history.push({ search: queryParams.toString() });
  };

  const handleLocationsChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setSelectedLocations(value);
  };

  if (items.isLoading || locations.isLoading) {
    return <div>Loading...</div>;
  }

  if (items.error || locations.error) {
    return <div>Something went wrong</div>;
  }

  // Filter items based on searchValue, selectedLocation, and selectedCategory
  let filteredItems = items.data;

  if (searchValue) {
    filteredItems = filteredItems.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  if (selectedLocations.length > 0) {
    filteredItems = filteredItems.filter((item) =>
      selectedLocations.some((l) => l === item.location)
    );
  }

  if (categories.length > 0) {
    filteredItems = filteredItems.filter((item) =>
      categories.some((c) => c === item.category)
    );
  }

  return (
    <ApplicationWrapper>
      <div className='flex h-screen'>
        {/* Content area */}
        <div className='flex flex-1 flex-col overflow-hidden'>
          <header className='w-full border-b border-gray-200 bg-white shadow-sm'>
            <div className='relative z-10 flex h-16 flex-shrink-0 bg-white'>
              <div className='flex flex-1 justify-between px-4 sm:px-6'>
                <div className='flex flex-1'>
                  <SearchInput
                    value={searchValue}
                    onChange={handleSearchValueChange}
                    handleSearch={() => {}}
                  />
                </div>
              </div>
            </div>
            <div className='flex-row md:flex lg:flex pl-5 pr-5'>
              <MultiSelect
                data={locations.data?.map((l) => l.town) || []}
                label={"Locations"}
                options={selectedLocations}
                handleChange={handleLocationsChange}
              />
              <MultiSelect
                data={arrayUnique(staticCategories.map((c) => c.name))}
                label={"Categories"}
                options={categories}
                handleChange={handleCategoriesChange}
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
                    {filteredItems.map((item: any, i: number) => (
                      <ItemsCard {...item} />
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
};

export default BrowseItems;
