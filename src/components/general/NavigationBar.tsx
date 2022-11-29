import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";



export const NavigationBar = () => {
   function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <StyledNavigationBar className="navbar bg-base-100 flex-1 px-4 flex justify-between ">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn hover:bg-red-200 btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              color="#000000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu bg-base-100  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <StyledLink className="hover:bg-red-200">How it works</StyledLink>
            </li>
            <li>
              <StyledLink className="hover:bg-red-200">List an item</StyledLink>
            </li>
          </ul>
        </div>
        <StyledLogo alt="" src={logo} />
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 lg:gap-20">
          <li>
            <StyledLink className="hover:bg-white hover:text-red-500">
              How it works
            </StyledLink>
          </li>
          <li>
            <StyledLink className="hover:bg-white hover:text-red-500">
              List an item
            </StyledLink>
          </li>
        </ul>
      </div>
      <div className="navbar-start lg:ml-20">
        <StyledButton className="btn text-white bg-red-500 hover:bg-red-700 ml:40">
          Login or Sign up
        </StyledButton>
      </div>
      
      <Menu as="div" className="navbar-start">
          <div>
            <Menu.Button className="bg-transparent rounded-full flex items-bottom text-sm focus:outline-none">
              <img
                className="avatar rounded-full w-10 h-10"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="relative mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }: { active: any }) => (
                  <a
                    href="http://localhost:3000/"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Your Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }: { active: any }) => (
                  <a
                    href="http://localhost:3000/"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }: { active: any }) => (
                  <a
                    href="http://localhost:3000/"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Rentals
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }: { active: any }) => (
                  <a
                    href="http://localhost:3000/"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Favourites
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }: { active: any }) => (
                  <a
                    href="http://localhost:3000/"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    My Items
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>

    </StyledNavigationBar>
  );
};

const StyledNavigationBar = styled.div`
  width: 100%;
  height: 50px;
  left: 0px;
  top: 0px;

  background: #ffffff;
  border: 0.5px #7e7a7a;
`;

const StyledButton = styled.button`
  max-width: 200px;
  height: 35px;
  left: 1264px;
  top: 26px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  border: none;
`;
const StyledLogo = styled.img`
  height: 200px;
  left: 0px;
  top: 0px;

  background: #ffffff;
  border: 0.5px #7e7a7a;
`;

const StyledLink = styled.span`
  width: 128px;
  height: 35px;
  left: 920px;
  top: 35px;

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 30px;
  /* identical to box height */

  color: #222e2e;
`;

