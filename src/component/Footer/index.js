const socialLinks = [
  {
    id: 1,
    icon: <i className="fa-github fab" />,
    url: "https://github.com/DOODCAT",
  },
  {
    id: 2,
    icon: <i className="fa-twitter fab" />,
    url: "https://twitter.com/SpaceCatsSGB",
  },

  {
    id: 4,
    icon: <i className="fa-discord fab" />,
    url: "https://discord.gg/gUYSw7ZB7R",
  },
];

const AppFooter = () => {
  return (
    <div className="container mx-auto">
      <div className="border-gray-50 border-t-2 dark:border-gray-700 mt-20 pb-3 pt-20 sm:pt-30">
        {/* Footer social links */}
        <div className="flex flex-col font-general-regular items-center justify-center mb-12 sm:mb-10">
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="bg-gray-50 cursor-pointer dark:bg-ternary-dark dark:hover:text-indigo-400 duration-300 hover:bg-gray-100 hover:text-indigo-500 p-4 rounded-lg shadow-sm text-gray-400">
                <i className="md:text-3xl sm:text-2xl text-xl">{link.icon}</i>
              </a>
            ))}
          </ul>

          <p className="dark:text-gray-500 font-bold mb-5 my-10 sm:text-xl text-ternary-dark text-xl">
            @2022 MARKETPLACE
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
