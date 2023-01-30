import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { motion } from "framer-motion";

import CollectionCard from "./collectionCard";

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

import config from "../../config/config";

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

const SellCard = () => {
  const { account } = useWeb3React();
  const Provider = new ethers.providers.Web3Provider(window.ethereum);
  const Signer = Provider.getSigner();

  const [doodcatNftCount, setDoodCatNftCount] = useState(0);
  const [deddoodNftCount, setDedDoodNftCount] = useState(0);
  const [spaceittyNftCount, setSpaceKittyNftCount] = useState(0);
  const [spaceowlNftCount, setSpaceOwlNftCount] = useState(0);
  const [dragondoodleNftCount, setDragondDolldeNftCount] = useState(0);
  const [elementowlsNftCount, setElementowlsNftCount] = useState(0);
  const [elementdogsNftCount, setElementdogsNftCount] = useState(0);
  const [elementoctpusNftCount, setElmentoctpusNftCount] = useState(0);
  const [qafNftCount, setQafNftCount] = useState(0);
  const [royalratsNftCount, setRoyalRatsNftCount] = useState(0);
  const [classicalCatsNftCount, setClassicalCatsNftCount] = useState(0);
  const [ancientAliensNftCount, setAncientAliensNftCount] = useState(0);
  const [planetoidNftCount, setPlanetoidNftCount] = useState(0);
  const [badbuddiesNftCount, setBadbuddiesNftCount] = useState(0);
  const [badbuddies2NftCount, setBadbuddies2NftCount] = useState(0);
  const [badbuddies3NftCount, setBadbuddies3NftCount] = useState(0);

  const [sgbWhalev1NftCount, setSgbWhaleV1NftCount] = useState(0);
  const [sgbWhalev2NftCount, setSgbWhaleV2NftCount] = useState(0);
  const [sgbTurtleNftCount, setSgbTurtleNftCount] = useState(0);
  const [gangsterSealNftCount, setGangsterSealnftCount] = useState(0);
  const [gangsterOctopusNftCount, setGangsterOctopusNftCount] = useState(0);

  const DOODCATCONTRACT = new ethers.Contract(
    config.DOODNFTADDRESS,
    DOODCATNFTABI,
    Signer
  );

  const DEDDOODCONTRACT = new ethers.Contract(
    config.DEDNFTADDRESS,
    DEDDOODNFTABI,
    Signer
  );

  const SPACEKITTYCONTRACT = new ethers.Contract(
    config.SPACEKITTYADDRESS,
    SPACEKITTYABI,
    Signer
  );

  const SPACEOWLCONTRACT = new ethers.Contract(
    config.SPACEOWLSADDRESS,
    SPACEOWLABI,
    Signer
  );

  const DRAGONDOODLECONTRACT = new ethers.Contract(
    config.DRAGONDOODLEADDRESS,
    DRAGONDOODLEABI,
    Signer
  );

  const ELEMENTOWLSCONTRACT = new ethers.Contract(
    config.ELEMENTOWLSADDRESS,
    ELEMENTOWLSABI,
    Signer
  );

  const ELEMENTDOGSCONTRACT = new ethers.Contract(
    config.ELEMENTDOGSADDRESS,
    ELEMENTDOGSABI,
    Signer
  );
  const ELEMENTOCTOPUSCONTRACT = new ethers.Contract(
    config.ELEMENTOCTOPUSADDRESS,
    ELEMENTOCTOPUSABI,
    Signer
  );
  const QAFCONTRACT = new ethers.Contract(config.QAFADDRESS, QAFABI, Signer);
  const ROYALRATSCONTRACT = new ethers.Contract(
    config.ROYALRATSADDRESS,
    ROYALRATSABI,
    Signer
  );
  const CLASSICALCATSCONTRACT = new ethers.Contract(
    config.CLASSICALCATSADDRESS,
    CLASSICALCATSABI,
    Signer
  );
  const ALIENSCONTRACT = new ethers.Contract(
    config.ANCIENTALIENSADDRESS,
    ALIENSABI,
    Signer
  );
  const PLANETOIDSCONTRACT = new ethers.Contract(
    config.PRIMORDIALPLANETOIDSADDRESS,
    PLANETOIDSABI,
    Signer
  );
  const BADBUDDIESCONTRACT = new ethers.Contract(
    config.BADBUDDIESADDRESS,
    SPACEKITTYABI,
    Signer
  );
  const BADBUDDIES2CONTRACT = new ethers.Contract(
    config.BADBUDDIES2ADDRESS,
    SPACEKITTYABI,
    Signer
  );

  const BADBUDDIES3CONTRACT = new ethers.Contract(
    config.BADBUDDIES3ADDRESS,
    SPACEKITTYABI,
    Signer
  );

  const SGBWHALEV1CONTRACT = new ethers.Contract(
    config.SGBWHALEV1ADDRESS,
    SGBWHALEV1ABI,
    Signer
  );

  const SGBWHALEV2CONTRACT = new ethers.Contract(
    config.SGBWHALEV2ADDRESS,
    SGBWHALEV2ABI,
    Signer
  );

  const SGBTURTLECONTRACT = new ethers.Contract(
    config.SGBTURTLEADDRESS,
    SGBTURTLEABI,
    Signer
  );

  const GANGSTERSEALCONTRACT = new ethers.Contract(
    config.GANGSTERSEALADDRESS,
    GANGSTERSEALABI,
    Signer
  );

  const GANGSTEROCTOPUSCONTRACT = new ethers.Contract(
    config.GANGSTEROCTOPUSADDRESS,
    GANGSTEROCTOPUSABI,
    Signer
  );

  const getNFTCount = async () => {
    await DOODCATCONTRACT.walletOfOwner(account).then(async (data) => {
      setDoodCatNftCount(data.length);
    });

    await DEDDOODCONTRACT.walletOfOwner(account).then(async (data) => {
      setDedDoodNftCount(data.length);
    });

    await SPACEKITTYCONTRACT.walletOfOwner(account).then(async (data) => {
      setSpaceKittyNftCount(data.length);
    });

    await SPACEOWLCONTRACT.walletOfOwner(account).then(async (data) => {
      setSpaceOwlNftCount(data.length);
    });

    await DRAGONDOODLECONTRACT.walletOfOwner(account).then(async (data) => {
      setDragondDolldeNftCount(data.length);
    });

    await ELEMENTOWLSCONTRACT.walletOfOwner(account).then(async (data) => {
      setElementowlsNftCount(data.length);
    });

    await ELEMENTDOGSCONTRACT.walletOfOwner(account).then(async (data) => {
      setElementdogsNftCount(data.length);
    });

    await ELEMENTOCTOPUSCONTRACT.walletOfOwner(account).then(async (data) => {
      setElmentoctpusNftCount(data.length);
    });

    await QAFCONTRACT.walletOfOwner(account).then(async (data) => {
      setQafNftCount(data.length);
    });

    await CLASSICALCATSCONTRACT.walletOfOwner(account).then(async (data) => {
      setClassicalCatsNftCount(data.length);
    });

    await ROYALRATSCONTRACT.walletOfOwner(account).then(async (data) => {
      setRoyalRatsNftCount(data.length);
    });

    await ALIENSCONTRACT.walletOfOwner(account).then(async (data) => {
      setAncientAliensNftCount(data.length);
    });

    await PLANETOIDSCONTRACT.walletOfOwner(account).then(async (data) => {
      setPlanetoidNftCount(data.length);
    });

    await BADBUDDIESCONTRACT.walletOfOwner(account).then(async (data) => {
      setBadbuddiesNftCount(data.length);
    });

    await BADBUDDIES2CONTRACT.walletOfOwner(account).then(async (data) => {
      setBadbuddies2NftCount(data.length);
    });

    await BADBUDDIES3CONTRACT.walletOfOwner(account).then(async (data) => {
      setBadbuddies3NftCount(data.length);
    });

    await SGBWHALEV1CONTRACT.walletOfOwner(account).then(async (data) => {
      setSgbWhaleV1NftCount(data.length);
    });

    await SGBWHALEV2CONTRACT.walletOfOwner(account).then(async (data) => {
      setSgbWhaleV2NftCount(data.length);
    });

    await SGBTURTLECONTRACT.walletOfOwner(account).then(async (data) => {
      setSgbTurtleNftCount(data.length);
    });

    await GANGSTERSEALCONTRACT.walletOfOwner(account).then(async (data) => {
      setGangsterSealnftCount(data.length);
    });

    await GANGSTEROCTOPUSCONTRACT.walletOfOwner(account).then(async (data) => {
      setGangsterOctopusNftCount(data.length);
    });
  };

  useEffect(() => {
    if (account) {
      getNFTCount();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);
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
                      sm:mb-20
                      ">
        Selling Collections
      </motion.h1>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mt-6 sm:gap-10 sm:grid-cols-3">
          <CollectionCard
            image={spacekitty_nft}
            title="SpaceKitty"
            count={spaceittyNftCount}
            contractAddresss={config.SPACEKITTYADDRESS}
          />
          <CollectionCard
            image={spaceowl_nft}
            title="SpaceOwls"
            count={spaceowlNftCount}
            contractAddresss={config.SPACEOWLSADDRESS}
          />
          <CollectionCard
            image={dragondoodle_nft}
            title="Dragon Doodles"
            count={dragondoodleNftCount}
            contractAddresss={config.DRAGONDOODLEADDRESS}
          />
          <CollectionCard
            image={doodcat_nft}
            title="DoodCats"
            count={doodcatNftCount}
            contractAddresss={config.DOODNFTADDRESS}
          />
          <CollectionCard
            image={deddood_nft}
            title="DedDoods"
            count={deddoodNftCount}
            contractAddresss={config.DEDNFTADDRESS}
          />
          <CollectionCard
            image={elementowl_nft}
            title="ElementOwls"
            count={elementowlsNftCount}
            contractAddresss={config.ELEMENTOWLSADDRESS}
          />
          <CollectionCard
            image={elementdog_nft}
            title="ElementDogs"
            count={elementdogsNftCount}
            contractAddresss={config.ELEMENTDOGSADDRESS}
          />
          <CollectionCard
            image={elementoctopus_nft}
            title="ElementOctopus"
            count={elementoctpusNftCount}
            contractAddresss={config.ELEMENTOCTOPUSADDRESS}
          />
          <CollectionCard
            image={qaf_nft}
            title="QAF"
            count={qafNftCount}
            contractAddresss={config.QAFADDRESS}
          />

          <CollectionCard
            image={royalrat_nft}
            title="Royal Rats"
            count={royalratsNftCount}
            contractAddresss={config.ROYALRATSADDRESS}
          />
          <CollectionCard
            image={classicalcat_nft}
            title="The Classical Cats"
            count={classicalCatsNftCount}
            contractAddresss={config.CLASSICALCATSADDRESS}
          />
          <CollectionCard
            image={alien_nft}
            title="The Ancient Aliens"
            count={ancientAliensNftCount}
            contractAddresss={config.ANCIENTALIENSADDRESS}
          />

          <CollectionCard
            image={primordialplanet_nft}
            title="The Primordial Planetoids"
            count={planetoidNftCount}
            contractAddresss={config.PRIMORDIALPLANETOIDSADDRESS}
          />

          <CollectionCard
            image={badbuddies_nft}
            title="Bad Buddies"
            count={badbuddiesNftCount}
            contractAddresss={config.BADBUDDIESADDRESS}
          />

          <CollectionCard
            image={badbuddies2_nft}
            title="Bad Buddies2"
            count={badbuddies2NftCount}
            contractAddresss={config.BADBUDDIES2ADDRESS}
          />

          <CollectionCard
            image={badbuddies3_nft}
            title="Bad Buddies3"
            count={badbuddies3NftCount}
            contractAddresss={config.BADBUDDIES3ADDRESS}
          />

          <CollectionCard
            image={sgbWhalesV1_nft}
            title="SGBWhales V1"
            count={sgbWhalev1NftCount}
            contractAddresss={config.SGBWHALEV1ADDRESS}
          />

          <CollectionCard
            image={sgbWhalesV2_nft}
            title="SGBWhales v2"
            count={sgbWhalev2NftCount}
            contractAddresss={config.SGBWHALEV2ADDRESS}
          />

          <CollectionCard
            image={sgbTurtle_nft}
            title="SGBTurtle"
            count={sgbTurtleNftCount}
            contractAddresss={config.SGBTURTLEADDRESS}
          />

          <CollectionCard
            image={gangsteSeal_nft}
            title="GangSterSeal"
            count={gangsterSealNftCount}
            contractAddresss={config.GANGSTERSEALADDRESS}
          />

          <CollectionCard
            image={gangsterOctopus_nft}
            title="GangsterOctopus"
            count={gangsterOctopusNftCount}
            contractAddresss={config.GANGSTEROCTOPUSADDRESS}
          />
        </motion.div>
      </motion.section>
    </>
  );
};
export default SellCard;
