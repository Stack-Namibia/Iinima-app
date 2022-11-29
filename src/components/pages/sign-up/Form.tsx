import { Facebook, Twitter, Google } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Input } from "../../general/Input";
import { Button } from "../../general/Button";
import { Link } from "react-router-dom";

const Form = () => (
  <div className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
    <div className='w-full'>
      <div className='flex justify-center mb-5'>
        <img src='/logo 2.svg' alt='logo' className='w-[25%]' />
      </div>
      <h1 className='mb-4 text-3xl font-bold text-center text-gray-700'>
        Create an Account
      </h1>
      <p className='text-[#7E7A7A] font-semibold text-sm text-center mb-4'>
        Sign up now and get start with an account
      </p>
      <div className='flex items-center justify-center gap-4'>
        <IconButton>
          <Facebook
            fontSize='large'
            className='text-primary hover:text-black'
          />
        </IconButton>
        <IconButton>
          <Twitter fontSize='large' className='text-primary hover:text-black' />
        </IconButton>
        <IconButton>
          <Google fontSize='large' className='text-primary hover:text-black' />
        </IconButton>
      </div>
      <div className='divider'>Or</div>
      <div className='mb-2'>
        <Input id='email' label='Email' type='email' />
      </div>
      <div>
        <Input id='password' label='Password' type='password' />
      </div>
      <p className='mt-4'>
        <Link className='text-sm text-primary hover:underline' to={"/signin"}>
          Forgot your password?
        </Link>
      </p>
      <Button text='Sign In' />
      <p className='mt-2'>
        Don't have an account?{" "}
        <span className='text-sm text-primary hover:underline'>
          <Link to={"/signup"}>Register</Link>
        </span>
      </p>
    </div>
  </div>
);

export default Form;
