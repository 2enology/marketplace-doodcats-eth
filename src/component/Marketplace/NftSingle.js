import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import config from "../../config/config";

const NftSingle = ({
  title,
  price,
  image,
  priceAsset,
  tokenId,
  contractAddress,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}>
      <Link
        to={`/buy/` + contractAddress + `/` + tokenId}
        aria-label="Single Project">
        <div
          className="bg-secondary-light cursor-pointer dark:bg-ternary-dark
                        hover:shadow-xl mb-10 rounded-xl shadow-lg sm:mb-0 m-1">
          <div>
            <img
              src={image}
              className="2xl:h-72 h-36 lg:h-44 md:h-48 object-cover rounded-t-xl sm:h-62 w-full xl:h-56"
              alt="Single Project"
            />
          </div>
          <div className="px-4 py-2">
            <p
              className="dark:text-white font-bold font-general-medium mb-2
                            md:text-sm text-left text-sm text-ternary-dark">
              {title}
            </p>
            <span className="dark:text-white font-bold text- text-left text-ternary-dark">
              Price : {price}{" "}
              {priceAsset === config.SDOODTOKENADDRESS
                ? " sDOOD"
                : priceAsset === config.CARETOKENADDRESS
                ? " CARE"
                : priceAsset === config.COOTIECOINADDRESS
                ? "CootieCoin"
                : priceAsset === config.OCNTOKENADDRESS
                ? " OCN"
                : " SGB"}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default NftSingle;
