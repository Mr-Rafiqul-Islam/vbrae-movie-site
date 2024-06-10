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
              
                <Image src={bar} className={`inline-block lg:hidden w-[24px] h-[24px]`}/>
              
              <Link to={"/"}>
                <Image src={logo} className="w-[122px] h-[25px] lg:w-[213px] lg:h-[43px]" />
              </Link>
            </div>

            <div className="flex items-center lg:relative ">
              <input
                type="text"
                placeholder="Search products, sellers, deals..."
                className="hidden lg:flex  lg:w-[300px] lg:w-[500px] border border-gray-300 px-4 py-2 rounded-lg bg-[#1E2127] text-white placeholder:text-white"
              />

              <div className="lg:absolute mx-4 lg:mx-0 lg:top-[10px] lg:right-[10px] w-[25px] h-[25px] rounded-full bg-white lg:bg-transparent grid place-content-center">
                <Icon
                icon={`radix-icons:magnifying-glass`}
                className="lg:text-[#B2B8C2] text-2xl cursor-pointer"
                />
              </div>
            </div>
            <div className="flex justify-end gap-5">
              <Dollar className={"w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]"}/>
              <Heart className={"w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]"}/>
              <Link to={"/cart"} className="relative">
                <Bag className={"w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]"}/>
                <div className="absolute top-[-5px] right-[-5px] lg:right-[-10px] lg:w-[23px] lg:h-[23px] w-[15px] h-[15px] rounded-full bg-gradient-to-r from-[#FC00FF] to-[#00DBFF] text-white text-[11px] lg:text-[19px] flex justify-center items-center font-secondary font-bold ">
                  2
                </div>
              </Link>
              <UserIcon className={"w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]"}/>
            </div>
          </div>
        </div>
      </section>
      <hr className="container" />
    </>
  );
}

export default Header;
