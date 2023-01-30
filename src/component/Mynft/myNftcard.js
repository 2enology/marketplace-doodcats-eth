import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import config from "../../config/config";

const MyNftCard = ({ nftid, image, type, contractAddress }) => {
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
        to={`/mynft/` + type + "/" + contractAddress + `/` + nftid}
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
                            md:text-lg text-left text-sm text-ternary-dark">
              {contractAddress === config.SPACEKITTYADDRESS
                ? "SpaceKitty"
                : contractAddress === config.SPACEOWLSADDRESS
                ? "SpaceOwls"
                : contractAddress === config.DRAGONDOODLEADDRESS
                ? "Dragon Doodles"
                : contractAddress === config.DOODNFTADDRESS
                ? "Doodcats"
                : contractAddress === config.DEDNFTADDRESS
                ? "DedDoods"
                : contractAddress === config.ROYALRATSADDRESS
                ? "Royal Rats"
                : contractAddress === config.CLASSICALCATSADDRESS
                ? "The Classical Cats"
                : contractAddress === config.ANCIENTALIENSADDRESS
                ? "The Ancient Aliens"
                : contractAddress === config.ELEMENTCATSADDRESS
                ? "ElementCats"
                : contractAddress === config.ELEMENTOWLSADDRESS
                ? "ElementOwls"
                : contractAddress === config.ELEMENTDOGSADDRESS
                ? "ElementDogs"
                : contractAddress === config.ELEMENTOCTOPUSADDRESS
                ? "ElementOctopus"
                : contractAddress === config.QAFADDRESS
                ? "QAF"
                : contractAddress === config.SGBWHALEV1ADDRESS
                ? "SGBWhales V1"
                : contractAddress === config.SGBWHALEV2ADDRESS
                ? "SGBWhales V2"
                : contractAddress === config.SGBTURTLEADDRESS
                ? "SGBTurtle"
                : contractAddress === config.GANGSTERSEALADDRESS
                ? "Gangster Seals"
                : contractAddress === config.GANGSTEROCTOPUSADDRESS
                ? "Gangster Octopuses"
                : "Bad Buddies"}{" "}
              # {nftid}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default MyNftCard;
