"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathUrl = usePathname();

  useEffect(() => {
    const handleStickyMenu = () => {
      setStickyMenu(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  const toggleDropdown = (index: number) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null);
    } else {
      setOpenDropdownIndex(index);
    }
  };

  return (
    <header
      className={`fixed left-0 top-0 z-[99999] w-full transition-all ${
        stickyMenu
          ? "bg-white py-4 shadow dark:bg-black"
          : "py-7"
      }`}
    >
      <div className="relative mx-auto flex max-w-[1390px] items-center justify-between px-4 md:px-8 2xl:px-0">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full xl:w-1/4">
          <Link href="/" className="relative flex h-[30px] w-[119px] items-center">
            <Image
              src="/images/logo/logo-light.png"
              alt="logo"
              fill
              className="block dark:hidden object-contain"
            />
            <Image
              src="/images/logo/logo-dark.png"
              alt="logo"
              fill
              className="hidden dark:block object-contain"
            />
          </Link>

          {/* Hamburger Button */}
          <button
            aria-label="Toggle Menu"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <div className="relative h-6 w-6">
              <span
                className={`absolute block h-0.5 w-full bg-black dark:bg-white transition-all duration-300 ${
                  navigationOpen ? "top-1/2 rotate-45" : "top-1"
                }`}
              ></span>
              <span
                className={`absolute block h-0.5 w-full bg-black dark:bg-white transition-all duration-300 ${
                  navigationOpen ? "opacity-0" : "top-1/2"
                }`}
              ></span>
              <span
                className={`absolute block h-0.5 w-full bg-black dark:bg-white transition-all duration-300 ${
                  navigationOpen ? "top-1/2 -rotate-45" : "bottom-1"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`xl:flex xl:items-center xl:justify-between xl:visible xl:h-auto xl:w-full ${
            navigationOpen
              ? "visible mt-4 h-auto w-full rounded-md bg-white p-7.5 shadow dark:bg-blacksection"
              : "invisible h-0 w-0"
          }`}
        >
          <nav className="w-full">
            <ul className="flex flex-col gap-5 xl:flex-row xl:gap-10">
              {menuData.map((menuItem, index) => (
                <li key={index} className={menuItem.submenu ? "relative group" : ""}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center gap-2 hover:text-primary"
                      >
                        {menuItem.title}
                        <svg
                          className="h-3 w-3 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                      </button>

                      {/* Dropdown */}
                      <ul
                        className={`absolute left-0 mt-2 w-64 rounded-lg border bg-white shadow dark:bg-gray-800 dark:border-gray-700 ${
                          openDropdownIndex === index ? "block" : "hidden"
                        }`}
                      >
                        {menuItem.submenu.map((item, subIndex) => (
                          <li key={subIndex} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Link
                              href={item.path}
                              className="block px-5 py-3.5"
                            >
                              <div>
                                <p className="font-semibold text-gray-900 dark:text-white">
                                  {item.title}
                                </p>
                                {item.description && (
                                  <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={menuItem.path}
                      className={`hover:text-primary ${
                        pathUrl === menuItem.path ? "text-primary" : ""
                      }`}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggler & Sign In */}
          <div className="mt-7 flex items-center gap-6 xl:mt-0">
            <ThemeToggler />
            <Link
              href="https://app.fincorpx.in/login"
              className="rounded-full bg-primary px-7.5 py-2.5 text-white hover:bg-primaryho transition-all"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
