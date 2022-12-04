import ApplicationWrapper from "../../general/ApplicationWrapper";
import logo from "../../../assets/iinima.svg";
import undraw from "../../../assets/read_time.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BrowseItemButton from "../../general/BrowseItemButton";

const HowItWorks = () => {
  return (
    <ApplicationWrapper>
      <div className="flex-row justify-center max-w-full bg-white rounded-lg mb-5 md:flex md:items-center mr-4 ml-4">
        <div className="py-12">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={undraw} className="max-w-sm rounded-lg" alt="img" />
            <div className="flex flex-col justify-center mt-10 w-full">
              <h1 className="font-bold text-5xl text-black">
                How to rent anything
              </h1>
              <h2 className="font-bold text-5xl text-black mt-5 text-right mr-10 text-red-700">
                Anything
              </h2>
              <p className="text-xl text-black mt-5 pl-10 text-right text-gray-500">
                Access items without owning them by renting them from around
                your area.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-row justify-center max-w-full bg-white rounded-lg mb-5 md:flex md:items-center mr-4 ml-4 bg-wave1">
        <div className="py-12">
          <div className="hero-content flex-col lg:flex-row">
            <img src={logo} className="max-w-sm rounded-lg" alt="img" />
            <div className="flex flex-col justify-center mt-10 w-full">
              <Headers className="font-bold text-5xl text-black text-red-700">
                Before rental
              </Headers>
              <SecondHeaders className="font-bold text-2xl text-black mt-3">
                Find an item close to you
              </SecondHeaders>
              <p className="text-black mt-1 text-left text-gray-500">
                Search for the items you’re looking for and filter by location.
              </p>
              <SecondHeaders className="font-bold text-2xl text-black mt-3 whitespace-normal">
                Request and verify
              </SecondHeaders>
              <p className="text-black mt-1 text-right text-gray-500 whitespace-normal">
                Send a request to the lender for the dates you’d like the items.
                Your booking is only confirmed when the owner accepts your
                request.
              </p>
              <SecondHeaders className="font-bold text-2xl text-black mt-3">
                Arrange pick up with the owner
              </SecondHeaders>
              <p className="text-black mt-1 text-left text-gray-500 whitespace-normal">
                Use chat to arrange convenient times to pick up the item and ask
                any questions you might have.
              </p>
              <Link to={"/item/browse"}>
                <BrowseItemButton />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-row justify-center max-w-full bg-white rounded-lg mb-5 md:flex md:items-center mr-4 ml-4">
        <div className="py-12">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={logo} className="max-w-sm rounded-lg" alt="img" />
            <div className="flex flex-col justify-center mt-10 w-full">
              <Headers className="font-bold text-5xl text-black text-red-700">
                During rental
              </Headers>
              <SecondHeaders className="font-bold text-2xl text-black mt-3">
                Enjoy your rental and return on time
              </SecondHeaders>
              <p className="text-black mt-1 text-left text-gray-500">
                Make the most of your time with the item and then return it
                safely to the owner at the end of the rental.
              </p>
              <SecondHeaders className="font-bold text-2xl text-black mt-3 whitespace-normal">
                Need more time?
              </SecondHeaders>
              <p className="text-black mt-1 text-right text-gray-500 whitespace-normal">
                Be sure to check in with the lender and book extra days if the
                item is available and you want to keep it for longer.
              </p>
              <Link to={"/item/browse"}>
                <BrowseItemButton />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-row justify-center max-w-full bg-white rounded-lg mb-5 md:flex md:items-center mr-4 ml-4 bg-wave2">
        <div className="py-12">
          <div className="hero-content flex-col lg:flex-row">
            <img src={logo} className="max-w-sm rounded-lg" alt="img" />
            <div className="flex flex-col justify-center mt-10 w-full">
              <Headers className="font-bold text-5xl text-black text-red-700 mb-5">
                Playing your part
              </Headers>
              <p className="text-black mt-1 text-left text-gray-500 mt-5">
                Renting on Iinima isn’t just convenient and cost effective. By
                buying less and renting more, you’re also contributing to a
                circular economy, making better use of resources and helping to
                protect this wonderful planet we live on.
              </p>
              <Link to={"/item/browse"}>
                <BrowseItemButton />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ApplicationWrapper>
  );
};

export default HowItWorks;

const Headers = styled.h1`
  color: #892b2b;
`;
const SecondHeaders = styled.h2`
  color: #545454;
`;
