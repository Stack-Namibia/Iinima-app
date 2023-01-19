import {
  Facebook,
  Twitter,
  Google,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useLocation, useHistory } from "react-router-dom";
import { Button } from "../../general/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { login, signInWithGoogle } from "../../../utils/firebase";
import * as authActionCreators from "../../../store/action-creators/auth-action-creators";

const TextFieldProps: any = {
  variant: "outlined",
  fullWidth: true,
  margin: "normal",
};

const Form = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { setAuthUser } = bindActionCreators(authActionCreators, dispatch);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);

  const clearData = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    login(email, password)
      .then((res: any) => {
        if (res === "wrong-password") {
          setLoading(false);
          return setPasswordIncorrect(true);
        }
        if (res === "user-not-found") {
          setLoading(false);
          return setUserNotFound(true);
        }
        setLoading(false);
        setAuthUser(res);
        handleRedirect();
        clearData();
      })
      .catch((err: any) => {
        setLoading(false);
        console.log(err);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle().then((res: any) => {
      if (res.user_id) {
        setAuthUser(res);
        handleRedirect();
        clearData();
      } else {
        console.log(res);
      }
    });
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleRedirect = () => {
    location.pathname === "/signin" && history.push("/");
  };
  return (
    <div className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
      <div className='w-full'>
        <div className='flex justify-center'>
          <img src='/logo 1.svg' alt='logo' className='w-[60%]' />
        </div>
        <h1 className='mb-4 text-2xl font-bold text-center text-gray-700'>
          Login to Your Account
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='mb-2'>
            <TextField
              {...TextFieldProps}
              id='email'
              label='Email'
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={userNotFound}
              helperText={
                userNotFound ? "Email not associated to any user" : undefined
              }
              onFocus={() => setUserNotFound(false)}
            />
          </div>
          <div>
            <TextField
              {...TextFieldProps}
              id='password'
              label='Password'
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={passwordIncorrect}
              helperText={passwordIncorrect ? "Incorrect password" : undefined}
              onFocus={() => setPasswordIncorrect(false)}
            />
          </div>
          <p className='mt-4 font-semibold text-sm'>
            <Link
              className='text-sm text-primary hover:underline'
              to={"/signin"}
            >
              Forgot your password?
            </Link>
          </p>
          <Button text='Sign In' type='submit' loading={loading} />
        </form>
        <p className='mt-2 font-semibold text-[#7E7A7A] text-sm'>
          Don't have an account?{" "}
          <span className='text-sm text-primary hover:underline'>
            <Link to={"/signup"}>Register</Link>
          </span>
        </p>

        <div className='divider'>Or continue with</div>

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
          <IconButton onClick={handleGoogleSignIn}>
            <Google
              fontSize='large'
              className='text-primary hover:text-black'
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Form;
