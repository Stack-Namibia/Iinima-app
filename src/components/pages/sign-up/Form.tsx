import { Facebook, Twitter, Google } from "@mui/icons-material";
import { IconButton, Checkbox, TextField } from "@mui/material";
import { Input } from "../../general/Input";
import { Button } from "../../general/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(true);

  const inputProps: any = {
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
        <div className='flex items-center justify-center gap-4'>
          <IconButton>
            <Facebook
              fontSize='large'
              className='text-primary hover:text-black'
            />
          </IconButton>
          <IconButton>
            <Twitter
              fontSize='large'
              className='text-primary hover:text-black'
            />
          </IconButton>
          <IconButton>
            <Google
              fontSize='large'
              className='text-primary hover:text-black'
            />
          </IconButton>
        </div>
        <div className='divider'>Or</div>
        <form>
          <div className='mb-2'>
            <TextField
              {...inputProps}
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
              {...inputProps}
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
              {...inputProps}
              id='email'
              label='Email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
          </div>
          <div>
            <TextField
              {...inputProps}
              id='password'
              label='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
          </div>
          <div>
            <TextField
              {...inputProps}
              id='confirmPassword'
              label='Confirm Password'
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required={true}
              onBlur={() => setPasswordCheck(password === confirmPassword)}
              error={!passwordCheck}
              helperText={!passwordCheck ? "Passwords do not match" : undefined}
            />
          </div>

          <div className='flex'>
            <Checkbox
              value={terms}
              onChange={(e) => setTerms(!terms)}
              required
            />{" "}
            <span className='my-auto font-semibold text-[#7E7A7A] text-sm'>
              {/* TODO Add link to terms and conditions */}I have read and agree
              to the{" "}
              <Link to={"/signup"} className='text-primary underline'>
                Terms of Service
              </Link>
            </span>
          </div>
          <Button text='Sign Up' type='submit' />
        </form>
        <p className='mt-2 font-semibold text-[#7E7A7A] text-sm'>
          Already have an account?{" "}
          <span className='text-sm text-primary hover:underline'>
            <Link to={"/signin"}>Sign in</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Form;
