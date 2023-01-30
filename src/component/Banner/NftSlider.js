import { motion } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import spacekitty_nft from "../../assets/images/nftimgs/spacekitty_nft.png";
import spaceowl_nft from "../../assets/images/nftimgs/spaceowl_nft.png";
import dragondoodle_nft from "../../assets/images/nftimgs/dragondoodle_nft.png";
import doodcat_nft from "../../assets/images/nftimgs/doodcat_nft.png";
import deddood_nft from "../../assets/images/nftimgs/deddood_nft.png";
import royalrat_nft from "../../assets/images/nftimgs/royalrat_nft.png";
import classicalcat_nft from "../../assets/images/nftimgs/classicalcat_nft.png";
import alien_nft from "../../assets/images/nftimgs/alien_nft.png";
import elementowl_nft from "../../assets/images/nftimgs/elementowl_nft.png";
import elementdog_nft from "../../assets/images/nftimgs/elementdog_nft.png";
import elementoctopus_nft from "../../assets/images/nftimgs/elementoctopus_nft.png";
import qaf_nft from "../../assets/images/nftimgs/qaf_nft.png";
import badbuddies_nft from "../../assets/images/nftimgs/badbuddies_nft.mp4";
import badbuddies2_nft from "../../assets/images/nftimgs/badbuddies2_nft.mp4";
import badbuddies3_nft from "../../assets/images/nftimgs/badbuddies3_nft.mp4";
import primordialplanet_nft from "../../assets/images/nftimgs/primordialplanet_nft.png";
import sgbWhalesV1_nft from "../../assets/images/nftimgs/sgbWhalesV1.png";
import sgbWhalesV2_nft from "../../assets/images/nftimgs/sgbWhalesV2.png";
import sgbTurtle_nft from "../../assets/images/nftimgs/sgbTurtle.png";
import gangsteSeal_nft from "../../assets/images/nftimgs/gangsterSeal.png";
import gangsterOctopus_nft from "../../assets/images/nftimgs/gangsterOctopus.png";

