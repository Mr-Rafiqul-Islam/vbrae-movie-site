import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import Button from "../components/Button";
import Bag from "../assets/icons/Bag";
import UserIcon from "../assets/icons/UserIcon";
import Heart from "../assets/icons/Heart";
import Dollar from "../assets/icons/Dollar";
import bar from "../assets/icons/menubar.png";
import { Icon } from "@iconify/react/dist/iconify.js";

function Header() {
  return (
    <>
      <section className="pt-[50px] pb-[37px]">
        <div className="container">
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              
                <Image src={bar} className={`inline-block md:hidden w-[24px] h-[24px]`}/>
              
              <Link to={"/"}>
                <Image src={logo} className="w-[122px] h-[25px] md:w-[213px] md:h-[43px]" />
              </Link>
            </div>

            <div className="flex items-center md:relative ">
              <input
                type="text"
                placeholder="Search products, sellers, deals..."
                className="hidden md:flex  md:w-[300px] lg:w-[500px] border border-gray-300 px-4 py-2 rounded-lg bg-[#1E2127] text-white placeholder:text-white"
              />

              <div className="md:absolute mx-4 md:mx-0 md:top-[10px] md:right-[10px] w-[25px] h-[25px] rounded-full bg-white md:bg-transparent grid place-content-center">
                <Icon
                icon={`radix-icons:magnifying-glass`}
                className="md:text-[#B2B8C2] text-2xl cursor-pointer"
                />
              </div>
            </div>
            <div className="flex justify-end gap-5">
              <Dollar className={"w-[24px] h-[24px] md:w-[40px] md:h-[40px]"}/>
              <Heart className={"w-[24px] h-[24px] md:w-[40px] md:h-[40px]"}/>
              <Link to={"/cart"} className="relative">
                <Bag className={"w-[24px] h-[24px] md:w-[40px] md:h-[40px]"}/>
                <div className="absolute top-[-5px] right-[-5px] md:right-[-10px] md:w-[23px] md:h-[23px] w-[15px] h-[15px] rounded-full bg-gradient-to-r from-[#FC00FF] to-[#00DBFF] text-white text-[11px] md:text-[19px] flex justify-center items-center font-secondary font-bold ">
                  2
                </div>
              </Link>
              <UserIcon className={"w-[24px] h-[24px] md:w-[40px] md:h-[40px]"}/>
            </div>
          </div>
        </div>
      </section>
      <hr className="container" />
    </>
  );
}

export default Header;
