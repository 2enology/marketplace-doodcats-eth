import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import config from "../../config/config";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NftCollectionDropDown() {
  return (
    <Menu as="div" className="flex justify-end my-3 relative text-left">
      <div>
        <Menu.Button
          className="bg-white dark:bg-ternary-dark
                      dark:text-white focus:outline-none font-medium
                      hover:bg-gray-50 dark:hover:bg-gray-600 inline-flex
                        justify-end px-4 py-2 rounded-md
                        shadow-sm text-gray-700 text-sm w-full ">
          My NFT Collections
          <ChevronDownIcon className="-mr-1 h-5 ml-2 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items
          className="absolute bg-white dark:bg-ternary-dark divide-gray-100
                              divide-y focus:outline-none mt-12 origin-top-right right-0 ring-1
                              ring-black ring-opacity-5 rounded-md shadow-lg w-56 z-10">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.SPACEKITTYADDRESS}
                  className={classNames(
                    active
                      ? "dark:bg-gray-600 bg-gray-100 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  SpaceKitty
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.SPACEOWLSADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  SpaceOwls
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.DRAGONDOODLEADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  Dragon Doodles
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.DOODNFTADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  DoodCats
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.DEDNFTADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  DedDoods
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.ELEMENTOWLSADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  ElementOwls
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.ELEMENTDOGSADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  ElementDogs
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.ELEMENTOCTOPUSADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  ElementOctopus
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.QAFADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  QAF
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.ROYALRATSADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  Royal Rats
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.CLASSICALCATSADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  Classical Cats
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.ANCIENTALIENSADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  The Ancient Aliens
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.PRIMORDIALPLANETOIDSADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  The primordial Planetoids
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.BADBUDDIESADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  Bad Buddies
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.BADBUDDIES2ADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  Bad Buddies2
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.BADBUDDIES3ADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  Bad Buddies3
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.SGBWHALEV1ADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  SGBWhales V1
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.SGBWHALEV2ADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  SGBWhales V2
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.SGBTURTLEADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  SGBTurtles
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.GANGSTERSEALADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  GangSter Seals
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link
                  to={`/mynft/` + config.GANGSTEROCTOPUSADDRESS}
                  className={classNames(
                    active
                      ? "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white"
                      : "dark:text-white text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}>
                  Gangster Octopuses
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
