import { useContext } from 'react'
import { FiSearch } from 'react-icons/fi'
import NftSingle from '../projects/NftSingle'
import { NftsContext } from '../../context/NftsContext'
import NftsFilter from '../projects/NftsFilter'

const NftList = () => {
  const {
    nfts,
    searchNft,
    setSearchNft,
    searchProjectsByTitle,
    selectNft,
    setSelectNft,
    selectProjectsByCategory,
  } = useContext(NftsContext)

  return (
    <div className="mt-5 py-15 sm:mt-10 sm:py-10">
      <div className="text-center">
        <p
          className="dark:text-white
                        font-bold
                        font-general-medium
                        mb-1 sm:text-4xl
                        text-2xl
                        text-ternary-dark
                        "
        >
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
                      "
        >
          Search nfts by name or filter by collection
        </h3>
        <div
          className=" 
                        sm:flex
                        sm:w-full
                        border-b border-primary-light
                        dark:border-gray-700
                        pb-3
                        gap-3
                        "
        >
          <div className="flex gap-2 sm:w-2/4 w-full">
            <span
              className="
                          sm:block
                          bg-primary-light
                          dark:bg-ternary-dark
                          p-2.5
                          shadow-sm
                          rounded-xl
                          cursor-pointer
                          "
            >
              <FiSearch className="dark:text-white h-5 text-ternary-dark w-5"></FiSearch>
            </span>
            <input
              onChange={(e) => {
                setSearchNft(e.target.value)
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
              type="search"
              required=""
              placeholder="Search NFTs"
              aria-label="Name"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mt-6 sm:gap-10 sm:grid-cols-3">
        {selectNft
          ? selectProjectsByCategory.map((nft) => (
              <NftSingle
                title={nft.title}
                category={nft.category}
                image={nft.img}
                key={nft.id}
              />
            ))
          : searchNft
          ? searchProjectsByTitle.map((nft) => (
              <NftSingle
                title={nft.title}
                category={nft.category}
                image={nft.img}
                key={nft.id}
              />
            ))
          : nfts.map((nft) => (
              <NftSingle
                title={nft.title}
                category={nft.category}
                image={nft.img}
                key={nft.id}
              />
            ))}
      </div>
    </div>
  )
}

export default NftList
