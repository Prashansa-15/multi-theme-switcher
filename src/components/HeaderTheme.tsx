import React, { useEffect, useState, useContext } from "react";
import { ThemeContext, ThemeType } from '../context/ThemeContext';
import { Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import menuData from "./menu-data";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  let location = useLocation();
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), [location]);

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                to="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-3"
                } `}
              >
                <img
                  src="logo.jpg"
                  alt="logo"
                  className="w-full dark:hidden h-70"
                />
                <img
                  src="/images/logo/logo.jpg"
                  alt="logo"
                  className="hidden w-full dark:block h-70"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-end px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        <Link
                            to={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                                location.pathname === menuItem.path
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                      </li>
                    ))}
                    <li className="group relative flex">
                        <select
                            id="group-option"
                            name="multi-theme-options"
                            value={theme}
                            onChange={(e) => setTheme(e.target.value as any)}
                            className="ml-4 bg-[var(--btn-bg)] py-1 px-2 rounded"
                        >
                            <option value="theme-light">Light</option>
                            <option value="theme-dark">Dark</option>
                            <option value="theme-colorful">Colorful</option>
                        </select>
                    </li>
                  </ul>
                </nav>
                
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
