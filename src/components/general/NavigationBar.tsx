import styled from "styled-components";
import logo from "../../assets/logo.svg";

export const NavigationBar = () => {
  return (
    <StyledNavigationBar className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <StyledLink className='hover:text-red-500'>
                How it works
              </StyledLink>
            </li>
            <li>
              <StyledLink className='hover:text-red-500'>
                List an item
              </StyledLink>
            </li>
          </ul>
        </div>
        <StyledLogo alt='' src={logo} />
      </div>
      <div className='navbar-end hidden lg:flex'>
        <ul className='menu menu-horizontal p-0 lg:gap-20'>
          <li>
            <StyledLink className='hover:text-red-500'>How it works</StyledLink>
          </li>
          <li>
            <StyledLink className='hover:text-red-500'>List an item</StyledLink>
          </li>
        </ul>
      </div>
      <div className='navbar-start lg:ml-20'>
        <StyledButton className='btn text-white bg-red-500 hover:bg-red-700 '>
          Login or Signup
        </StyledButton>
      </div>
    </StyledNavigationBar>
  );
};

const StyledNavigationBar = styled.div`
  width: 100%;
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
  width: 50%;
  height: 100px;
  left: 0px;
  top: 0px;

  background: #ffffff;
  border: 0.5px #7e7a7a;
`;

const StyledLink = styled.span`
  width: 128px;
  height: 30px;
  left: 920px;
  top: 35px;

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 30px;
  /* identical to box height */

  color: #222e2e;
`;
