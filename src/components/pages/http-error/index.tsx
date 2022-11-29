import ApplicationWrapper from "../../general/ApplicationWrapper";
import logo from "../../../assets/404.svg";
import styled from "styled-components";
import { Button as DaisyButton } from "../../general/Button";
import { Link } from "react-router-dom";

const HttpError = () => {
  return (
    <ApplicationWrapper>
      <div className='flex items-center'>
        <div className='flex-1 h-full max-w-7xl m-5 bg-white rounded-lg  md:mx-auto'>
          <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col justify-center p-6 sm:p-12 md:w-1/2'>
              <Styled404Header>Oops....</Styled404Header>
              <Styled404Subheading>Page not found 404</Styled404Subheading>
              <Styled404Description>
                This Page doesn`t exist or was removed! We suggest you back to
                home.
              </Styled404Description>
              <Link to={"/"}>
                <DaisyButton text='Back to Home' width='50%' />
              </Link>
            </div>
            <div>
              <img
                className='object-cover w-full h-full'
                src={logo}
                alt='img'
              />
            </div>
          </div>
        </div>
      </div>
    </ApplicationWrapper>
  );
};

const Styled404Header = styled.p`
  width: 173.1px;
  height: 50.11px;
  left: 191px;
  top: 379px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;

  color: #000000;
`;

const Styled404Subheading = styled.p`
  width: 312px;
  height: 41px;
  left: 191px;
  top: 445px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;

  color: #000000;
`;
const Styled404Description = styled.p`
  width: 387px;
  height: 51.18px;
  left: 191px;
  top: 504.82px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  letter-spacing: 0.04em;

  color: #4b4b4b;
`;

export default HttpError;
