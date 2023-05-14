import { TextField } from "@mui/material";
import { Button } from "../../general/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { withRouter } from "react-router-dom";
import * as authActionCreators from "../../../store/action-creators/auth-action-creators";
import { useAuth0 } from "@auth0/auth0-react";

const Form = (props: any) => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const { addUser } = bindActionCreators(authActionCreators, dispatch);

  const [firstName, setFirstName] = useState<string>(user?.given_name ?? "");
  const [lastName, setLastName] = useState<string>(user?.family_name ?? "");
  const [email, setEmail] = useState<string>(user?.email ?? "");

  const [phone, setPhone] = useState(user?.phone_number);
  const [loading, setLoading] = useState(false);
  const [userExists, setUserExists] = useState(false);

  const clearData = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (user?.sub) {
      addUser({
        user_id: user?.sub,
        firstName,
        lastName,
        email,
        mobileNumber: phone,
      });
    }
    setLoading(false);
    props.history.push("/");
    return clearData();
  };

  const enableSubmit = firstName && lastName && email && phone;

  const textField: any = {
    variant: "outlined",
    fullWidth: true,
    margin: "dense",
  };
  return (
    <div className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
      <div className='w-full'>
        <div className='flex justify-center mb-5'>
          <img src='/logo 2.svg' alt='logo' className='w-[25%]' />
        </div>
        <h1 className='mb-4 text-3xl font-bold text-center text-gray-700'>
          Create an Account
        </h1>
        <p className='text-[#7E7A7A] font-semibold text-sm text-center mb-4'>
          Sign up now and get started with an account
        </p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='mb-2'>
            <TextField
              {...textField}
              id='firstName'
              label='First Name'
              type='text'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required={true}
            />
          </div>
          <div className='mb-2'>
            <TextField
              {...textField}
              id='lastName'
              label='Last Name'
              type='text'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required={true}
            />
          </div>
          <div className='mb-2'>
            <TextField
              {...textField}
              id='email'
              label='Email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
              error={userExists}
              helperText={userExists ? "A user with email already exists" : ""}
              onFocus={() => setUserExists(false)}
            />
          </div>
          <div className='mb-2'>
            <TextField
              {...textField}
              id='phone'
              label='Phone Number'
              type='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required={true}
            />
          </div>
          <Button
            text='Register'
            type='submit'
            disabled={!enableSubmit}
            loading={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default withRouter(Form);
