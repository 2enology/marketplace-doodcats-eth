import { motion } from "framer-motion";

import NftSlider from "./NftSlider";
import SellCard from "./SellCard";

import coin from "../../assets/images/coin.png";

import "./banner.css";

const Banner = () => {
  return (
    <div className="">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="flex flex-col items-center md:mt-2
                    mt-12 mx-auto sm:flex-row sm:justify-between
                    border-b
                  dark:border-gray-700
                  border-gray-200
                    p-4
                    ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="dark:text-white font-bold
                        items-center lg:text-xl sm:text-center
                        text-4xl text-center text-ternary-dark
                        uppercase xl:text-5xl welcom-title">
          Welcome Our MarketPlace !<p>Amazing and Beautiful NFTs are here.</p>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className="float-right hidden mt-8 sm:block sm:mt-0 sm:w-1/4 text-right w-full">
          <img src={coin} alt="Developer" className="coin" />
        </motion.div>
      </motion.section>
      <NftSlider />
      <SellCard />
    </div>
  );
};

export default Banner;
