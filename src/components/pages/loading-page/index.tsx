import { useEffect, useState } from "react";
import RiseLoader from "react-spinners/RiseLoader";
import styled from "styled-components";
import logo from "../../../assets/loadingLogo.svg";

const LoadingPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <LoadingPageBG className="flex flex-col justify-center items-center h-screen">
      {loading ? (
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="logo" />
          <RiseLoader color={"#fff"} loading={loading} size={80} />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-7xl font-bold mt-5 text-white">
            Loading Complete
          </h1>
        </div>
      )}
    </LoadingPageBG>
  );
};

const LoadingPageBG = styled.div`
  background-color: #d63e3e;
`;
export default LoadingPage;
