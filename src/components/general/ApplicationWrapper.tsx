import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

const ApplicationWrapper = ({ children }: any) => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <NavigationBar />
      <div className='mb-auto container mx-auto pt-5'>{children}</div>
      <Footer />
    </div>
  );
};

export default ApplicationWrapper;