const NftSlider = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <>
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
                      text-3xl
                      sm:text-4xl
                      pt-20
                      font-bold
                      ">
        NFT Collections
      </motion.h1>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="flex flex-col items-center md:mt-12 mx-auto sm:flex-row sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className="float-right mt-8 sm:mt-0 sm:w-full text-right w-full">
          <Slider {...settings} className="mx-3 my-10 slider">
            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <img
                    src={spacekitty_nft}
                    alt=""
                    className="2xl:h-290 h-290 lg:h-186 md:h-203 object-cover rounded-t-xl sm:h-4 w-full xl:h-242"
                  />
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  SpaceKitty
                </h1>
              </div>
            </div>
            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <img
                    src={spaceowl_nft}
                    alt=""
                    className="2xl:h-290 h-290 lg:h-186 md:h-203 object-cover rounded-t-xl sm:h-4 w-full xl:h-242"
                  />
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  SpaceOwls
                </h1>
              </div>
            </div>
            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <img
                    src={dragondoodle_nft}
                    alt=""
                    className="2xl:h-290 h-290 lg:h-186 md:h-203 object-cover rounded-t-xl sm:h-4 w-full xl:h-242"
                  />
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  Dragon Doodles
                </h1>
              </div>
            </div>
            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <img
                    src={doodcat_nft}
                    alt=""
                    className="2xl:h-290 h-290 lg:h-186 md:h-203 object-cover rounded-t-xl sm:h-4 w-full xl:h-242"
                  />
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  DoodCats
                </h1>
              </div>
            </div>
            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <img
                    src={deddood_nft}
                    alt=""
                    className="2xl:h-290 h-290 lg:h-186 md:h-203 object-cover rounded-t-xl sm:h-4 w-full xl:h-242"
                  />
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  DedDoods
                </h1>
              </div>
            </div>
            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <img
                    src={elementowl_nft}
                    alt=""
                    className="2xl:h-290 h-290 lg:h-186 md:h-203 object-cover rounded-t-xl sm:h-4 w-full xl:h-242"
                  />
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  ElementOwls
                </h1>
              </div>
            </div>
            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <img
                    src={elementdog_nft}
                    alt=""
                    className="2xl:h-290 h-290 lg:h-186 md:h-203 object-cover rounded-t-xl sm:h-4 w-full xl:h-242"
                  />
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  ElementDogs
                </h1>
              </div>
            </div>
            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <img
                    src={elementoctopus_nft}
                    alt=""
                    className="2xl:h-290 h-290 lg:h-186 md:h-203 object-cover rounded-t-xl sm:h-4 w-full xl:h-242"
                  />
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  ElementOctopus
                </h1>
              </div>
            </div>
            <div className="mb-5 px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <img
                    src={qaf_nft}
                    alt=""
                    className="2xl: 2xl:h-290 h-290 lg:h-186 md:h-203 object-cover rounded-t-xl sm:h-4 w-full xl:h-242"
                  />
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  QAF
                </h1>
              </div>
            </div>
            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <img
                    src={royalrat_nft}
                    alt=""
                    className="2xl:h-290 h-290 lg:h-186 md:h-203 object-cover rounded-t-xl sm:h-4 w-full xl:h-242"
                  />
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  Royal Rats
                </h1>
              </div>
            </div>
            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <img
                    src={classicalcat_nft}
                    alt=""
                    className="2xl:h-290 h-290 lg:h-186 md:h-203 object-cover rounded-t-xl sm:h-4 w-full xl:h-242"
                  />
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  The Classical Cats
                </h1>
              </div>
            </div>
            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <img
                    src={alien_nft}
                    alt=""
                    className="2xl:h-290 h-290 lg:h-186 md:h-203 object-cover rounded-t-xl sm:h-4 w-full xl:h-242"
                  />
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  The Ancient Aliens
                </h1>
              </div>
            </div>

            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <img
                    src={primordialplanet_nft}
                    alt=""
                    className="2xl:h-290 h-290 lg:h-186 md:h-203 object-cover rounded-t-xl sm:h-4 w-full xl:h-242"
                  />
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  The Primordial Planetoids
                </h1>
              </div>
            </div>

            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <video
                    loop={true}
                    autoPlay="autoPlay"
                    muted
                    className="rounded-t-xl">
                    <source src={badbuddies_nft} type="video/mp4" />
                  </video>
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  Bad Buddies
                </h1>
              </div>
            </div>

            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <video
                    loop={true}
                    autoPlay="autoPlay"
                    muted
                    className="rounded-t-xl">
                    <source src={badbuddies2_nft} type="video/mp4" />
                  </video>
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  Bad Buddies2
                </h1>
              </div>
            </div>

            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <video
                    loop={true}
                    autoPlay="autoPlay"
                    muted
                    className="rounded-t-xl">
                    <source src={badbuddies3_nft} type="video/mp4" />
                  </video>
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  Bad Buddies3
                </h1>
              </div>
            </div>

            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <img
                    src={sgbWhalesV1_nft}
                    alt=""
                    className="2xl:h-290 h-290 lg:h-186 md:h-203 object-cover rounded-t-xl sm:h-4 w-full xl:h-242"
                  />
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  SGBWhales V1
                </h1>
              </div>
            </div>

            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <img
                    src={sgbWhalesV2_nft}
                    alt=""
                    className="2xl:h-290 h-290 lg:h-186 md:h-203 object-cover rounded-t-xl sm:h-4 w-full xl:h-242"
                  />
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  SGBWhales V2
                </h1>
              </div>
            </div>

            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <img
                    src={sgbTurtle_nft}
                    alt=""
                    className="2xl:h-290 h-290 lg:h-186 md:h-203 object-cover rounded-t-xl sm:h-4 w-full xl:h-242"
                  />
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  SGBTurtle
                </h1>
              </div>
            </div>

            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <img
                    src={gangsteSeal_nft}
                    alt=""
                    className="2xl:h-290 h-290 lg:h-186 md:h-203 object-cover rounded-t-xl sm:h-4 w-full xl:h-242"
                  />
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  GangsterSeal
                </h1>
              </div>
            </div>

            <div className="px-3">
              <div className="bg-white dark:bg-ternary-dark rounded-xl shadow-lg slider-card">
                <div className="slider-img w-full">
                  <img
                    src={gangsterOctopus_nft}
                    alt=""
                    className="2xl:h-290 h-290 lg:h-186 md:h-203 object-cover rounded-t-xl sm:h-4 w-full xl:h-242"
                  />
                </div>
                <h1 className="dark:text-white font-bold p-3 text-black text-center">
                  GangsterOctopus
                </h1>
              </div>
            </div>
          </Slider>
        </motion.div>
      </motion.section>
    </>
  );
};
export default NftSlider;
