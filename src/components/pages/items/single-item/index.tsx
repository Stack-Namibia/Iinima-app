import { useEffect, useState } from "react";
import ApplicationWrapper from "../../../general/ApplicationWrapper";
import { extractUUIDFromString } from "../../../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/reducers";
import { bindActionCreators } from "@reduxjs/toolkit";
import * as ItemActionsCreator from "../../../../store/action-creators/items-action-creator";
import * as authActionCreators from "../../../../store/action-creators/auth-action-creators";
import { EditOutlined, Email, Phone, WhatsApp } from "@mui/icons-material";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { User } from "../../../../api/accounts";

const SingleItem = () => {
  const dispatch = useDispatch();

  const { item } = useSelector((state: RootState) => state.items);
  const { user: dbUser } = useSelector((state: RootState) => state.authUser);
  const { getUser } = bindActionCreators(authActionCreators, dispatch);
  const [itemUser, setItemUser] = useState<User | undefined>(undefined);
  const { user } = useAuth0();

  const { getItem } = bindActionCreators(ItemActionsCreator, dispatch);

  useEffect(() => {
    // Get items id parameter from path
    const path = window.location.pathname;
    const itemId = extractUUIDFromString(path);

    if (itemId) {
      getItem(itemId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (item?.user_id) {
      getUser(item?.user_id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setItemUser(dbUser);
  }, [dbUser]);

  return (
    <ApplicationWrapper>
      <div className='m-5'>
        <section className='py-12 sm:py-16'>
          <div className='container mx-auto px-4'>
            <nav className='flex'>
              <ol className='flex items-center'>
                <li className='text-left'>
                  <div className='-m-1'>
                    <a
                      href='/'
                      className='rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800'
                    >
                      items
                    </a>
                  </div>
                </li>

                <li className='text-left'>
                  <div className='flex items-center'>
                    <span className='mx-2 text-gray-400'>/</span>
                    <div className='-m-1'>
                      <a
                        href='/'
                        className='rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800'
                      >
                        {item?.category}
                      </a>
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
                      <img
                        className='h-[500px] w-full max-w-full object-cover'
                        src={item?.photos[0]}
                        alt=''
                      />
                    </div>
                  </div>

                  <div className='mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0'>
                    <div className='flex flex-row items-start lg:flex-col'>
                      {item?.photos.map((photo) => (
                        <button
                          type='button'
                          className='flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center'
                        >
                          <img
                            className='h-full w-full object-cover'
                            src={photo}
                            alt=''
                          />
                        </button>
                      ))}
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
                  <span>{item?.description}</span>
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
                      value='4 Months'
                      className='peer sr-only'
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
                      value='8 Months'
                      className='peer sr-only'
                      checked
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
                      value='12 Months'
                      className='peer sr-only'
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
                    <h1 className='text-3xl font-bold'>$60.50</h1>
                    <span className='text-base'>/month</span>
                  </div>

                  <div className='flex gap-3 my-auto'>
                    <div>
                      <button>
                        <a href={`/`} target='_blank' rel='noreferrer'>
                          <Email
                            sx={{
                              fontSize: "2rem",
                            }}
                          />
                        </a>
                      </button>
                    </div>
                    <div>
                      <button>
                        <a
                          href={`https://wa.me/${itemUser?.mobileNumber}?text=I'm%20interested%20in%20your%20${item?.title}%20https%3A%2F%2F2671-160-242-75-87.ngrok-free.app/item/browse/${item?._id}`}
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
