import { PulseLoader } from "react-spinners";
import logo from "../../../assets/loadingLogo.svg";

const LoadingPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='flex flex-col justify-center items-center'>
        <img src={logo} alt='logo' />
        <PulseLoader
          color='#C13427'
          loading
          size={25}
          margin={5}
          speedMultiplier={0.9}
        />
      </div>
    </div>
  );
};

export default LoadingPage;
