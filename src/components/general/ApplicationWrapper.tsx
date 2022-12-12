import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import { motion } from "framer-motion";

const ApplicationWrapper = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      exit={{ opacity: 0 }}
      className='flex flex-col min-h-screen max-h-full justify-between bg-white'
    >
      <NavigationBar />
      <div className='mb-auto container mx-auto pt-5 bg-white'>{children}</div>
      <Footer />
    </motion.div>
  );
};

export default ApplicationWrapper;
