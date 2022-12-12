import HowItWorksWrapper from "../../general/HowItWorksWrapper";
import logo from "../../../assets/iinima.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import photography from "../../../assets/mockimages/Photography.jpg";
import camping from "../../../assets/mockimages/Camping.jpg";
import dj from "../../../assets/mockimages/DjEquipment.jpg";
import construction from "../../../assets/mockimages/Construction.jpg";
import electronics from "../../../assets/mockimages/Electronics.jpg";
import music from "../../../assets/mockimages/Music.jpg";
import powertools from "../../../assets/mockimages/PowerTools.jpg";
import transport from "../../../assets/mockimages/Transport.jpg";
import SearchInput from "./SearchInput";
import { Button } from "../../general/Button";
import middlewave from "../../../assets/middlewave.svg";

const Home = () => {
  const categories = [
    {
      name: "Photography",
      imageUrl: photography,
    },
    {
      name: "Camping",
      imageUrl: camping,
    },
    {
      name: "Dj Equipment",
      imageUrl: dj,
    },
    {
      name: "Transport",
      imageUrl: transport,
    },
    {
      name: "Electronics",
      imageUrl: electronics,
    },
    {
      name: "Music",
      imageUrl: music,
    },
    {
      name: "Power Tools",
      imageUrl: powertools,
    },
    {
      name: "Construction",
      imageUrl: construction,
    },
    // More people...
  ];

  return (
    <HowItWorksWrapper>
      <div className='hero min-h-screen bg-white'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img
            src={logo}
            className='hidden max-w-sm md:block lg:block'
            alt='logo'
          />
          <div>
            <h1 className='font-bold text-7xl text-black'>
              Rent <MarkText>Anything</MarkText>
            </h1>
            <div
              className='font-bold text-7xl text-black whitespace-pre-line w-3/4 mt-3
               '
            >
              From within your area
            </div>
            <div className='flex flex-row items-center mt-10 lg:flex-row gap-5'>
              <SearchInput data={["Grinder", "Camera"]} />
              <Link to={"/item/browse"}>
                <Button text='Browse Items' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className='hero min-h-screen bg-[#FAE7F8] m-0'
        style={{
          backgroundImage: `url(${middlewave})`,
        }}
      >
        <div className='hero-content flex-col lg:flex-row-reverse'></div>
      </div>
    </HowItWorksWrapper>
  );
};

export default Home;

const SkewCC = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  left: 0px;
  background: linear-gradient(to right bottom, #823a9c 49%, #fff 50%),
    linear-gradient(-50deg, #ffffff 16px, #000 0);
`;

const BrowseItemButton = styled.button`
  background-color: white;
  border: none;
  color: #000;
  text-align: center;
`;

const MarkText = styled.mark`
  background-color: transparent;
  border: none;
  color: #c13327;
`;

const Seperator = styled.div`
  background-color: rgba(214, 62, 62, 0.51);
  text-align: center;
  background: linear-gradient(to right bottom, #823a9c 49%, #fff 50%),
    linear-gradient(-50deg, #ffffff 16px, #000 0);
`;

const Image = styled.img`
  border-radius: 16px 16px 0px 0px;
  @media (min-width: 768px) {
    width: 296px;
    height: 227px;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    height: 227px;
    object-fit: cover;
  }
`;

const ImageDiv = styled.div`
  @media (min-width: 768px) {
    width: 296px;
    height: 227px;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    height: 227px;
    object-fit: cover;
  }
`;
