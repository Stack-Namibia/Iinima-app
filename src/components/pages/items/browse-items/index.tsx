import ApplicationWrapper from "../../../general/ApplicationWrapper";
import { Search } from "@mui/icons-material";
import ItemsCard from "./ItemCard";

const itemsMock = [
  {
    id: "ajsdlkadsubia",
    name: "Drill Machine",
    images: [
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    ],
    location: "Windhoek",
    price: 100,
    description: "Lorem ipsum dolor sit ametconsectetur ",
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
    name: "Drill Machine",
    images: [
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    ],
    location: "Windhoek",
    price: 100,
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
];

const BrowseItems = () => {
  return (
    <ApplicationWrapper>
      <div className='flex h-screen'>
        {/* Content area */}
        <div className='flex flex-1 flex-col overflow-hidden'>
          <header className='w-full'>
            <div className='relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white shadow-sm'>
              <div className='flex flex-1 justify-between px-4 sm:px-6'>
                <div className='flex flex-1'>
                  <form className='flex w-full md:ml-0' action='#' method='GET'>
                    <label htmlFor='desktop-search-field' className='sr-only'>
                      Search all files
                    </label>
                    <label htmlFor='mobile-search-field' className='sr-only'>
                      Search all files
                    </label>
                    <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center'>
                        <Search
                          className='h-5 w-5 flex-shrink-0'
                          aria-hidden='true'
                        />
                      </div>
                      <input
                        name='mobile-search-field'
                        id='mobile-search-field'
                        className='h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:hidden'
                        placeholder='Search'
                        type='search'
                      />
                      <input
                        name='desktop-search-field'
                        id='desktop-search-field'
                        className='hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:block'
                        placeholder='Search all files'
                        type='search'
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <div className='flex flex-1 items-stretch overflow-hidden'>
            <main className='flex-1 overflow-y-auto'>
              <div className='mx-auto max-w-4xl px-4 pt-8 sm:px-4 lg:px-4'>
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
                    className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'
                  >
                    {itemsMock.map((item) => (
                      <li
                        key={item.name}
                        className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow'
                      >
                        <ItemsCard item={item} />
                      </li>
                    ))}
                  </div>
                </section>
              </div>
            </main>

            {/* Details sidebar */}
            <aside className='hidden w-96 overflow-y-auto border-l border-gray-200 bg-white p-8 lg:block'>
              <div className='space-y-6 pb-16'>
                {/* select items details here */}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </ApplicationWrapper>
  );
};

export default BrowseItems;