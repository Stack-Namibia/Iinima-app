/* eslint-disable react-hooks/exhaustive-deps */
import { TextField } from "@mui/material";
import React, { useEffect } from "react";
import { Button } from "../../general/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import { User } from "../../../api/accounts";
import { bindActionCreators } from "@reduxjs/toolkit";
import * as authActionCreators from "../../../store/action-creators/auth-action-creators";

const TextFieldProps: any = {
  variant: "outlined",
  fullWidth: true,
  margin: "normal",
};

function AfterAuth() {
  const [loading, setLoading] = React.useState(false);
  const userState = useSelector((state: RootState) => state.authUser);
  const dispatch = useDispatch();
  const { getUser } = bindActionCreators(authActionCreators, dispatch);
  const [user, setUser] = React.useState<User | undefined>({} as User);

  const [phoneNumber, setPhoneNumber] = React.useState("");
  const { user: auth0User } = useAuth0();

  useEffect(() => {
    if (!auth0User?.sub) return;
    getUser("jeCWbV2bM6OjpOH6qROteMm0Aaz1");
  }, []);

  useEffect(() => {
    setUser(userState.user);
  }, [userState]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    console.log(userState);

    console.log({
      ...user,
      phone_number: phoneNumber,
    });
    setLoading(false);
  };

  return (
    <div className='flex items-center min-h-screen bg-gray-50'>
      <div className='flex-1 h-full max-w-7xl m-5 bg-white rounded-lg shadow-xl md:mx-auto'>
        <div className='flex flex-col md:flex-row '>
          <div className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
            <div className='w-full'>
              <div className='flex justify-center'>
                <img src='/logo 1.svg' alt='logo' className='w-[50%]' />
              </div>
              <h1 className='mb-4 text-2xl font-bold text-center text-gray-700'>
                Enter your phone number
              </h1>
              <p className='text-center text-gray-500'>
                In order to continue, please provide us with your phone number.
              </p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className='mb-2'>
                  <TextField
                    {...TextFieldProps}
                    id='phone'
                    label='Phone Number'
                    type='tel'
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                </div>
                <Button text='update' type='submit' loading={loading} />
              </form>
            </div>
          </div>
          <div className=' h-0 md:h-auto md:w-1/2 md:visible'>
            <img
              className='object-cover w-full h-full'
              src='/sign-in-background.svg'
              alt='img'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AfterAuth;
