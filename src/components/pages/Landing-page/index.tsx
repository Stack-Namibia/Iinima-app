import HowItWorksWrapper from "../../general/HowItWorksWrapper";
import logo from "../../../assets/iinima.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { Button } from "../../general/Button";
import divider from "../../../assets/divider.svg";
import CategoryCard from "./CategoryCard";

const Home = () => {
  const categories = [
    {
      name: "Photography",
      imageUrl: "photography",
    },
    {
      name: "Camping",
      imageUrl: "camping",
    },
    {
      name: "Dj Equipment",
      imageUrl: "dj",
    },
    {
      name: "Transport",
      imageUrl: "transport",
    },
    {
      name: "Electronics",
      imageUrl: "electronics",
    },
    {
      name: "Music",
      imageUrl: "music",
    },
    {
      name: "Power Tools",
      imageUrl: "powertools",
    },
    {
      name: "Construction",
      imageUrl: "construction",
    },
    {
      name: "Construction",
      imageUrl: "construction",
    },
    {
      name: "Construction",
      imageUrl: "construction",
    },
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
      <header
        className='header'
        style={{
          backgroundImage: `url(${divider})`,
        }}
      >
        <div className='text-box'>
          <h1 className='heading-primary'>
            <span className='font-bold  text-2xl text-black'>Save money</span>
            <span className='heading-primary-sub text-black'>
              Search for something you need and rent it for some day!
            </span>
          </h1>
          <Link to='/item/browse'>
            <Button text='Browse Items' />
          </Link>
        </div>
      </header>
      <div className='hero min-h-[50%] mb-10 mt-10'>
        <div className='flex-col justify-center max-w-full  rounded-lg mb-5 md:flex md:items-center mr-4 ml-4'>
          <div className='font-bold text-5xl text-black mb-20 text-left'>
            <h1>Explore our categories</h1>
          </div>
          <ul className='grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
            {categories.map((category) => (
              <Link to={"/item/browse"}>
                <CardList>
                  <CategoryCard {...category} />
                </CardList>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </HowItWorksWrapper>
  );
};

export default Home;

const MarkText = styled.mark`
  background-color: transparent;
  border: none;
  color: #c13327;
`;

const CardList = styled.li`
  &:hover {
    scale: 1.1;
    transition-duration: 900ms;
  }
`;
