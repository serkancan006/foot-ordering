import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from "../ui/Search";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useRouter } from "next/router";

const Header = () => {
  const [IsSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setisMenuModal] = useState(false);

  const router = useRouter();
  //console.log(router);

  return (
    <div
      className={` h-[5.5rem] z-50  relative ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary"
      }`}
    >
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav
          className={`sm:static sm:w-auto sm:h-auto sm:text-white sm:bg-transparent sm:flex 
          hidden absolute top-0 left-0  w-full h-screen text-black bg-white  ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Menu</a>
            </li>{" "}
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">About</a>
            </li>{" "}
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Book Table</a>
            </li>
          </ul>
          {isMenuModal && (
            <button
              className="absolute top-4 right-4 z-50"
              onClick={() => setisMenuModal(false)}
            >
              <GiCancel size={25} className="transition-all" />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="">
            <FaUserAlt className="hover:text-primary transition-all" />
          </a>
          <a href="">
            <FaShoppingCart className="hover:text-primary transition-all" />
          </a>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all" />
          </button>
          <a href="" className="md:inline-block hidden sm">
            <button className="btn-primary">Order Online</button>
          </a>
          <button
            className="sm:hidden inline-block"
            onClick={() => setisMenuModal(true)}
          >
            <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
          </button>
        </div>
      </div>
      {IsSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
