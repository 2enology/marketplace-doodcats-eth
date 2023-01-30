import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Modal } from "antd";
import { LogoutOutlined, CopyOutlined, CheckOutlined } from "@ant-design/icons";

import { useWeb3React } from "@web3-react/core";
import { injected } from "../../hooks/connect";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { switchSongbirdNetwork } from "../../hooks/switch-network";

import NftCollectionDropDown from "./dropdown";

import logoDark from "../../assets/images/logo-ct-dark.png";
import logoLight from "../../assets/images/logo-ct.png";
import walletIcon from "../../assets/images/walletIcon.svg";

const Navbar = () => {
  const { account, chainId, activate, deactivate } = useWeb3React();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  async function connect() {
    if (chainId !== 19 || chainId === undefined) {
      switchSongbirdNetwork();
    }
    try {
      await activate(injected);
      localStorage.setItem("isWalletConnected", true);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", false);
      window.location.reload();
    } catch (ex) {
      console.log(ex);
    }
  }

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const openModal = (account) => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(injected);
          localStorage.setItem("isWalletConnected", true);
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [activeTheme, setTheme] = useThemeSwitcher();
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto">
      <div className="block py-6 sm:flex sm:items-center sm:justify-between xl:max-w-screen-xl z-10">
        <div className="flex items-center justify-between px-4 sm:px-0">
          <div>
            {activeTheme === "dark" ? (
              <Link to="/">
                <div className="flex">
                  <img src={logoDark} className="w-10" alt="Dark Logo" />
                  <h1 className="font-bold p-2 text-black">MARKETPLACE</h1>
                </div>
              </Link>
            ) : (
              <Link to="/">
                <div className="flex">
                  <img src={logoLight} className="w-10" alt="Light Logo" />
                  <h1 className="font-bold p-2 text-white">MARKETPLACE</h1>
                </div>
              </Link>
            )}
          </div>

          <button
            onClick={() => setTheme(activeTheme)}
            className="bg-gray-100 block border-gray-500 dark:bg-ternary-dark ml-20 p-2 rounded-xl sm:hidden">
            {" "}
            {activeTheme === "dark" ? (
              <FiMoon className="dark:hover:text-white hover:text-gray-400 text-gray-700 text-xl transition" />
            ) : (
              <FiSun className="hover:text-gray-500 text-white text-xl transition" />
            )}
          </button>

          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="dark:text-white fill-current h-7 text-gray-700 w-7">
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
              : "hidden"
          }>
          <div className="flex justify-between w-full">
            <div className="border-primary-light mt-1.5 sm:border-t-0 sm:pt-0">
              <span
                className="bg-gradient-to-r hover:text-gray-400
                        from-purple-700 to-pink-600 block duration-300 font-general-medium
                        mt-2 px-4 py-1.5 rounded-lg shadow-sm
                        sm:hidden text-center text-md text-white"
                aria-label="connect button">
                {!account ? (
                  <button className="flex font-bold" onClick={() => connect()}>
                    <img
                      src={walletIcon}
                      alt="walletSVG"
                      className="max-w-sm mr-2 w-5"
                    />
                    Connect Wallet
                  </button>
                ) : (
                  <button
                    className="flex font-bold"
                    onClick={() => openModal(account)}>
                    <img
                      src={walletIcon}
                      alt="walletSVG"
                      className="max-w-sm mr-2 w-5"
                    />
                    {account.toString().slice(0, 4)} .....{" "}
                    {account.toString().slice(-4)}
                  </button>
                )}
              </span>
            </div>
            <NftCollectionDropDown className="" />
          </div>
        </div>

        <div
          className="font-general-medium hidden items-center justify-center 
                      m-0 mt-5 p-5 shadow-lg sm:flex sm:ml-4 sm:mt-3 sm:p-0 sm:shadow-none">
          <NftCollectionDropDown />
        </div>

        <div className="flex-col hidden items-center justify-between md:flex-row sm:flex">
          <button
            onClick={() => setTheme(activeTheme)}
            className="bg-gray-100 block border-gray-500 dark:bg-ternary-dark p-2 rounded-xl">
            {" "}
            {activeTheme === "dark" ? (
              <FiMoon className="dark:hover:text-white hover:text-gray-400 text-gray-700 text-xl transition" />
            ) : (
              <FiSun className="hover:text-gray-500 text-white text-xl transition" />
            )}
          </button>

          <div className="hidden md:flex">
            <span
              className="bg-transparent bg-gradient-to-r from-purple-700 to-pink-600
                          hover:text-gray-300
                          duration-300 font-general-medium 
                          ml-8 px-6 py-2.5 rounded-md shadow-sm text-md text-white
                        "
              aria-label="connect-btn">
              {!account ? (
                <button className="flex font-bold" onClick={() => connect()}>
                  <img
                    src={walletIcon}
                    alt="walletSVG"
                    className="max-w-sm mr-2 w-5"
                  />
                  Connect Wallet
                </button>
              ) : (
                <button
                  className="flex font-bold"
                  onClick={() => openModal(account)}>
                  <img
                    src={walletIcon}
                    alt="walletSVG"
                    className="max-w-sm mr-2 w-5"
                  />
                  {account.toString().slice(0, 4)} .....{" "}
                  {account.toString().slice(-4)}
                </button>
              )}
            </span>
          </div>
        </div>
      </div>
      {activeTheme === "dark" ? (
        <Modal
          title=""
          open={isModalOpen}
          footer={null}
          onCancel={() => setIsModalOpen(false)}
          closable={false}
          className="lightModal"
          width={400}>
          <div className="flex justify-center mb-4 w-full">
            <div className="bg-white border border-gray-200 flex p-2 rounded-lg text-black">
              <span className="pr-2">
                {" "}
                {account ? <> {account.toString().slice(0, 32)} ...</> : <></>}
              </span>
              <CopyToClipboard text={account} onCopy={onCopyText}>
                <div className="border-gray-200 border-l copy-area hover:text-gray-600 pl-3">
                  {!isCopied ? (
                    <CopyOutlined style={{ color: "black" }} />
                  ) : (
                    <CheckOutlined style={{ color: "black" }} />
                  )}
                </div>
              </CopyToClipboard>
            </div>
          </div>

          <div className="flex justify-end w-full">
            <button
              className="flex h-50 bg-transparent dark:border-2 bg-gradient-to-r 
                        hover:text-gray-400
                        from-purple-700 to-pink-600
                          duration-300 font-general-medium 
                          rounded-md shadow-sm text-md text-white font-bold text-sm p-2"
              onClick={() => disconnect()}>
              Disconnect
              <div className="flex justify-center pt-1 w-full">
                <LogoutOutlined className="pl-1" />
              </div>
            </button>
          </div>
        </Modal>
      ) : (
        <Modal
          title=""
          open={isModalOpen}
          footer={null}
          onCancel={() => setIsModalOpen(false)}
          className="darkModal"
          closable={false}
          width={400}>
          <div className="flex justify-center mb-4 w-full">
            <div className="bg-ternary-dark border border-gray-700 flex p-2 rounded-lg text-gray-300">
              <span className="pr-2">
                {" "}
                {account ? <> {account.toString().slice(0, 32)} ...</> : <></>}
              </span>
              <CopyToClipboard text={account} onCopy={onCopyText}>
                <div className="border-gray-700 border-l copy-area hover:text-gray-600 pl-3">
                  {!isCopied ? (
                    <CopyOutlined style={{ color: "white" }} />
                  ) : (
                    <CheckOutlined style={{ color: "white" }} />
                  )}
                </div>
              </CopyToClipboard>
            </div>
          </div>

          <div className="flex justify-end w-full">
            <button
              className="flex h-50 bg-transparent dark:border-2 bg-gradient-to-r 
                        hover:text-gray-400
                        from-purple-700 to-pink-600
                          duration-300 font-general-medium 
                          rounded-md shadow-sm text-md text-white font-bold text-sm p-2"
              onClick={() => disconnect()}>
              Disconnect
              <div className="flex justify-center pt-1 w-full">
                <LogoutOutlined className="pl-1" />
              </div>
            </button>
          </div>
        </Modal>
      )}
    </motion.nav>
  );
};

export default Navbar;
