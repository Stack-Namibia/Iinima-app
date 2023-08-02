import ApplicationWrapper from "../../general/ApplicationWrapper";
import logo from "../../../assets/404.svg";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const HttpError = ({
  error,
  code,
  message,
}: {
  error?: any;
  code?: string;
  message?: string;
}) => {
  return (
    <ApplicationWrapper>
      <div className='flex-row justify-center max-w-7xl bg-white rounded-lg mb-5 md:flex md:items-center mr-4 ml-4'>
        <div className='py-12'>
          <div>
            <img className='object-cover w-full h-full' src={logo} alt='img' />
          </div>
          <div className='flex flex-col justify-center mt-10 w-full'>
            <h1 className='font-bold text-7xl text-black'>Oops....</h1>
            <h2 className='text-3xl text-black mt-5'>{code}</h2>
            <p className='text-xl text-black mt-5'>{message}</p>
            <div className='mt-5'>
              <Link to={"/"}>
                <button className='btn gap-2 bg-primary rounded-[180px] border-none text-white'>
                  <ArrowBack />
                  Button
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ApplicationWrapper>
  );
};
export default HttpError;
