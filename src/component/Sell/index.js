import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { MetroSpinner } from "react-spinners-kit";
import Card from "./nftCard";
import { Skeleton, notification } from "antd";
import PropertiesCard from "./propertiesCard";
import "antd/dist/antd.min.css";

import config from "../../config/config";

import MARKETPLACEABI from "../../assets/abi/marketplaceABI.json";

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

const ethers = require("ethers");

const Sell = () => {
  let { contractAddress, nftid, type } = useParams();

  const Navigate = useNavigate();

  const Provider = new ethers.providers.Web3Provider(window.ethereum);
  const Signer = Provider.getSigner();

  const marketPlaceContract = new ethers.Contract(
    config.MARKETPLACEADDRESS,
    MARKETPLACEABI,
    Signer
  );

  const [loading, setLoading] = useState(false);
  const [nftName, setNftName] = useState("");
  const [nftMarketItem, setNftMarketItem] = useState("");
  const [nftIPFSAddress, setNftIPFSAddress] = useState("");

  const [tokenValue, setTokenValue] = useState(0);
  const [tokenType, setTokenType] = useState("SGB");

  const [description, setDescription] = useState("");
  const [propertiy, setPropertiy] = useState([]);

  const getNftInfo = async (nftName) => {
    setNftName(nftName);
    setNftIPFSAddress(
      contractAddress === config.SPACEKITTYADDRESS
        ? `${config.SPACEKITTYIMGIPFSADDRESS}/${nftid}.png`
        : contractAddress === config.SPACEOWLSADDRESS
        ? `${config.SPACEOWLIMGIPFSADDRESS}/${nftid}.png`
        : contractAddress === config.DRAGONDOODLEADDRESS
        ? `${config.DRAGONDOODLEIMGIPFSADDRESS}/${nftid}.png`
        : contractAddress === config.DOODNFTADDRESS
        ? `${config.DOODCATIMGIPFSADDRESS}/${nftid}.png`
        : contractAddress === config.DEDNFTADDRESS
        ? `${config.DEDDOODIMGIPFSADDRESS}/${nftid}.png`
        : contractAddress === config.DRAGONDOODLEADDRESS
        ? `${config.DRAGONDOODLEIMGIPFSADDRESS}/${nftid}.png`
        : contractAddress === config.ELEMENTOWLSADDRESS
        ? `${config.ELEMENTOWLSIMGIPFSADDRESS}/${nftid}.png`
        : contractAddress === config.ELEMENTDOGSADDRESS
        ? `${config.ELEMENTDOGSIMGIPFSADDRESS}/${nftid}.png`
        : contractAddress === config.ELEMENTOCTOPUSADDRESS
        ? `${config.ELEMENTOCTOPUSIMGIPFSADDRESS}/${nftid}.png`
        : contractAddress === config.QAFADDRESS
        ? `${config.QAFIMGIPFSADDRESS}/${nftid}.jpg`
        : contractAddress === config.ROYALRATSADDRESS
        ? `${config.ROYALRATSIMGIPFSADDRESS}/${nftid}.jpg`
        : contractAddress === config.CLASSICALCATSADDRESS
        ? `${config.CLASSICALCATSIMGIPFSADDRESS}/${nftid}.jpg`
        : contractAddress === config.ANCIENTALIENSADDRESS
        ? `${config.ANCIENTALIENSIMGIPFSADDRESS}/${nftid}.jpg`
        : contractAddress === config.PRIMORDIALPLANETOIDSADDRESS
        ? `${config.PLANETOIDSIMGIPFSADDRESS}/${nftid}.jpg`
        : contractAddress === config.BADBUDDIESADDRESS
        ? `${config.BADBUDDIESIMGIPFSADDRESS}/${nftid}.png`
        : contractAddress === config.BADBUDDIES3ADDRESS
        ? `${config.BADBUDDIES3IMGIPFSADDRESS}/${nftid}.png`
        : contractAddress === config.SGBWHALEV1ADDRESS
        ? `${config.SGBWHALEV1IMGIPFSADDRESS}/${nftid}.png`
        : contractAddress === config.SGBWHALEV2ADDRESS
        ? `${config.SGBWHALEV2IMGIPFSADDRESS}/${nftid}.png`
        : contractAddress === config.SGBTURTLEADDRESS
        ? `${config.SGBTURTLEIPFSIMGADDRESS}/${nftid}.png`
        : contractAddress === config.GANGSTERSEALADDRESS
        ? `${config.GANGSTERSEALIMGIPFSADDRESS}/${nftid}.png`
        : contractAddress === config.GANGSTEROCTOPUSADDRESS
        ? `${config.GANGSTEROCTOPUSIMGIPFSADDRESS}/${nftid}.png`
        : `${config.BADBUDDIES2IMGIPFSADDRESS}/${nftid}.png`
    );
    await getMarketItem();
    fetchData();
  };

  const getMarketItem = async (id) => {
    await marketPlaceContract.fetchMarketItems().then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (
          data[i].nftContract === contractAddress &&
          data[i].tokenId.toString() === nftid
        ) {
          setNftMarketItem(data[i].itemId.toString());
        }
      }
    });
  };

  const fetchData = async () => {
    let IPFSADDRESS =
      contractAddress === config.SPACEKITTYADDRESS
        ? config.SPACEKITTYIPFSADDRESS
        : contractAddress === config.SPACEOWLSADDRESS
        ? config.SPACEOWLIPFSADDRESS
        : contractAddress === config.DRAGONDOODLEADDRESS
        ? config.DRAGONDOODLEIPFSADDRESS
        : contractAddress === config.DOODNFTADDRESS
        ? config.DOODCATIPFSADDRESS
        : contractAddress === config.DEDNFTADDRESS
        ? config.DEDDOODIPFSADDRESS
        : contractAddress === config.DRAGONDOODLEADDRESS
        ? config.DRAGONDOODLEIPFSADDRESS
        : contractAddress === config.ELEMENTOWLSADDRESS
        ? config.ELEMENTOWLSIPFSADDRESS
        : contractAddress === config.ELEMENTDOGSADDRESS
        ? config.ELEMENTDOGSIPFSADDRESS
        : contractAddress === config.ELEMENTOCTOPUSADDRESS
        ? config.ELEMENTOCTOPUSIPFSADDRESS
        : contractAddress === config.QAFADDRESS
        ? config.QAFIPFSADDRESS
        : contractAddress === config.ROYALRATSADDRESS
        ? config.ROYALRATSIPFSADDRESS
        : contractAddress === config.CLASSICALCATSADDRESS
        ? config.CLASSICALCATSIPFSADDRESS
        : contractAddress === config.ANCIENTALIENSADDRESS
        ? config.ANCIENTALIENSIPFSADDRESS
        : contractAddress === config.PRIMORDIALPLANETOIDSADDRESS
        ? config.PLANETOIDSIPFSADDRESS
        : contractAddress === config.BADBUDDIESADDRESS
        ? config.BADBUDDIESIPFSADDRESS
        : contractAddress === config.BADBUDDIES3ADDRESS
        ? config.BADBUDDIES3IPFSADDRESS
        : contractAddress === config.SGBWHALEV1ADDRESS
        ? config.SGBWHALEV1IPFSADDRESS
        : contractAddress === config.SGBWHALEV2ADDRESS
        ? config.SGBWHALEV2IPFSADDRESS
        : contractAddress === config.SGBTURTLEADDRESS
        ? config.SGBTURTLEIPFSADDRESS
        : contractAddress === config.GANGSTERSEALADDRESS
        ? config.GANGSTERSEALIPFSADDRESS
        : contractAddress === config.GANGSTEROCTOPUSADDRESS
        ? config.GANGSTEROCTOPUSIPFSADDRESS
        : config.BADBUDDIES2IPFSADDRESS;

    try {
      const response = await fetch(IPFSADDRESS + "/" + nftid + `.json`, {
        method: "GET",
      });
      const responsedata = await response.json();

      let propertiyArrary = [];
      for (let i = 0; i < responsedata.attributes.length; i++) {
        propertiyArrary.push({
          trait_type: responsedata.attributes[i].trait_type,
          value: responsedata.attributes[i].value,
        });
      }

      setDescription(responsedata.description);
      setPropertiy(propertiyArrary);
    } catch (error) {
      console.error("Unable to fetch data:", error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    contractAddress === config.SPACEKITTYADDRESS
      ? getNftInfo("SpaceKitty")
      : contractAddress === config.SPACEOWLSADDRESS
      ? getNftInfo("SpaceOwls")
      : contractAddress === config.DRAGONDOODLEADDRESS
      ? getNftInfo("Dragon Doodles")
      : contractAddress === config.DOODNFTADDRESS
      ? getNftInfo("Doodcats", config.DOODCATIPFSADDRESS)
      : contractAddress === config.DEDNFTADDRESS
      ? getNftInfo("DedDoods")
      : contractAddress === config.ROYALRATSADDRESS
      ? getNftInfo("Royal Rats")
      : contractAddress === config.CLASSICALCATSADDRESS
      ? getNftInfo("The Classical Cats")
      : contractAddress === config.ANCIENTALIENSADDRESS
      ? getNftInfo("The Ancient Aliens")
      : contractAddress === config.BADBUDDIES2ADDRESS
      ? getNftInfo("Bad Buddies2")
      : contractAddress === config.ELEMENTOWLSADDRESS
      ? getNftInfo("ElementOwls")
      : contractAddress === config.ELEMENTDOGSADDRESS
      ? getNftInfo("ElementDogs")
      : contractAddress === config.ELEMENTOCTOPUSADDRESS
      ? getNftInfo("ElementOctopus")
      : contractAddress === config.QAFADDRESS
      ? getNftInfo("QAF")
      : contractAddress === config.PRIMORDIALPLANETOIDSADDRESS
      ? getNftInfo("The Primordial Planetoids")
      : contractAddress === config.BADBUDDIES3ADDRESS
      ? getNftInfo("Bad Buddies3")
      : contractAddress === config.SGBWHALEV1ADDRESS
      ? getNftInfo("SGBWhales V1")
      : contractAddress === config.SGBWHALEV2ADDRESS
      ? getNftInfo("SGBWhales V2")
      : contractAddress === config.SGBTURTLEADDRESS
      ? getNftInfo("SGBTurtles")
      : contractAddress === config.GANGSTERSEALADDRESS
      ? getNftInfo("Gangster Seals")
      : contractAddress === config.GANGSTEROCTOPUSADDRESS
      ? getNftInfo("Gangster Octopuses")
      : getNftInfo("Bad Buddies");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sellNFT = async (tokenValue) => {
    let costType;
    tokenType === "SGB" ? (costType = true) : (costType = false);

    if (tokenValue <= 0) {
      notification.warning({
        message: "Warning",
        description: "Please enter the token Value!",
      });
    } else {
      setLoading(true);
      let tokenAmountValue = ethers.utils.parseEther(tokenValue.toString());
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

      await nftContract
        .approve(config.MARKETPLACEADDRESS, nftid)
        .then((tx) => {
          tx.wait().then(async () => {
            marketPlaceContract
              .createMarketItem(
                contractAddress,
                tokenType === "SGB"
                  ? config.MARKETPLACEADDRESS
                  : tokenType === "sDOOD"
                  ? config.SDOODTOKENADDRESS
                  : tokenType === "Care"
                  ? config.CARETOKENADDRESS
                  : tokenType === "OCN"
                  ? config.OCNTOKENADDRESS
                  : config.COOTIECOINADDRESS,
                nftid,
                tokenAmountValue,
                costType
              )
              .then((tx) => {
                tx.wait().then(() => {
                  notification.success({
                    message: "Success",
                    description: "Sale Successful.",
                  });
                  setLoading(false);
                  Navigate("/");
                });
              })
              .catch(() => {
                notification.error({
                  message: "Error",
                  description: "Sale Error.",
                });
                setLoading(false);
              });
          });
        })
        .catch(() => {
          notification.info({
            message: "Info",
            description: "Selling Canceled",
          });
          setLoading(false);
        });
    }
  };

  const unListNFT = async () => {
    setLoading(true);
    await marketPlaceContract
      .unlistMarketItem(contractAddress, nftMarketItem, {
        gasLimit: config.gasLimit,
      })
      .then((tx) => {
        tx.wait().then(async () => {
          notification.success({
            message: "Success",
            description: "UnListed Successful.",
          });
          setLoading(false);
          Navigate("/");
        });
      })
      .catch(() => {
        notification.error({
          message: "Error",
          description: "UnListed Error.",
        });
        setLoading(false);
      });
  };

  return (
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
                    text-center text-ternary-dark
                    dark:text-white
                    text-xl
                    sm:text-3xl
                    pt-3
                    font-bold
                  ">
        {nftName} #{nftid}
      </motion.h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 mt-6 p-3 sm:gap-10 sm:grid-cols-1">
        <div className="border-gray-100 dark:border-gray-700 lg:border-r-2 pb-10 sm:pb-0 sm:px-10 sm:py-5 w-full">
          <Card>
            <img
              src={nftIPFSAddress}
              alt="nft img"
              className="rounded-2xl shadow-2xl w-full"
            />
          </Card>
        </div>
        <div className="border-2 border-gray-100 dark:border-gray-700 p-7 rounded-2xl w-full">
          <div
            className="font-general-regular 
                        text-left text-ternary-dark
                        dark:text-white
                        text-sm
                        sm:text-xl
                        pt-3
                        font-bold
                      ">
            Description
          </div>
          <div
            className="font-general-regular 
                        sm:text-left text-ternary-dark
                        dark:text-white
                        text-xs
                        sm:text-xs
                        pt-3
                        font-semibold
                      ">
            {description === "" && <Skeleton active={true} />}
            {description}
          </div>
          <div
            className="font-general-regular 
                        text-left text-ternary-dark
                        dark:text-white
                        text-sm
                        sm:text-xl
                        pt-10
                        font-bold
                      ">
            Properties
          </div>
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-4 py-3 sm:gap-2 sm:grid-cols-2 xl:grid-cols-4">
              {propertiy.length === 0 && (
                <>
                  <Skeleton.Button active size="large" shape="default" />
                  <Skeleton.Button active size="large" shape="default" />
                  <Skeleton.Button active size="large" shape="default" />
                  <Skeleton.Button active size="large" shape="default" />
                </>
              )}
              {propertiy.map((attributes, index) => (
                <PropertiesCard
                  propertiy={attributes.trait_type}
                  value={attributes.value}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div
            className="font-general-regular 
                      text-left text-ternary-dark
                      dark:text-white
                      text-sm
                      sm:text-xl
                      pt-10
                      font-bold
                      ">
            Details
          </div>
          <div
            className="grid grid-cols-2 lg:grid-cols-2
                        xl:pr-60
                        lg:pr-20 md:grid-cols-2 md:pr-80
                        sm:gap-1 sm:grid-cols-2">
            <div
              className="font-general-regular 
                      text-left text-ternary-dark
                      dark:text-white
                      text-xs
                      sm:text-xs
                      pt-3
                      font-bold
                      
                      ">
              Contract Address :{" "}
            </div>
            <div
              className="font-general-regular 
                      text-left text-ternary-dark
                      dark:text-white
                      text-xs
                      sm:text-xs
                      pt-3
                      font-bold
                      
                      ">
              <a
                href={
                  "https://songbird-explorer.flare.network/address/" +
                  contractAddress +
                  "/token-transfers"
                }
                className="text-blue-500
                        dark:text-blue-500
                        dark:hover:text-blue-300"
                target="_blank"
                rel="noreferrer">
                {contractAddress.slice(0, 4)} ..... {contractAddress.slice(-4)}
              </a>
            </div>
            <div
              className="font-general-regular 
                      text-left text-ternary-dark
                      dark:text-white
                      text-xs
                      sm:text-xs
                      pt-3
                      font-bold
                      
                      ">
              Token ID :{" "}
            </div>
            <div
              className="font-general-regular 
                      text-left text-ternary-dark
                      dark:text-white
                      text-xs
                      sm:text-xs
                      pt-3
                      font-bold
                      
                      ">
              {nftid}
            </div>
            <div
              className="font-general-regular 
                      text-left text-ternary-dark
                      dark:text-white
                      text-xs
                      sm:text-xs
                      pt-3
                      font-bold
                      ">
              Token Standard :
            </div>
            <div
              className="font-general-regular 
                      text-left text-ternary-dark
                      dark:text-white
                      text-xs
                      sm:text-xs
                      pt-3
                      font-bold
                      ">
              ERC 721
            </div>
            <div
              className="font-general-regular 
                      text-left text-ternary-dark
                      dark:text-white
                      text-xs
                      sm:text-xs
                      pt-3
                      font-bold
                      ">
              Blockchain :
            </div>
            <div
              className="font-general-regular 
                      text-left text-ternary-dark
                      dark:text-white
                      text-xs
                      sm:text-xs
                      pt-3
                      font-bold
                      ">
              songbird
            </div>
          </div>
          {type === "sell" ? (
            <>
              <div className="mt-10 sm:flex w-full">
                <div className="flex justify-between sm:pr-3 sm:w-2/3 w-full">
                  <select
                    className="font-general-medium 
                                  sm:px-1
                                  py-2
                                  mr-2
                                  border 
                                  border-gray-200
                                  dark:border-ternary-dark
                                  rounded-lg
                                  text-sm
                                  sm:text-md
                                  dark:font-medium
                                  bg-secondary-light
                                  text-ternary-dark
                                  dark:bg-ternary-dark
                                  dark:text-white
                                  outline-none
                            "
                    onChange={(e) => {
                      setTokenType(e.target.value);
                    }}>
                    <option className="sm:text-md text-sm">SGB</option>
                    <option className="sm:text-md text-sm">sDOOD</option>
                    <option className="sm:text-md text-sm">Care</option>
                    <option className="sm:text-md text-sm">CootieCoin</option>
                    <option className="sm:text-md text-sm">OCN</option>
                  </select>
                  <input
                    onChange={(e) => {
                      setTokenValue(e.target.value);
                    }}
                    className="font-general-medium 
                                  w-full
                                  pl-3
                                  pr-1
                                  sm:px-4
                                  py-2
                                  border 
                                  dark:border-ternary-dark  
                                  rounded-lg
                                  text-sm
                                  sm:text-md
                                  bg-secondary-light
                                  dark:bg-ternary-dark
                                  text-primary-dark
                                  dark:text-white
                                  focus:outline-none
                                  "
                    id="name"
                    name="name"
                    type="number"
                    required=""
                    placeholder="Enter the Value"
                    aria-label="Name"
                  />
                </div>

                <div className="flex justify-between md:pt-0 pt-2 sm:w-1/3 w-full">
                  {loading ? (
                    <button
                      className="w-full h-10 bg-transparent dark:border-2 bg-gradient-to-r
                                  from-purple-700 to-pink-600
                                  hover:from-pink-600  hover:to-purple-700
                                    duration-300 font-general-medium hover:bg-indigo-600
                                    rounded-md shadow-sm text-md text-white font-bold text-sm
                                  ">
                      <div className="flex justify-center p-2 w-full">
                        <MetroSpinner size={27} />
                      </div>
                    </button>
                  ) : (
                    <button
                      className="sm:w-full h-10 bg-transparent dark:border-2 bg-gradient-to-r
                                  from-purple-700 to-pink-600
                                    duration-300 font-general-medium 
                                    rounded-md shadow-sm text-md text-white w-full font-bold text-sm
                                  "
                      onClick={() => sellNFT(tokenValue)}>
                      Sell Now
                    </button>
                  )}
                </div>
              </div>
              <div
                className="grid grid-cols-2 lg:grid-cols-2
                              sm:gap-1 sm:grid-cols-2">
                <div
                  className="font-general-regular 
                                text-left text-ternary-dark
                                dark:text-white
                                text-xs
                                sm:text-xs
                                pt-3
                                font-bold
                              ">
                  Token Fee 5% :
                </div>
                <div
                  className="font-general-regular 
                                text-left text-ternary-dark
                                dark:text-white
                                text-xs
                                sm:text-xs
                                pt-3
                                font-bold
                              ">
                  <p
                    className="text-ternary-dark
                        dark:text-white">
                    {parseFloat(tokenValue * 0.05).toFixed(2)} {tokenType}
                  </p>
                </div>
                <div
                  className="font-general-regular 
                                text-left text-ternary-dark
                                dark:text-white
                                text-xs
                                sm:text-xs
                                pt-3
                                font-bold
                              ">
                  You will receive :{" "}
                </div>
                <div
                  className="font-general-regular 
                                text-left text-ternary-dark
                                dark:text-white
                                text-xs
                                sm:text-xs
                                pt-3
                                font-bold
                                ">
                  <p
                    className="text-ternary-dark
                                  dark:text-white
                                ">
                    {parseFloat(tokenValue * 0.95).toFixed(2)} {tokenType}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mt-10 sm:flex w-full">
                <div className="flex justify-between py-3 sm:w-1/3 w-full">
                  {loading ? (
                    <button
                      className="w-full  bg-transparent dark:border-2 bg-gradient-to-r
                                  from-purple-700 to-pink-600
                                  hover:from-pink-600  hover:to-purple-700
                                    duration-300 font-general-medium hover:bg-indigo-600
                                    rounded-md shadow-sm text-md text-white font-bold text-sm h-50
                                  ">
                      <div className="flex justify-center p-2 w-full">
                        <MetroSpinner size={30} />
                      </div>
                    </button>
                  ) : (
                    <button
                      className="sm:w-full sm:h-50 bg-transparent dark:border-2 bg-gradient-to-r
                                  from-purple-700 to-pink-600
                                  hover:from-pink-600  hover:to-purple-700
                                    duration-300 font-general-medium hover:bg-indigo-600
                                    rounded-md shadow-sm text-md text-white h-10 w-full font-bold text-sm
                                  "
                      onClick={() => unListNFT()}>
                      UnList Now
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Sell;
