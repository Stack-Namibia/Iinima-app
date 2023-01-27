import logo from "../../../assets/iinima.svg";
import Loader from "./loading-shape/loaderAnimation";

const LoadingPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-white'>
      <div className='flex flex-col justify-center items-center'>
        <img src={logo} alt='logo' className='mb-5 w-1/2' />
        <Loader />
      </div>
    </div>
  );
};

export default LoadingPage;
