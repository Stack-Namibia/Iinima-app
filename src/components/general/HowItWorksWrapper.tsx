import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import { motion } from "framer-motion";

const HowItWorksWrapper = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      exit={{ opacity: 0 }}
      className='flex flex-col min-h-screen max-h-full justify-between bg-white pt-0 ml-0 mr-0'
    >
      <NavigationBar />
      <div className='mb-0 container mx-auto pt-0 bg-white max-w-full'>
        {children}
      </div>
      <Footer />
    </motion.div>
  );
};

export default HowItWorksWrapper;
