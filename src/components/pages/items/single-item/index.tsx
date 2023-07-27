import React, { useEffect } from "react";
import ApplicationWrapper from "../../../general/ApplicationWrapper";
import { extractUUIDFromString } from "../../../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/reducers";
import { bindActionCreators } from "@reduxjs/toolkit";
import * as ItemActionsCreator from "../../../../store/action-creators/items-action-creator";
import { LocationCity, MapRounded, PinDrop } from "@mui/icons-material";

const SingleItem = () => {
  const dispatch = useDispatch();

  const { item } = useSelector((state: RootState) => state.items);

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
                </h1>

                <h2 className='mt-8 text-base text-gray-900'>Description</h2>
                <div className='mt-3 flex select-none flex-wrap items-center gap-1'>
                  <span>{item?.description}</span>
                </div>

                <h2 className='mt-8 text-base text-gray-900'>Location</h2>
                <div className='mt-3 flex select-none flex-wrap items-center gap-1'>
                  <PinDrop className='text-primary' />{" "}
                  <span>{item?.location}</span>
                </div>

                <h2 className='mt-8 text-base text-gray-900'>
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
                    <p className='peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold'>
                      4 Months
                    </p>
                    <span className='mt-1 block text-center text-xs'>
                      $80/mo
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
                    <p className='peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold'>
                      8 Months
                    </p>
                    <span className='mt-1 block text-center text-xs'>
                      $60/mo
                    </span>
                  </label>
                  <label className=''>
                    <input
                      type='radio'
                      name='subscription'
                      value='12 Months'
                      className='peer sr-only'
                    />
                    <p className='peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold'>
                      12 Months
                    </p>
                    <span className='mt-1 block text-center text-xs'>
                      $40/mo
                    </span>
                  </label>
                </div>

                <div className='mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0'>
                  <div className='flex items-end'>
                    <h1 className='text-3xl font-bold'>$60.50</h1>
                    <span className='text-base'>/month</span>
                  </div>

                  <button
                    type='button'
                    className='inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='shrink-0 mr-3 h-5 w-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      stroke-width='2'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>

                <ul className='mt-8 space-y-2'>
                  <li className='flex items-center text-left text-sm font-medium text-gray-600'>
                    <svg
                      className='mr-2 block h-5 w-5 align-middle text-gray-500'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        className=''
                      ></path>
                    </svg>
                    Free shipping worldwide
                  </li>

                  <li className='flex items-center text-left text-sm font-medium text-gray-600'>
                    <svg
                      className='mr-2 block h-5 w-5 align-middle text-gray-500'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                        className=''
                      ></path>
                    </svg>
                    Cancel Anytime
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ApplicationWrapper>
  );
};

export default SingleItem;
