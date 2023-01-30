import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";

import { MetroSpinner } from "react-spinners-kit";

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import NftBanner from "./nftBanner";
import MyNftCard from "./myNftcard";

import config from "../../config/config";

import spaceowls_banner from "../../assets/images/nftbanners/spaceowls_banner.png";
import dragondoodle_banner from "../../assets/images/nftbanners/dragondoodle_banner.png";
import doodcats_banner from "../../assets/images/nftbanners/doodcats_banner.png";
import deddoods_banner from "../../assets/images/nftbanners/deddoods_banner.png";
import royalrats_banner from "../../assets/images/nftbanners/royalrats_banner.png";
import classicalcats_banner from "../../assets/images/nftbanners/classicalcats_banner.png";
import ancientaliens_banner from "../../assets/images/nftbanners/ancientaliens_banner.png";
import elementdogs_banner from "../../assets/images/nftbanners/elementdogs_banner.png";
import badbuddies_banner from "../../assets/images/nftbanners/badbuddies_banner.png";
import not_banner from "../../assets/images/nftbanners/no_bannder.jpg";
import sgb_banner from "../../assets/images/nftbanners/sgbWheel_banner.png";
import gangsters_banner from "../../assets/images/nftbanners/gangster_banner.png";

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
import primordialplanet_nft from "../../assets/images/nftimgs/primordialplanet_nft.png";
import badbuddies_nft from "../../assets/images/nftimgs/badbuddies_nft.png";
import badbuddies2_nft from "../../assets/images/nftimgs/badbuddies2_nft.png";
import badbuddies3_nft from "../../assets/images/nftimgs/badbuddies3_nft.png";
import sgbWhalesV1_nft from "../../assets/images/nftimgs/sgbWhalesV1.png";
import sgbWhalesV2_nft from "../../assets/images/nftimgs/sgbWhalesV2.png";
import sgbTurtle_nft from "../../assets/images/nftimgs/sgbTurtle.png";
import gangsteSeal_nft from "../../assets/images/nftimgs/gangsterSeal.png";
import gangsterOctopus_nft from "../../assets/images/nftimgs/gangsterOctopus.png";

import SPACEKITTYABI from "../../assets/abi/spacekittynftABI.json";
import SPACEOWLABI from "../../assets/abi/spaceowlnftABI.json";
import DOODCATNFTABI from "../../assets/abi/doodcatnftABI.json";
import DEDDOODNFTABI from "../../assets/abi/deddoodnftABI.json";
import DRAGONDOODLEABI from "../../assets/abi/dragondoodlenftABI.json";
import ELEMENTOWLSABI from "../../assets/abi/elementowlsnftABI.json";
import ELEMENTDOGSABI from "../../assets/abi/elementdogsnftABI.json";
import ELEMENTOCTOPUSABI from "../../assets/abi/elementoctupusnftABI.json";
import QAFABI from "../../assets/abi/qafnftABI.json";
import ROYALRATSABI from "../../assets/abi/royalratsnftABI.json";
import CLASSICALCATSABI from "../../assets/abi/classicalcatsnftABI.json";
import ALIENSABI from "../../assets/abi/aliensnftABI.json";
import PLANETOIDSABI from "../../assets/abi/planetsnftABI.json";
import SGBWHALEV1ABI from "../../assets/abi/sgbWhalev1ABI.json";
import SGBWHALEV2ABI from "../../assets/abi/sgbWhalev2ABI.json";
import SGBTURTLEABI from "../../assets/abi/sgbTurtleABI.json";
import GANGSTERSEALABI from "../../assets/abi/gangsterSealABI.json";
import GANGSTEROCTOPUSABI from "../../assets/abi/gangsterOctopusABI.json";

import MARKETPLACEABI from "../../assets/abi/marketplaceABI.json";

const ethers = require("ethers");

