import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

const HowItWorksWrapper = ({ children }: any) => {
  return (
    <div className='flex flex-col min-h-screen max-h-full justify-between bg-white pt-0 ml-0 mr-0'>
      <NavigationBar />
      <div className='mb-0 container mx-auto pt-0 bg-white max-w-full'>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorksWrapper;
