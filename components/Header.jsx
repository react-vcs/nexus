"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = (props) => {
  let categories = props?.data?.categories?.data?.slice(1, 5);
  const [userMenu, setuserMenu] = useState(false);
  const [mobileNavMenu, setmobileNavMenu] = useState(false);
  const [showSearch, setshowSearch] = useState(false);

  const toggleUserMenu = () => {
    setuserMenu(!userMenu);
  };

  const toggleMobileNavMenu = () => {
    setmobileNavMenu(!mobileNavMenu);
  };

  const toggleSearch = () => {
    setshowSearch(!showSearch);
  };

  const submitSearchForm = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get the search input value
    const searchInput = event.target.elements["default-search"].value;

    if (searchInput.trim() === "") {
      // If search input is empty, redirect to the home page
      window.location.href = "/";
    } else {
      // If search input is not empty, redirect to the search page with the keyword
      window.location.href = `/search?keyword=${encodeURIComponent(
        searchInput
      )}`;
    }
  };
  return (
    <>
      <nav className="bg-black py-4">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div
              className="absolute inset-y-0 left-0 flex items-center sm:hidden"
              onClick={toggleMobileNavMenu}
            >
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link href={"/"}>
                  <Image
                    src="/img/logo.svg"
                    alt="nexus logo"
                    width={150}
                    height={150}
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {categories.map((menu, index) => (
                    <Link
                      href={`category?id=${menu?.id}&name=${menu?.name}`}
                      className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                      key={index}
                    >
                      {menu?.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button type="button">
                <Image
                  src={"/img/search.svg"}
                  width={24}
                  height={100}
                  alt="search icon"
                  onClick={toggleSearch}
                />
              </button>

              <div
                className={`${
                  showSearch ? "w-full" : "w-0"
                } overlay flex justify-center items-center`}
              >
                <Link
                  href={"#"}
                  className="closebtn text-white"
                  onClick={toggleSearch}
                >
                  &times;
                </Link>
                <div className="overlay-content w-10/12 ">
                  <form onSubmit={submitSearchForm}>
                    <label
                      htmlFor="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Mockups, Logos..."
                        required
                      />
                      <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* Search End  */}
              <div className="relative ml-3">
                <div onClick={toggleUserMenu}>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <Image
                      className="h-8 w-8 rounded-full"
                      src="/img/profile.avif"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </button>
                </div>

                {/* <!--
            Dropdown menu, show/hide based on menu state. */}

                {/* Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
                <div
                  className={`${
                    userMenu ? "block" : "none"
                  } absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  {/* <!-- Active: "bg-gray-100", Not Active: "" -->  */}
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                  >
                    Settings
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${mobileNavMenu ? "block" : "none"} `}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {categories.map((menu, index) => {
              return (
                <Link
                  href={`category?id=${menu?.id}&name=${menu?.name}`}
                  className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                  key={index}
                >
                  {menu?.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