const Mynft = () => {
  let { contractAddress } = useParams();
  const { account } = useWeb3React();

  const [nftArray, setNftArray] = useState([]);
  const [listedNftArray, setListedNftArray] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  const Provider = new ethers.providers.Web3Provider(window.ethereum);
  const Signer = Provider.getSigner();

  const marketPlaceContract = new ethers.Contract(
    config.MARKETPLACEADDRESS,
    MARKETPLACEABI,
    Signer
  );

  const getListedItem = async () => {
    let array = [];
    await marketPlaceContract.fetchMarketItems().then(async (data) => {
      for (let i = 0; i < data.length; i++) {
        if (
          account === data[i].seller &&
          contractAddress === data[i].nftContract
        ) {
          array.push({
            imgUrl:
              contractAddress === config.SPACEKITTYADDRESS
                ? `${config.SPACEKITTYIMGIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.png`
                : contractAddress === config.SPACEOWLSADDRESS
                ? `${config.SPACEOWLIMGIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.png`
                : contractAddress === config.DRAGONDOODLEADDRESS
                ? `${config.DRAGONDOODLEIMGIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.png`
                : contractAddress === config.DOODNFTADDRESS
                ? `${config.DOODCATIMGIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.png`
                : contractAddress === config.DEDNFTADDRESS
                ? `${config.DEDDOODIMGIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.png`
                : contractAddress === config.ELEMENTOWLSADDRESS
                ? `${config.ELEMENTOWLSIMGIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.png`
                : contractAddress === config.ELEMENTDOGSADDRESS
                ? `${config.ELEMENTDOGSIMGIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.png`
                : contractAddress === config.ELEMENTOCTOPUSADDRESS
                ? `${config.ELEMENTOCTOPUSIMGIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.png`
                : contractAddress === config.QAFADDRESS
                ? `${config.QAFIMGIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.jpg`
                : contractAddress === config.ROYALRATSADDRESS
                ? `${config.ROYALRATSIMGIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.jpg`
                : contractAddress === config.CLASSICALCATSADDRESS
                ? `${config.CLASSICALCATSIMGIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.jpg`
                : contractAddress === config.ANCIENTALIENSADDRESS
                ? `${config.ANCIENTALIENSIMGIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.jpg`
                : contractAddress === config.PRIMORDIALPLANETOIDSADDRESS
                ? `${config.PLANETOIDSIMGIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.png`
                : contractAddress === config.BADBUDDIESADDRESS
                ? `${config.BADBUDDIESIMGIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.png`
                : contractAddress === config.BADBUDDIES3ADDRESS
                ? `${config.BADBUDDIES3IMGIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.png`
                : contractAddress === config.SGBWHALEV1ADDRESS
                ? `${config.SGBWHALEV1IMGIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.jpg`
                : contractAddress === config.SGBWHALEV2ADDRESS
                ? `${config.SGBWHALEV2IMGIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.png`
                : contractAddress === config.SGBTURTLEADDRESS
                ? `${config.SGBTURTLEIPFSIMGADDRESS}/${data[
                    i
                  ].tokenId.toString()}.png`
                : contractAddress === config.GANGSTERSEALADDRESS
                ? `${config.GANGSTERSEALIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.png`
                : contractAddress === config.GANGSTEROCTOPUSADDRESS
                ? `${config.GANGSTEROCTOPUSIMGIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.png`
                : `${config.BADBUDDIES2IMGIPFSADDRESS}/${data[
                    i
                  ].tokenId.toString()}.png`,
            tokenID: Number(data[i].tokenId).toString(),
          });
        }
      }
      setListedNftArray(array);
      setLoadingState(false);
    });
  };

  const getNftData = async () => {
    let Array = [];

    const nftContract = new ethers.Contract(
      contractAddress,
      contractAddress === config.SPACEKITTYADDRESS
        ? SPACEKITTYABI
        : contractAddress === config.SPACEOWLSADDRESS
        ? SPACEOWLABI
        : contractAddress === config.DRAGONDOODLEADDRESS
        ? DRAGONDOODLEABI
        : contractAddress === config.DOODNFTADDRESS
        ? DOODCATNFTABI
        : contractAddress === config.DEDNFTADDRESS
        ? DEDDOODNFTABI
        : contractAddress === config.DRAGONDOODLEADDRESS
        ? DRAGONDOODLEABI
        : contractAddress === config.ELEMENTOWLSADDRESS
        ? ELEMENTOWLSABI
        : contractAddress === config.ELEMENTDOGSADDRESS
        ? ELEMENTDOGSABI
        : contractAddress === config.ELEMENTOCTOPUSADDRESS
        ? ELEMENTOCTOPUSABI
        : contractAddress === config.QAFADDRESS
        ? QAFABI
        : contractAddress === config.ROYALRATSADDRESS
        ? ROYALRATSABI
        : contractAddress === config.CLASSICALCATSADDRESS
        ? CLASSICALCATSABI
        : contractAddress === config.ANCIENTALIENSADDRESS
        ? ALIENSABI
        : contractAddress === config.PRIMORDIALPLANETOIDSADDRESS
        ? PLANETOIDSABI
        : contractAddress === config.BADBUDDIESADDRESS
        ? SPACEKITTYABI
        : contractAddress === config.BADBUDDIES3ADDRESS
        ? SPACEKITTYABI
        : contractAddress === config.SGBWHALEV1ADDRESS
        ? SGBWHALEV1ABI
        : contractAddress === config.SGBWHALEV2ADDRESS
        ? SGBWHALEV2ABI
        : contractAddress === config.SGBTURTLEADDRESS
        ? SGBTURTLEABI
        : contractAddress === config.GANGSTERSEALADDRESS
        ? GANGSTERSEALABI
        : contractAddress === config.GANGSTEROCTOPUSADDRESS
        ? GANGSTEROCTOPUSABI
        : SPACEKITTYABI,
      Signer
    );

    await nftContract.walletOfOwner(account).then(async (data) => {
      for (let i = 0; i < data.length; i++) {
        Array.push({
          imgUrl:
            contractAddress === config.SPACEKITTYADDRESS
              ? `${config.SPACEKITTYIMGIPFSADDRESS}/${data[i].toString()}.png`
              : contractAddress === config.SPACEOWLSADDRESS
              ? `${config.SPACEOWLIMGIPFSADDRESS}/${data[i].toString()}.png`
              : contractAddress === config.DRAGONDOODLEADDRESS
              ? `${config.DRAGONDOODLEIMGIPFSADDRESS}/${data[i].toString()}.png`
              : contractAddress === config.DOODNFTADDRESS
              ? `${config.DOODCATIMGIPFSADDRESS}/${data[i].toString()}.png`
              : contractAddress === config.DEDNFTADDRESS
              ? `${config.DEDDOODIMGIPFSADDRESS}/${data[i].toString()}.png`
              : contractAddress === config.ELEMENTOWLSADDRESS
              ? `${config.ELEMENTOWLSIMGIPFSADDRESS}/${data[i].toString()}.png`
              : contractAddress === config.ELEMENTDOGSADDRESS
              ? `${config.ELEMENTDOGSIMGIPFSADDRESS}/${data[i].toString()}.png`
              : contractAddress === config.ELEMENTOCTOPUSADDRESS
              ? `${config.ELEMENTOCTOPUSIMGIPFSADDRESS}/${data[
                  i
                ].toString()}.png`
              : contractAddress === config.QAFADDRESS
              ? `${config.QAFIMGIPFSADDRESS}/${data[i].toString()}.jpg`
              : contractAddress === config.ROYALRATSADDRESS
              ? `${config.ROYALRATSIMGIPFSADDRESS}/${data[i].toString()}.jpg`
              : contractAddress === config.CLASSICALCATSADDRESS
              ? `${config.CLASSICALCATSIMGIPFSADDRESS}/${data[
                  i
                ].toString()}.jpg`
              : contractAddress === config.ANCIENTALIENSADDRESS
              ? `${config.ANCIENTALIENSIMGIPFSADDRESS}/${data[
                  i
                ].toString()}.jpg`
              : contractAddress === config.PRIMORDIALPLANETOIDSADDRESS
              ? `${config.PLANETOIDSIMGIPFSADDRESS}/${data[i].toString()}.png`
              : contractAddress === config.BADBUDDIESADDRESS
              ? `${config.BADBUDDIESIMGIPFSADDRESS}/${data[i].toString()}.png`
              : contractAddress === config.BADBUDDIES3ADDRESS
              ? `${config.BADBUDDIES3IMGIPFSADDRESS}/${data[i].toString()}.png`
              : contractAddress === config.SGBWHALEV1ADDRESS
              ? `${config.SGBWHALEV1IMGIPFSADDRESS}/${data[i].toString()}.jpg`
              : contractAddress === config.SGBWHALEV2ADDRESS
              ? `${config.SGBWHALEV2IMGIPFSADDRESS}/${data[i].toString()}.png`
              : contractAddress === config.SGBTURTLEADDRESS
              ? `${config.SGBTURTLEIPFSIMGADDRESS}/${data[i].toString()}.png`
              : contractAddress === config.GANGSTERSEALADDRESS
              ? `${config.GANGSTERSEALIPFSADDRESS}/${data[i].toString()}.png`
              : contractAddress === config.GANGSTEROCTOPUSADDRESS
              ? `${config.GANGSTEROCTOPUSIMGIPFSADDRESS}/${data[
                  i
                ].toString()}.png`
              : `${config.BADBUDDIES2IMGIPFSADDRESS}/${data[i].toString()}.png`,
          tokenID: Number(data[i]).toString(),
          ipfs: config.SPACEOWLIMGIPFS,
        });
      }
      setNftArray(Array);
      setLoadingState(false);
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    window.scroll(0, 0);
    account && (await getNftData());
    getListedItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, contractAddress]);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="flex flex-col items-center md:mt-2
                  mt-5 mx-auto sm:flex-row sm:justify-between
                  ">
        <div className="flex flex-col items-center justify-center relative w-full">
          {contractAddress === config.SPACEKITTYADDRESS ? (
            <NftBanner
              bannerimage={not_banner}
              nftimg={spacekitty_nft}
              nftname="SpaceKitty"
              contractAddress={config.SPACEKITTYADDRESS}
            />
          ) : contractAddress === config.SPACEOWLSADDRESS ? (
            <NftBanner
              bannerimage={spaceowls_banner}
              nftimg={spaceowl_nft}
              nftname="SpaceOwls"
              contractAddress={config.SPACEOWLSADDRESS}
            />
          ) : contractAddress === config.DRAGONDOODLEADDRESS ? (
            <NftBanner
              bannerimage={dragondoodle_banner}
              nftimg={dragondoodle_nft}
              nftname="Dragon Doodles"
              contractAddress={config.DRAGONDOODLEADDRESS}
            />
          ) : contractAddress === config.DOODNFTADDRESS ? (
            <NftBanner
              bannerimage={doodcats_banner}
              nftimg={doodcat_nft}
              nftname="Doodcats"
              contractAddress={config.DOODNFTADDRESS}
            />
          ) : contractAddress === config.DEDNFTADDRESS ? (
            <NftBanner
              bannerimage={deddoods_banner}
              nftimg={deddood_nft}
              nftname="Deddoods"
              contractAddress={config.DEDNFTADDRESS}
            />
          ) : contractAddress === config.ROYALRATSADDRESS ? (
            <NftBanner
              bannerimage={royalrats_banner}
              nftimg={royalrat_nft}
              nftname="Royal Rats"
              contractAddress={config.ROYALRATSADDRESS}
            />
          ) : contractAddress === config.CLASSICALCATSADDRESS ? (
            <NftBanner
              bannerimage={classicalcats_banner}
              nftimg={classicalcat_nft}
              nftname="Classical Cats"
              contractAddress={config.CLASSICALCATSADDRESS}
            />
          ) : contractAddress === config.ANCIENTALIENSADDRESS ? (
            <NftBanner
              bannerimage={ancientaliens_banner}
              nftimg={alien_nft}
              nftname="The Acient Aliens"
              contractAddress={config.ANCIENTALIENSADDRESS}
            />
          ) : contractAddress === config.ELEMENTOWLSADDRESS ? (
            <NftBanner
              bannerimage={not_banner}
              nftimg={elementowl_nft}
              nftname="ElementOwl"
              contractAddress={config.ELEMENTOWLSADDRESS}
            />
          ) : contractAddress === config.ELEMENTDOGSADDRESS ? (
            <NftBanner
              bannerimage={elementdogs_banner}
              nftimg={elementdog_nft}
              nftname="ElementDogs"
              contractAddress={config.ELEMENTDOGSADDRESS}
            />
          ) : contractAddress === config.ELEMENTOCTOPUSADDRESS ? (
            <NftBanner
              bannerimage={not_banner}
              nftimg={elementoctopus_nft}
              nftname="ElementOctopus"
              contractAddress={config.ELEMENTOCTOPUSADDRESS}
            />
          ) : contractAddress === config.QAFADDRESS ? (
            <NftBanner
              bannerimage={not_banner}
              nftimg={qaf_nft}
              nftname="QAF"
              contractAddress={config.QAFADDRESS}
            />
          ) : contractAddress === config.BADBUDDIES2ADDRESS ? (
            <NftBanner
              bannerimage={badbuddies_banner}
              nftimg={badbuddies2_nft}
              nftname="Bad Buddies2"
              contractAddress={config.BADBUDDIES2ADDRESS}
            />
          ) : contractAddress === config.BADBUDDIESADDRESS ? (
            <NftBanner
              bannerimage={badbuddies_banner}
              nftimg={badbuddies_nft}
              nftname="Bad Buddies"
              contractAddress={config.BADBUDDIESADDRESS}
            />
          ) : contractAddress === config.BADBUDDIES3ADDRESS ? (
            <NftBanner
              bannerimage={badbuddies_banner}
              nftimg={badbuddies3_nft}
              nftname="Bad Buddies3"
              contractAddress={config.BADBUDDIES3ADDRESS}
            />
          ) : contractAddress === config.SGBWHALEV1ADDRESS ? (
            <NftBanner
              bannerimage={sgb_banner}
              nftimg={sgbWhalesV1_nft}
              nftname="SGBWhales v1"
              contractAddress={config.SGBWHALEV1ADDRESS}
            />
          ) : contractAddress === config.SGBWHALEV2ADDRESS ? (
            <NftBanner
              bannerimage={sgb_banner}
              nftimg={sgbWhalesV2_nft}
              nftname="SGBWhales V2"
              contractAddress={config.SGBWHALEV2ADDRESS}
            />
          ) : contractAddress === config.SGBTURTLEADDRESS ? (
            <NftBanner
              bannerimage={sgb_banner}
              nftimg={sgbTurtle_nft}
              nftname="SGBTurtles"
              contractAddress={config.SGBTURTLEADDRESS}
            />
          ) : contractAddress === config.GANGSTERSEALADDRESS ? (
            <NftBanner
              bannerimage={gangsters_banner}
              nftimg={gangsteSeal_nft}
              nftname="Gangster Seals"
              contractAddress={config.GANGSTERSEALADDRESS}
            />
          ) : contractAddress === config.GANGSTEROCTOPUSADDRESS ? (
            <NftBanner
              bannerimage={gangsters_banner}
              nftimg={gangsterOctopus_nft}
              nftname="Gangster Octopuses"
              contractAddress={config.GANGSTEROCTOPUSADDRESS}
            />
          ) : (
            <NftBanner
              bannerimage={badbuddies_banner}
              nftimg={primordialplanet_nft}
              nftname="The Primordial Planetoids"
              contractAddress={config.PRIMORDIALPLANETOIDSADDRESS}
            />
          )}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-regular 
                      text-left text-ternary-dark
                      dark:text-white
                      text-sm
                      sm:text-2xl
                      pt-20
                      pb-5
                      sm:pb-10
                      font-bold
                      border-b
                      border-gray-100
                      dark:border-gray-700
                      ">
          My UnListed Items
        </motion.h1>
        {account ? (
          <>
            {loadingState ? (
              <div className="flex justify-center mt-10 w-full">
                <MetroSpinner color="#00ff89" />
              </div>
            ) : (
              <>
                {nftArray.length !== 0 ? (
                  <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mt-6 p-3 sm:gap-10 sm:grid-cols-3">
                    {nftArray.map((nft, index) => (
                      <MyNftCard
                        key={index}
                        nftid={nft.tokenID}
                        nftName={contractAddress}
                        contractAddress={contractAddress}
                        image={nft.imgUrl}
                        type="sell"
                      />
                    ))}
                  </div>
                ) : (
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
                      text-xs
                      sm:text-xs
                      pt-5
                      sm:pt-20
                      font-bold
                      ">
                    Nothing to show...
                  </motion.h1>
                )}
              </>
            )}
          </>
        ) : (
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
                      text-xs
                      sm:text-xs
                      pt-20
                      font-bold
                      ">
            Please Connect Wallet...
          </motion.h1>
        )}
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-regular 
                      text-left text-ternary-dark
                      dark:text-white
                      text-sm
                      sm:text-2xl
                      pt-20
                      pb-5
                      sm:pb-10
                      font-bold
                      border-b
                      border-gray-100
                      dark:border-gray-700
                      ">
          Listed Items
        </motion.h1>
        {account ? (
          <>
            {loadingState ? (
              <div className="flex justify-center mt-10 w-full">
                <MetroSpinner color="#00ff89" />
              </div>
            ) : (
              <>
                {listedNftArray.length !== 0 ? (
                  <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mt-6 p-3 sm:gap-10 sm:grid-cols-3">
                    {listedNftArray.map((nft, index) => (
                      <MyNftCard
                        key={index}
                        nftid={nft.tokenID}
                        nftName={contractAddress}
                        contractAddress={contractAddress}
                        image={nft.imgUrl}
                        type="listed"
                      />
                    ))}
                  </div>
                ) : (
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
                      text-xs
                      sm:text-xs
                      pt-20
                      font-bold
                      ">
                    Nothing to show...
                  </motion.h1>
                )}
              </>
            )}
          </>
        ) : (
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
                      text-xs
                      sm:text-xs
                      pt-20
                      font-bold
                      ">
            Please Connect Wallet...
          </motion.h1>
        )}
      </motion.section>
    </>
  );
};

export default Mynft;
