const PropertiesCard = ({ propertiy, value }) => {
  return (
    <div className="border-2 border-gray-100 dark:border-gray-700 m-1 px-3 py-2 rounded-2xl">
      <div
        className="font-general-regular 
                      text-ternary-dark
                      dark:text-white
                      text-xs
                      sm:text-sm
                      pt-3
                      font-regular
                      text-center
                      max-h-25
                      h-14
                      ">
        {propertiy}
      </div>
      <div
        className="font-general-regular 
                      text-center text-ternary-dark
                      dark:text-white
                      text-xs
                      sm:text-xs
                      font-bold
                      bottom-0
                      ">
        {value}
      </div>
    </div>
  );
};

export default PropertiesCard;
