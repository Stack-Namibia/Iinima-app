import { useEffect, useState } from "react";
import ApplicationWrapper from "../../../general/ApplicationWrapper";
import { extractUUIDFromString } from "../../../../utils/data";
import {
  CameraAltOutlined,
  EditOutlined,
  Phone,
  WhatsApp,
} from "@mui/icons-material";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useGetItem } from "../../../../hooks/items/queries";
import { useAccount } from "../../../../hooks/accounts/queries";
import { configs } from "../../../../settings/configs";
import LoadingPage from "../../loading-page";

const SingleItem = () => {
  const { user } = useAuth0();

  const [selectedSubscription, setSelectedSubscription] = useState<{
    price: number;
    duration: string;
  }>();

  const path = window.location.pathname;
  const itemId = extractUUIDFromString(path);

  const { data: item, isLoading: isLoadingItem } = useGetItem(itemId || "");
  const { data: itemUser, isLoading: isLoadingUser } = useAccount(
    item?.user_id || "",
    !!item
  );

  const [selectedPhoto, setSelectedPhoto] = useState<string>("");

  useEffect(() => {
    if (item?.user_id && !isLoadingItem) {
      setSelectedSubscription({
        price: item?.dailyPrice ?? 0,
        duration: "day",
      });
    }
  }, [item, isLoadingItem]);

  if (isLoadingItem || isLoadingUser) {
    return <LoadingPage />;
  }

  return (
    <ApplicationWrapper>
      <div className={`m-2`}>
        <section className='py-12 sm:py-16'>
          <div className='container mx-auto px-4'>
            <nav className='flex'>
              <ol className='flex items-center'>
                <li className='text-left'>
                  <div className='-m-1'>
                    <Link to={`/item/browse`}>
                      <span className='rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800'>
                        Items
                      </span>
                    </Link>
                  </div>
                </li>

                <li className='text-left'>
                  <div className='flex items-center'>
                    <span className='mx-2 text-gray-400'>/</span>
                    <div className='-m-1'>
                      <Link to={`/item/browse?category=${item?.category}`}>
                        <span className='rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800'>
                          {item?.category}
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>
              </ol>
            </nav>

            <div className='lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16'>
              <div className='lg:col-span-3 lg:row-end-1'>
                <div className='lg:flex lg:items-start'>
                  <div className='lg:order-2 lg:ml-5'>
                    <div className='max-w-xl overflow-hidden rounded-lg'>
                      {item?.photos && item.photos.length > 0 ? (
                        <img
                          className='h-full w-full max-w-full object-cover'
                          src={selectedPhoto || item?.photos[0]}
                          alt=''
                        />
                      ) : (
                        <CameraAltOutlined
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      )}
                    </div>
                  </div>

                  <div className='mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0'>
                    <div className='flex flex-row items-start lg:flex-col'>
                      {item?.photos && item.photos.length > 0 ? (
                        item?.photos.map((photo) => (
                          <button
                            type='button'
                            className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 text-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ${
                              photo === selectedPhoto && "border-primary"
                            }`}
                            onClick={() => setSelectedPhoto(photo)}
                          >
                            <img
                              className='h-full w-full object-cover'
                              src={photo}
                              alt=''
                            />
                          </button>
                        ))
                      ) : (
                        <button
                          type='button'
                          className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 text-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110`}
                        >
                          <CameraAltOutlined
                            style={{
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className='lg:col-span-2 lg:row-span-2 lg:row-end-2'>
                <h1 className='sm: text-2xl font-bold text-gray-900 sm:text-3xl'>
                  {item?.title}
                  {"  "}
                  {user?.sub === item?.user_id && (
                    <Link to={`/item/edit/${item?._id}`}>
                      <EditOutlined className='hover:text-primary' />
                    </Link>
                  )}
                </h1>
                <div className='text-sm'>
                  by{" "}
                  <span>{itemUser?.firstName + " " + itemUser?.lastName}</span>
                </div>

                <div className='mt-3 flex select-none flex-wrap items-center gap-1'>
                  <span className='text-gray-700'>{item?.description}</span>
                </div>
                <div className='mt-3 flex select-none flex-wrap items-center gap-1'>
                  <span className='text-gray-700'>Available in:</span>{" "}
                  <span>{item?.location}</span>
                </div>

                <h2 className='mt-8 text-base text-gray-700'>
                  Choose subscription
                </h2>
                <div className='mt-3 flex select-none flex-wrap items-center gap-1'>
                  <label className=''>
                    <input
                      type='radio'
                      name='subscription'
                      value={item?.dailyPrice}
                      className='peer sr-only'
                      checked={selectedSubscription?.duration === "day"}
                      onChange={(e) => {
                        setSelectedSubscription({
                          price: item?.dailyPrice ?? 0,
                          duration: "day",
                        });
                      }}
                    />
                    <p className='peer-checked:bg-primary peer-checked:text-white rounded-lg border  px-6 py-2 font-bold'>
                      N${item?.dailyPrice}
                    </p>
                    <span className='mt-1 block text-center text-xs'>
                      Daily
                    </span>
                  </label>
                  <label className=''>
                    <input
                      type='radio'
                      name='subscription'
                      value={item?.weeklyPrice}
                      className='peer sr-only'
                      checked={selectedSubscription?.duration === "week"}
                      onChange={(e) => {
                        setSelectedSubscription({
                          price: item?.weeklyPrice ?? 0,
                          duration: "week",
                        });
                      }}
                    />
                    <p className='peer-checked:bg-primary peer-checked:text-white rounded-lg border  px-6 py-2 font-bold'>
                      N${item?.weeklyPrice}
                    </p>
                    <span className='mt-1 block text-center text-xs'>
                      Weekly
                    </span>
                  </label>
                  <label className=''>
                    <input
                      type='radio'
                      name='subscription'
                      value={item?.monthlyPrice}
                      className='peer sr-only'
                      checked={selectedSubscription?.duration === "month"}
                      onChange={(e) => {
                        setSelectedSubscription({
                          price: item?.monthlyPrice ?? 0,
                          duration: "month",
                        });
                      }}
                    />
                    <p className='peer-checked:bg-primary peer-checked:text-white rounded-lg border  px-6 py-2 font-bold'>
                      N${item?.monthlyPrice}
                    </p>
                    <span className='mt-1 block text-center text-xs'>
                      Monthly
                    </span>
                  </label>
                </div>

                <div className='mt-10 flex flex-col justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0'>
                  <div className='flex items-end'>
                    <h1 className='text-3xl font-bold'>
                      N$ {selectedSubscription?.price}
                    </h1>
                    <span className='text-base'>
                      /{selectedSubscription?.duration}
                    </span>
                  </div>

                  <div className='flex gap-3 my-auto'>
                    {/* <div>
                      <button>
                        <a href={`/`} target='_blank' rel='noreferrer'>
                          <Email
                            sx={{
                              fontSize: "2rem",
                            }}
                          />
                        </a>
                      </button>
                    </div> */}
                    <div>
                      <button>
                        <a
                          href={`https://wa.me/${itemUser?.mobileNumber}?text=I'm%20interested%20in%20your%20${item?.title}%20${configs.base_url}/item/browse/${item?._id}%20for%20N$${selectedSubscription?.price}%20per%20${selectedSubscription?.duration}`}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <WhatsApp
                            sx={{
                              color: "#25D366",
                              fontSize: "2rem",
                            }}
                          />
                        </a>
                      </button>
                    </div>
                    <div>
                      <a href={`tel:${itemUser?.mobileNumber}`}>
                        <button>
                          <Phone
                            sx={{
                              color: "#128C7E",
                              fontSize: "2rem",
                            }}
                          />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ApplicationWrapper>
  );
};

export default SingleItem;
