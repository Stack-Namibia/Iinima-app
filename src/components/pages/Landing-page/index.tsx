import ApplicationWrapper from "../../general/ApplicationWrapper";
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
    <ApplicationWrapper>
      <div className='flex-row justify-center max-w-full bg-white rounded-lg mb-5 md:flex md:items-center mr-4 ml-4'>
        <div className='py-12'>
          <div className='hero-content flex-col lg:flex-row-reverse'>
            <img
              src={logo}
              className='hidden max-w-sm rounded-lg lg:block'
              alt='img '
            />
            <div className='flex flex-col justify-center mt-10 w-full'>
              <h1 className='font-bold text-7xl text-black'>
                Rent <MarkText>Anything</MarkText>
              </h1>
              <div
                className='font-bold text-7xl text-black whitespace-pre-line w-3/4 mt-3
               '
              >
                From within your area
              </div>
              <div className='flex flex-col items-center mt-10 lg:flex-row'>
                <div className='flex space-x-1 block w-full px-4 py-2 bg-white border rounded-full focus:border-purple-400 drop-shadow-2xl'>
                  <input
                    type='text'
                    className='w-full text-center focus:ring-transparent focus:outline-none bg-transparent text-black'
                    placeholder='Search...'
                  />
                  <SearchButton className='btn gap-2 bg-primary rounded-[180px] border-none text-white'>
                    search
                  </SearchButton>
                </div>
                <Link to={"/item/browse"}>
                  <SearchButton className='btn bg-primary rounded-[180px] border-none text-white ml-5 mt-5 lg:mt-0 drop-shadow-2xl text-sm'>
                    Browse Items
                  </SearchButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex-col justify-center max-w-full bg-white rounded-lg mb-5 md:flex md:items-center mr-4 ml-4'>
        <Seperator className='w-full border-t border-gray-300 mb-5 lg:w-screen'>
          <div className='m-5 text-center'>
            <h1 className='mb-4 text-black'>Looking for something?</h1>
            <BrowseItemButton className='btn bg-white rounded-[180px] border-none text-white lg:mt-0 drop-shadow-2xl text-sm mb-5 hover:text-white'>
              Browse
            </BrowseItemButton>
          </div>
        </Seperator>
        <div className='font-bold text-3xl text-black mb-5 text-left'>
          <h1>Categories</h1>
        </div>
        <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cursor-pointer'>
          {categories.map((category) => (
            <li
              key={category.name}
              className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow'
            >
              <ImageDiv className='flex flex-1 flex-col'>
                <Image className='rounded-lg' src={category.imageUrl} alt='' />
                <h3 className='font-bold text-2xl mt-6 text-sm font-medium text-gray-900 text-center mb-5'>
                  {category.name}
                </h3>
              </ImageDiv>
            </li>
          ))}
        </ul>
      </div>
    </ApplicationWrapper>
  );
};

export default Home;

const SearchButton = styled.button`
  background-color: #c13327;
  border: none;
  color: white;
  text-align: center;
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
