import ApplicationWrapper from "../../general/ApplicationWrapper";
import { Search } from "@mui/icons-material";

const itemsMock = [
  {
    name: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    current: true,
  },
  // More files...
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
              <div className='mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8'>
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
                  <div className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                    {itemsMock.map((file) => (
                      <li key={file.name} className='relative'>
                        {/* Add item cards here */}
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
