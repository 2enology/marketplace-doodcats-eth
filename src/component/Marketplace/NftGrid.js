import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { motion } from "framer-motion";

import { FiSearch } from "react-icons/fi";
import { MetroSpinner } from "react-spinners-kit";

import MARKETPLACEABI from "../../assets/abi/marketplaceABI.json";

import config from "../../config/config";

import NftSingle from "./NftSingle";

const ethers = require("ethers");

const NftGrid = () => {
  const { account } = useWeb3React();

  const [getDataLoading, setGetDataLoading] = useState(false);
  const [marketplaceArrary, setMarketplaceArray] = useState([]);

  const [marketplaceSearchfilterArray, setMarketPlaceSearchFilterArray] =
    useState([]);

  const [nftNameSearchState, setNftNameSearchState] = useState(false);
  const [nftCollectionsearchState, setNftCollectionSearchState] =
    useState(false);
  const [nftSortAZ, setNftSortAZ] = useState(false);
  const [nftSortZA, setNftSortZA] = useState(false);
  const [nftSortRecently, setNftSortRecently] = useState(false);
  const Provider = new ethers.providers.Web3Provider(window.ethereum);
  const Signer = Provider.getSigner();

  const marketPlaceContract = new ethers.Contract(
    config.MARKETPLACEADDRESS,
    MARKETPLACEABI,
    Signer
  );

  const getNftData = async () => {
    setGetDataLoading(true);
    let nftArrary = [];
    await marketPlaceContract.fetchMarketItems().then((data) => {
      for (let i = 0; i < data.length; i++) {
        nftArrary.push({
          itemId: Number(data[i].itemId),
          nftName:
            data[i].nftContract === config.SPACEKITTYADDRESS
              ? "SpaceKitty # " + Number(data[i].tokenId)
              : data[i].nftContract === config.SPACEOWLSADDRESS
              ? "SpaceOwls # " + Number(data[i].tokenId)
              : data[i].nftContract === config.DRAGONDOODLEADDRESS
              ? "Dragon Doodles # " + Number(data[i].tokenId)
              : data[i].nftContract === config.DOODNFTADDRESS
              ? "DoodCats # " + Number(data[i].tokenId)
              : data[i].nftContract === config.DEDNFTADDRESS
              ? "DedDoods # " + Number(data[i].tokenId)
              : data[i].nftContract === config.ELEMENTOWLSADDRESS
              ? "ElementOwls # " + Number(data[i].tokenId)
              : data[i].nftContract === config.ELEMENTDOGSADDRESS
              ? "ElementDogs # " + Number(data[i].tokenId)
              : data[i].nftContract === config.ELEMENTOCTOPUSADDRESS
              ? "ElementOctopus # " + Number(data[i].tokenId)
              : data[i].nftContract === config.QAFADDRESS
              ? "QAF # " + Number(data[i].tokenId)
              : data[i].nftContract === config.ROYALRATSADDRESS
              ? "Royal Rats # " + Number(data[i].tokenId)
              : data[i].nftContract === config.CLASSICALCATSADDRESS
              ? "The Classical Cats # " + Number(data[i].tokenId)
              : data[i].nftContract === config.ANCIENTALIENSADDRESS
              ? "The Ancient Aliens # " + Number(data[i].tokenId)
              : data[i].nftContract === config.PRIMORDIALPLANETOIDSADDRESS
              ? "The Primordial Planetoids # " + Number(data[i].tokenId)
              : data[i].nftContract === config.BADBUDDIESADDRESS
              ? "Bad Buddies # " + Number(data[i].tokenId)
              : data[i].nftContract === config.BADBUDDIES3ADDRESS
              ? "Bad Buddies3 # " + Number(data[i].tokenId)
              : data[i].nftContract === config.SGBWHALEV1ADDRESS
              ? "SGBWhales V1 #" + Number(data[i].tokenId)
              : data[i].nftContract === config.SGBWHALEV2ADDRESS
              ? "SGBWhales V2 #" + Number(data[i].tokenId)
              : data[i].nftContract === config.SGBTURTLEADDRESS
              ? "SGBTurtles # " + Number(data[i].tokenId)
              : data[i].nftContract === config.GANGSTERSEALADDRESS
              ? "Gangster Seals # " + Number(data[i].tokenId)
              : data[i].nftContract === config.GANGSTEROCTOPUSADDRESS
              ? "Gangster Octopuses # " + Number(data[i].tokenId)
              : "Bad Buddies2 # " + Number(data[i].tokenId),
          nftImgUrl:
            data[i].nftContract === config.SPACEKITTYADDRESS
              ? `${config.SPACEKITTYIMGIPFSADDRESS}/${Number(
                  data[i].tokenId
                )}.png`
              : data[i].nftContract === config.SPACEOWLSADDRESS
              ? `${config.SPACEOWLIMGIPFSADDRESS}/${Number(
                  data[i].tokenId
                )}.png`
              : data[i].nftContract === config.DRAGONDOODLEADDRESS
              ? `${config.DRAGONDOODLEIMGIPFSADDRESS}/${Number(
                  data[i].tokenId
                )}.png`
              : data[i].nftContract === config.DOODNFTADDRESS
              ? `${config.DOODCATIMGIPFSADDRESS}/${Number(data[i].tokenId)}.png`
              : data[i].nftContract === config.DEDNFTADDRESS
              ? `${config.DEDDOODIMGIPFSADDRESS}/${Number(data[i].tokenId)}.png`
              : data[i].nftContract === config.ELEMENTOWLSADDRESS
              ? `${config.ELEMENTOWLSIMGIPFSADDRESS}/${Number(
                  data[i].tokenId
                )}.png`
              : data[i].nftContract === config.ELEMENTDOGSADDRESS
              ? `${config.ELEMENTDOGSIMGIPFSADDRESS}/${Number(
                  data[i].tokenId
                )}.png`
              : data[i].nftContract === config.ELEMENTOCTOPUSADDRESS
              ? `${config.ELEMENTOCTOPUSIMGIPFSADDRESS}/${Number(
                  data[i].tokenId
                )}.png`
              : data[i].nftContract === config.QAFADDRESS
              ? `${config.QAFIMGIPFSADDRESS}/${Number(data[i].tokenId)}.jpg`
              : data[i].nftContract === config.ROYALRATSADDRESS
              ? `${config.ROYALRATSIMGIPFSADDRESS}/${Number(
                  data[i].tokenId
                )}.jpg`
              : data[i].nftContract === config.CLASSICALCATSADDRESS
              ? `${config.CLASSICALCATSIMGIPFSADDRESS}/${Number(
                  data[i].tokenId
                )}.jpg`
              : data[i].nftContract === config.ANCIENTALIENSADDRESS
              ? `${config.ANCIENTALIENSIMGIPFSADDRESS}/${Number(
                  data[i].tokenId
                )}.jpg`
              : data[i].nftContract === config.PRIMORDIALPLANETOIDSADDRESS
              ? `${config.PLANETOIDSIMGIPFSADDRESS}/${Number(
                  data[i].tokenId
                )}.jpg`
              : data[i].nftContract === config.BADBUDDIESADDRESS
              ? `${config.BADBUDDIESIMGIPFSADDRESS}/${Number(
                  data[i].tokenId
                )}.png`
              : data[i].nftContract === config.BADBUDDIES3ADDRESS
              ? `${config.BADBUDDIES3IMGIPFSADDRESS}/${Number(
                  data[i].tokenId
                )}.png`
              : data[i].nftContract === config.GANGSTEROCTOPUSADDRESS
              ? `${config.GANGSTEROCTOPUSIMGIPFSADDRESS}/${Number(
                  data[i].tokenId
                )}.png`
              : data[i].nftContract === config.SGBWHALEV1ADDRESS
              ? `${config.SGBWHALEV1IMGIPFSADDRESS}/${Number(
                  data[i].tokenId
                )}.jpg`
              : data[i].nftContract === config.SGBWHALEV2ADDRESS
              ? `${config.SGBWHALEV2IMGIPFSADDRESS}/${Number(
                  data[i].tokenId
                )}.png`
              : data[i].nftContract === config.SGBTURTLEADDRESS
              ? `${config.SGBTURTLEIPFSIMGADDRESS}/${Number(
                  data[i].tokenId
                )}.png`
              : data[i].nftContract === config.GANGSTERSEALADDRESS
              ? `${config.GANGSTERSEALIMGIPFSADDRESS}/${Number(
                  data[i].tokenId
                )}.png`
              : `${config.BADBUDDIES2IMGIPFSADDRESS}/${Number(
                  data[i].tokenId
                )}.png`,
          nftContract: data[i].nftContract.toString(),
          priceAsset: data[i].priceAsset.toString(),
          tokenId: Number(data[i].tokenId),
          seller: data[i].seller.toString(),
          buyer: data[i].buyer.toString(),
          price: parseFloat(
            ethers.utils.formatEther(data[i].price.toString())
          ).toFixed(2),
          listedTime: Number(data[i].listedTime),
          isSold: data.isSold,
        });
      }
    });
    let filterArray = [];
    filterArray = nftArrary.sort((a, b) =>
      a.nftName.toLowerCase() > b.nftName.toLowerCase() ? 1 : -1
    );
    setMarketplaceArray(filterArray);
    setMarketPlaceSearchFilterArray(filterArray);
    setGetDataLoading(false);
  };

  useEffect(() => {
    account && getNftData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  const nftNameFilter = (searchNft) => {
    let filterArray = [];
    filterArray = marketplaceArrary.filter((marketArray) =>
      marketArray.nftName.toLowerCase().includes(searchNft.toLowerCase())
        ? marketplaceArrary
        : searchNft === ""
        ? marketplaceArrary
        : ""
    );
    setMarketPlaceSearchFilterArray(filterArray);
    setNftNameSearchState(true);
    setNftCollectionSearchState(false);
    setNftSortAZ(false);
    setNftSortRecently(false);
    setNftSortZA(false);
  };

  const nftCollectionFilter = (searchNft) => {
    setMarketPlaceSearchFilterArray(0);
    let filterArray = [];
    filterArray = marketplaceArrary.filter((marketArray) =>
      marketArray.nftName.toLowerCase().includes(searchNft.toLowerCase())
        ? marketplaceArrary
        : searchNft === "All NFTs"
        ? marketplaceArrary
        : ""
    );
    setMarketPlaceSearchFilterArray(filterArray);
    setNftCollectionSearchState(true);
    setNftSortRecently(false);
    setNftNameSearchState(false);
    setNftSortZA(false);
    setNftSortAZ(false);
  };

  const nftSortbyAZ = (searchNft) => {
    let filterArray = [];
    if (searchNft === "Sort(A - Z)") {
      filterArray = marketplaceSearchfilterArray.sort((a, b) =>
        a.nftName.toLowerCase() > b.nftName.toLowerCase() ? 1 : -1
      );
      setMarketPlaceSearchFilterArray(filterArray);
      setNftSortAZ(true);
      setNftSortRecently(false);
      setNftSortZA(false);
      setNftCollectionSearchState(false);
      setNftNameSearchState(false);
    } else if (searchNft === "Sort(Z - A)") {
      filterArray = marketplaceSearchfilterArray.sort((a, b) =>
        a.nftName.toLowerCase() < b.nftName.toLowerCase() ? 1 : -1
      );
      setMarketPlaceSearchFilterArray(filterArray);
      setNftSortZA(true);
      setNftSortRecently(false);
      setNftSortAZ(false);
      setNftCollectionSearchState(false);
      setNftNameSearchState(false);
    } else if (searchNft === "Recently Items") {
      console.log(marketplaceArrary);
      filterArray = marketplaceSearchfilterArray.sort((a, b) =>
        a.listedTime < b.listedTime ? 1 : -1
      );
      setMarketPlaceSearchFilterArray(filterArray);
      setNftSortRecently(true);
      setNftSortZA(false);
      setNftSortAZ(false);
      setNftCollectionSearchState(false);
      setNftNameSearchState(false);
    }
  };

  return (
    <section className="mt-5 py-15 sm:mt-10 sm:py-10">
      <div className="text-center">
        <p
          className="dark:text-white
                        font-bold
                        font-general-medium
                        mb-1 sm:text-4xl
                        text-2xl
                        text-ternary-dark
                        ">
          Buying Collections
        </p>
      </div>

      <div className="mt-7 sm:mt-7">
        <h3
          className="font-general-regular 
                      text-center text-ternary-dark
                      dark:text-white
                      text-md
                      sm:text-xl
                      mb-10
                      font-bold
                      ">
          Search nfts by name or filter by collection
        </h3>
        <div
          className=" 
                        sm:flex
                        sm:w-full
                        border-b border-primary-light
                        dark:border-gray-700
                        justify-between
                        pb-3
                        gap-3
                        ">
          <div className="flex gap-2 sm:w-1/4 w-full">
            <span
              className="
                          sm:block
                          bg-primary-light
                          dark:bg-ternary-dark
                          p-2.5
                          shadow-sm
                          rounded-xl
                          cursor-pointer
                          ">
              <FiSearch className="dark:text-white h-5 text-ternary-dark w-5"></FiSearch>
            </span>
            <input
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
              id="nftSearch"
              name="nftSearch"
              type="search"
              required=""
              placeholder="Search NFTs"
              aria-label="Name"
              onChange={(e) => nftNameFilter(e.target.value)}
            />
          </div>

          <div className="flex justify-between mt-3 sm:justify-end sm:mt-0 sm:w-3/4">
            <select
              className="font-general-medium 
                  sm:px-6
                  py-2
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
                  mx-1
            "
              onChange={(e) => nftCollectionFilter(e.target.value)}>
              <option className="sm:text-md text-normal">All NFTs </option>
              <option className="sm:text-md text-normal">SpaceKitty </option>
              <option className="sm:text-md text-normal">SpaceOwls </option>
              <option className="sm:text-md text-normal">
                Dragon Doodles{" "}
              </option>
              <option className="sm:text-md text-normal">DoodCats </option>
              <option className="sm:text-md text-normal">DedDoods </option>
              <option className="sm:text-md text-normal">ElementOwls </option>
              <option className="sm:text-md text-normal">ElementDogs </option>
              <option className="sm:text-md text-normal">
                ElementOctopus{" "}
              </option>
              <option className="sm:text-md text-normal">QAF </option>
              <option className="sm:text-md text-normal">Royal Rats </option>
              <option className="sm:text-md text-normal">
                The Classical Cats{" "}
              </option>
              <option className="sm:text-md text-normal">
                The Ancient Aliens{" "}
              </option>
              <option className="sm:text-md text-normal">
                The Primordial Planetoids{" "}
              </option>
              <option className="sm:text-md text-normal">Bad Buddies </option>
              <option className="sm:text-md text-normal">Bad Buddies2 </option>
              <option className="sm:text-md text-normal">Bad Buddies3 </option>
              <option className="sm:text-md text-normal">SGBWhales V1 </option>
              <option className="sm:text-md text-normal">SGBWhales V2 </option>
              <option className="sm:text-md text-normal">SGBTurtles </option>
              <option className="sm:text-md text-normal">
                Gangster Seals{" "}
              </option>
              <option className="sm:text-md text-normal">
                Gangster Octopuses{" "}
              </option>
            </select>

            <select
              className="font-general-medium 
                  sm:px-6
                  py-2
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
              id="sortbyAZ"
              onChange={(e) => nftSortbyAZ(e.target.value)}>
              <option className="sm:text-md text-sm">Sort(A - Z)</option>
              <option className="sm:text-md text-sm">Sort(Z - A)</option>
              <option className="sm:text-md text-sm">Recently Items</option>
            </select>
          </div>
        </div>
      </div>

      {account ? (
        <>
          {getDataLoading ? (
            <div className="flex justify-center mt-10 w-full">
              <MetroSpinner color="#00ff89" />
            </div>
          ) : (
            <>
              {marketplaceArrary.length !== 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mt-6 p-3 sm:gap-10 sm:grid-cols-3">
                  {nftNameSearchState ? (
                    <>
                      {" "}
                      {marketplaceSearchfilterArray.map((nftArray, index) => (
                        <NftSingle
                          key={index}
                          title={nftArray.nftName}
                          image={nftArray.nftImgUrl}
                          price={nftArray.price}
                          contractAddress={nftArray.nftContract}
                          priceAsset={nftArray.priceAsset}
                          tokenId={nftArray.tokenId}
                        />
                      ))}
                    </>
                  ) : nftCollectionsearchState ? (
                    <>
                      {" "}
                      {marketplaceSearchfilterArray.map((nftArray, index) => (
                        <NftSingle
                          key={index}
                          title={nftArray.nftName}
                          image={nftArray.nftImgUrl}
                          price={nftArray.price}
                          contractAddress={nftArray.nftContract}
                          priceAsset={nftArray.priceAsset}
                          tokenId={nftArray.tokenId}
                        />
                      ))}
                    </>
                  ) : nftSortAZ ? (
                    <>
                      {" "}
                      {marketplaceSearchfilterArray.map((nftArray, index) => (
                        <NftSingle
                          key={index}
                          title={nftArray.nftName}
                          image={nftArray.nftImgUrl}
                          price={nftArray.price}
                          contractAddress={nftArray.nftContract}
                          priceAsset={nftArray.priceAsset}
                          tokenId={nftArray.tokenId}
                        />
                      ))}
                    </>
                  ) : nftSortZA ? (
                    <>
                      {" "}
                      {marketplaceSearchfilterArray.map((nftArray, index) => (
                        <NftSingle
                          key={index}
                          title={nftArray.nftName}
                          image={nftArray.nftImgUrl}
                          price={nftArray.price}
                          contractAddress={nftArray.nftContract}
                          priceAsset={nftArray.priceAsset}
                          tokenId={nftArray.tokenId}
                        />
                      ))}
                    </>
                  ) : nftSortRecently ? (
                    <>
                      {" "}
                      {marketplaceSearchfilterArray.map((nftArray, index) => (
                        <NftSingle
                          key={index}
                          title={nftArray.nftName}
                          image={nftArray.nftImgUrl}
                          price={nftArray.price}
                          contractAddress={nftArray.nftContract}
                          priceAsset={nftArray.priceAsset}
                          tokenId={nftArray.tokenId}
                        />
                      ))}
                    </>
                  ) : (
                    <>
                      {" "}
                      {marketplaceArrary.map((nftArray, index) => (
                        <NftSingle
                          key={index}
                          title={nftArray.nftName}
                          image={nftArray.nftImgUrl}
                          price={nftArray.price}
                          contractAddress={nftArray.nftContract}
                          priceAsset={nftArray.priceAsset}
                          tokenId={nftArray.tokenId}
                        />
                      ))}
                    </>
                  )}
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
                      pt-5
                      sm:pt-20
                      font-bold
                      ">
          Please Connect wallet
        </motion.h1>
      )}
    </section>
  );
};

export default NftGrid;
