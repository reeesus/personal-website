import React, { useEffect } from "react";
import { Moon, Sun } from "react-feather";
import Cookies from "js-cookie";

const Header = () => {
  const [dark, setDark] = React.useState(false);
  const [spinning, setSpinning] = React.useState(false);

  const buttonHandler = () => {
    setSpinning(true);

    const newDarkMode = !dark;
    setDark(newDarkMode);

    document.body.classList.toggle("dark", newDarkMode);

    Cookies.set("darkMode", newDarkMode ? "true" : "false");

    setTimeout(() => {
      setSpinning(false);
    }, 700);
  };

  useEffect(() => {
    const savedDarkMode = Cookies.get("darkMode") === "true";
    setDark(savedDarkMode);

    if (savedDarkMode) {
      document.body.classList.toggle("dark", savedDarkMode);
    }
  }, []);

  return (
    <div className="p-10 border-b border-gruvbox-bg1 text-gruvbox-fg4 dark:border-gruvboxDark-bg1 dark:text-gruvboxDark-fg4">
      <div className="flex max-w-6xl items-center justify-between content-evenly mx-auto px-8">
        <a
          href="/"
          className="text-2xl hover:-translate-y-1 transition-transform duration-300 hidden md:contents"
        >
          👋
        </a>
        <div className="flex flex-row align-middle">
          <div className="flex flex-row justify-evenly gap-x-8 cursor-pointer">
            <div className="relative group">
              <div className="hover:-translate-y-1 transition-transform duration-300 hover:text-gruvbox-green">
                About
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-1 bg-gruvbox-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative group">
              <div className="hover:-translate-y-1 transition-transform duration-300 hover:text-gruvbox-green">
                Projects
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-1 bg-gruvbox-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative group">
              <div className="hover:-translate-y-1 transition-transform duration-300 hover:text-gruvbox-green">
                Blog
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-1 bg-gruvbox-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
        <button onClick={() => buttonHandler()}>
          {!dark && (
            <Moon
              className={`${
                spinning ? "-rotate-[360deg]" : ""
              } transition-transform duration-700`}
            />
          )}
          {dark && (
            <Sun
              className={`${
                spinning ? "-rotate-[360deg]" : ""
              } transition-transform duration-700`}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
