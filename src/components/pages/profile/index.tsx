import styled from "styled-components";
// import { Edit as PencilIcon } from "@mui/icons-material";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import { Link } from "react-router-dom";
import ApplicationWrapper from "../../general/ApplicationWrapper";
import withAuth from "../../auth";
import { Item } from "../../../api/items";
import { useAuth0 } from "@auth0/auth0-react";
import ItemCard from "../../general/ItemCard";
import { useAccount } from "../../../hooks/accounts/queries";
import { useGetUserItems } from "../../../hooks/items/queries";
import LoadingPage from "../loading-page";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const profile: any = {
  name: "Jon Doe",
  imageUrl:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  coverImageUrl:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  about: `
    <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
    <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
  `,
  fields: {
    "First Name": "Jon",
    "Last Name": "Doe",
    "Mobile Number": "(081) 656-1487",
    Email: "jondoe@example.com",
    Address: "Windhoek, Namibia",
  },
};

const Profile = () => {
  const { user } = useAuth0();
  const { data: dbUser, isLoading: isGettingAccount } = useAccount(
    user?.sub || "",
    true
  );
  const { data: items, isLoading: isGettingItems } = useGetUserItems(
    user?.sub || ""
  );
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (isGettingAccount || isGettingItems) {
    return <LoadingPage />;
  }

  return (
    <>
      <ApplicationWrapper>
        <div className='flex h-screen'>
          <div className='flex min-w-0 flex-1 flex-col overflow-hidden'>
            <div className='lg:hidden'>
              <div className='flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5'></div>
            </div>
            <div className='relative z-0 flex flex-1 overflow-hidden'>
              <main className='relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last'>
                <article>
                  {/* Profile header */}
                  <div>
                    <div>
                      <img
                        className='h-32 w-full object-cover lg:h-48'
                        src={profile.coverImageUrl}
                        alt=''
                      />
                    </div>
                    <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
                      <div className='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
                        <div className='flex'>
                          {user?.picture ? (
                            <img
                              className='h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32'
                              src={user?.picture}
                              alt={dbUser?.firstName + " " + dbUser?.lastName}
                            />
                          ) : (
                            <div className=' bg-primary relative inline-flex items-center justify-center w-24 h-24 overflow-hidden rounded-full ring-4 ring-white sm:h-32 sm:w-32 '>
                              <span className='font-medium text-white dark:text-gray-300 text-4xl'>
                                {dbUser?.firstName[0] ||
                                  "" + dbUser?.lastName[0] ||
                                  ""}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className='mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
                          <div className='mt-6 min-w-0 flex-1 sm:hidden 2xl:block'>
                            <Name className='truncate text-2xl font-bold text-gray-900'>
                              {dbUser?.firstName + " " + dbUser?.lastName}
                            </Name>
                          </div>
                          {/* <div className='justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4'>
                            <Link to={"/profile/edit"}>
                              <EditButton
                                type='button'
                                className='inline-flex justify-center rounded-3xl border border-gray-300 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
                              >
                                <PencilIcon
                                  className='-ml-1 mr-2 h-5 w-5'
                                  aria-hidden='true'
                                />
                                <span>Edit Profile</span>
                              </EditButton>
                            </Link>
                          </div> */}
                        </div>
                      </div>
                      <div className='mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden'>
                        <Name className='truncate text-2xl font-bold text-gray-900'>
                          {dbUser?.firstName + " " + dbUser?.lastName}
                        </Name>
                      </div>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className='mt-6 sm:mt-2 2xl:mt-5'>
                    <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
                      <Box sx={{ width: "100%" }}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                          <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label='basic tabs example'
                            sx={{
                              "& .MuiTabs-indicator": {
                                backgroundColor: "#d63e3e;",
                              },
                              "& .MuiTab-root": {
                                textTransform: "none",
                                color: "#5e8797",
                                fontSize: "20px",
                                fontWeight: 500,
                              },
                              "& .Mui-selected": {
                                textTransform: "none",
                                color: "#d63e3e",
                              },
                            }}
                          >
                            <Tab label='Listed Items' {...a11yProps(0)} />
                            {/* <Tab label='Listed items' {...a11yProps(1)} />
                            <Tab label='Favourites' {...a11yProps(2)} /> */}
                          </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                          <div
                            role='list'
                            className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'
                          >
                            {items.map((item: Item, i) => (
                              <ItemCard {...item} />
                            ))}
                          </div>
                        </TabPanel>
                        {/* <TabPanel value={value} index={1}>
                          <div
                            role='list'
                            className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'
                          >
                            {localItems && (
                              <>
                                {localItems.map((item: Item, i) => (
                                  <button
                                    key={i}
                                    onClick={() => {
                                      setSelectedItem(item);
                                      handleSetModalOpen();
                                    }}
                                    className='text-left'
                                  >
                                    <ItemCard
                                      photos={item.photos}
                                      description={item.description || ""}
                                      dailyPrice={item.dailyPrice}
                                      location={item.location}
                                      title={item.title}
                                      category={item.category}
                                    />
                                  </button>
                                ))}
                              </>
                            )}
                          </div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                          Favourites
                        </TabPanel> */}
                      </Box>
                    </div>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
      </ApplicationWrapper>
    </>
  );
};

// const EditButton = styled.button`
//   background-color: #d63e3e;
//   &:hover {
//     color: #5e8797;
//   }
// `;

const Name = styled.h1`
  color: #5e8797;
`;

export default withAuth(Profile);
