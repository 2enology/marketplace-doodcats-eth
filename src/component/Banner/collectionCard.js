import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CollectionCard = ({ title, count, image, contractAddresss }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}>
      <Link to={`/mynft/` + contractAddresss} aria-label="Single Project">
        <div
          className="bg-secondary-light cursor-pointer dark:bg-ternary-dark
                        hover:shadow-2xl mb-10 rounded-xl shadow-lg sm:mb-0 flex px-2 ">
          <div>
            <img
              src={image}
              className="h-14 my-3 object-cover rounded-full w-14"
              alt="Single Project"
            />
          </div>
          <div className="pt-4 px-4">
            <p
              className="dark:text-white font-bold font-general-medium mb-1
                            md:text-sm text-left text-sm text-ternary-dark">
              {title}
            </p>
            <span className="dark:text-white font-bold text-left text-sm text-ternary-dark">
              {count} NFTs
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CollectionCard;
