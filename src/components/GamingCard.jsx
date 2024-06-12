import React from "react";
import Image from "./Image";
import SubHeading from "./SubHeading";
import onestar from "../assets/icons/starone.svg";
import ps from "../assets/icons/ps.svg";
import xb from "../assets/icons/xb.svg";
import Line from "../assets/icons/LineHorizontal.svg";
import user from "../assets/icons/user.svg";
import key from "../assets/icons/key.svg";
import heart from "../assets/icons/heart (1).svg";
import cn from "../lib/cn";
function GamingCard({ cardImg, title, price, className }) {
  return (
    <div
      className={cn("bg-primary rounded-lg p-[6px] sm:p-3 lg:p-4", className)}
    >
      <div className="relative">
        <div className="!w-11 !h-[22px] xl:!w-[86px] xl:!h-[54px] bg-gradient-to-r from-[#FF0000] to-[#FFC700] grid place-content-center rounded-full absolute top-2 left-2 text-[12px] xl:text-2xl font-secondary font-semibold">
          -25%
        </div>
        <Image
          className={`min-w-[146px] lg:w-full inline-block`}
          src={cardImg}
        />
        <div className="hidden lg:grid lg:absolute top-1 right-1 bg-white/80 rounded-full w-[54px] h-[54px]  lg:place-content-center">
          <Image src={heart} className={"inline-block cursor-pointer"} />
        </div>
      </div>
      <SubHeading
        className={`mt-2 mb-2.5 lg:mt-4 lg:mb-6 lg:!text-[28px]`}
        text={title}
      />
      <div className="flex gap-2 items-center">
        <div className="w-[30px] md:w-10 lg:w-[53px]">
          <p className="text-[10px] md:text-sm lg:text-[18px] font-secondary text-secondary">
            From
          </p>
          <p className="text-[10px] md:text-sm lg:text-[18px] font-secondary text-secondary line-through">
            $70 to
          </p>
        </div>
        <h4 className="text-[14px] md:text-[21px] lg:text-[28px] font-primary text-third">
          {price}
        </h4>
        <div className="flex items-center">
          <Image
            src={onestar}
            className={`w-[10.53px] md:w-[17.53px] lg:w-[29.44px]`}
          />
          <Image
            src={onestar}
            className={`w-[10.53px] md:w-[17.53px] lg:w-[29.44px]`}
          />
          <Image
            src={onestar}
            className={`w-[10.53px] md:w-[17.53px] lg:w-[29.44px]`}
          />
          <Image
            src={onestar}
            className={`w-[10.53px] md:w-[17.53px] lg:w-[29.44px]`}
          />
          <Image
            src={onestar}
            className={`opacity-40 w-[10.53px] md:w-[17.53px] lg:w-[29.44px]`}
          />
        </div>
      </div>
      <div className="flex justify-center mt-[11px] md:mt-5 lg:mt-9">
        <div className="flex gap-3 lg:gap-6">
          <Image
            src={ps}
            className={`w-[13px] h-[13px] md:w-5 md:h-5 lg:w-[33px] lg:h-[33px]`}
          />
          <Image
            src={xb}
            className={`w-[13px] h-[13px] md:w-5 md:h-5 lg:w-[33px] lg:h-[33px]`}
          />
          <Image
            src={Line}
            className={`w-[13px] h-[13px] md:w-5 md:h-5 lg:w-[33px] lg:h-[33px]`}
          />
          <Image
            src={user}
            className={`w-[13px] h-[13px] md:w-5 md:h-5 lg:w-[33px] lg:h-[33px]`}
          />
          <Image
            src={key}
            className={`w-[13px] h-[13px] md:w-5 md:h-5 lg:w-[33px] lg:h-[33px]`}
          />
        </div>
      </div>
    </div>
  );
}

export default GamingCard;
