import { motion } from "framer-motion";

const NftBanner = ({ bannerimage, nftimg, nftname, contractAddress }) => {
  return (
    <>
      <div className="w-full">
        <img
          src={bannerimage}
          alt=""
          className="h-60 object-cover sm:max-h-72 w-full"
        />
      </div>
      <div className="-mt-14 flex flex-col items-center justify-center">
        <img
          src={nftimg}
          alt=""
          className="border-4 border-gray-200 dark:border-gray-700 h-24 object-cover rounded-full sm:max-h-24 sm:w-24 w-24"
        />
      </div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.9,
          delay: 0.1,
        }}
        className="font-general-regular 
                      text-center text-ternary-dark
                      dark:text-white
                      text-xl
                      sm:text-3xl
                      pt-3
                      font-bold
                      ">
        {nftname}
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.9,
          delay: 0.1,
        }}
        className="font-general-regular 
                      text-center text-blue-500
                      dark:text-blue-500
                      dark:hover:text-blue-300
                      text-sm
                      sm:text-sm
                      pt-3
                      font-bold
                      ">
        <a
          href={
            "https://songbird-explorer.flare.network/address/" +
            contractAddress +
            "/token-transfers"
          }
          target="_blank"
          rel="noreferrer">
          {contractAddress.slice(0, 4)} ..... {contractAddress.slice(-4)}
        </a>
      </motion.h1>
    </>
  );
};

export default NftBanner;
