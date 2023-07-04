import HowItWorksWrapper from "../../general/HowItWorksWrapper";
import logo from "../../../assets/iinima.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { Button } from "../../general/Button";
import divider from "../../../assets/divider.svg";
import CategoryCard from "./CategoryCard";
import { categories } from "../../../settings/constants";

const Home = () => {
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
            <InnerHeading className='flex flex-col lg:flex-row'>
              <p className='font-bold text-7xl text-black mr-5'>Rent</p>
              <Words className=''>
                <MarkText className='font-bold text-7xl'>Anything</MarkText>
                <MarkText className='font-bold text-7xl'>Tools</MarkText>
                <MarkText className='font-bold text-7xl'>Furniture</MarkText>
                <MarkText className='font-bold text-7xl'>Clothing</MarkText>
                <MarkText className='font-bold text-7xl'>Electronics</MarkText>
                <MarkText className='font-bold text-7xl'>Anything</MarkText>
              </Words>
            </InnerHeading>

            <div className='font-bold text-7xl text-black whitespace-pre-line w-3/4'>
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
          <div className='font-bold text-5xl text-black mb-20 text-center'>
            <h1>Explore our categories</h1>
          </div>
          <ul className='grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 items-center'>
            {categories.map((category, i) => (
              <Link to={"/item/browse"} key={i}>
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

const MarkText = styled.span`
  background-color: transparent;
  border: none;
  height: 100%;
  color: #c13327;
  display: block;
  animation: spin_words 16s 1s ease infinite;
  @keyframes spin_words {
    10% {
      transform: translateY(-100%);
    }
    20% {
      transform: translateY(-100%);
    }
    30% {
      transform: translateY(-200%);
    }
    40% {
      transform: translateY(-200%);
    }
    50% {
      transform: translateY(-300%);
    }
    60% {
      transform: translateY(-300%);
    }
    70% {
      transform: translateY(-400%);
    }
    80% {
      transform: translateY(-400%);
    }
    90% {
      transform: translateY(-500%);
    }
    100% {
      transform: translateY(-500%);
    }
  }
`;

const CardList = styled.li`
  &:hover {
    scale: 1.1;
    transition-duration: 900ms;
  }
`;

const InnerHeading = styled.div`
  box-sizing: box-border;
  display: flex;
`;

const Words = styled.div`
  overflow: hidden;
  height: 85px;
`;
