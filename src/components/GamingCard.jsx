import React from "react";
import Image from "./Image";
import SubHeading from "./SubHeading";
import onestar from "../assets/icons/starone.svg";
import ps from "../assets/icons/ps.svg";
import xb from "../assets/icons/xb.svg";
import Line from "../assets/icons/LineHorizontal.svg";
import user from "../assets/icons/user.svg";
import key from "../assets/icons/key.svg";
function GamingCard({cardImg,title,price}) {
  return (
    <div className=" bg-primary rounded-lg p-[6px] lg:p-4">
      <div className="relative">
        <Image className={`min-w-[146px] lg:w-full inline-block`} src={cardImg} />
      </div>
      <SubHeading
        className={`mt-2 mb-2.5 lg:mt-4 lg:mb-6 lg:!text-[28px]`}
        text={title}
      />
      <div className="flex gap-2 items-center">
        <div className="w-[30px] lg:w-[53px]">
          <p className="text-[10px] lg:text-[18px] font-secondary text-secondary">
            From
          </p>
          <p className="text-[10px] lg:text-[18px] font-secondary text-secondary line-through">
            $70 to
          </p>
        </div>
        <h4 className="text-[14px] lg:text-[28px] font-primary text-third">
          {price}
        </h4>
        <div className="flex items-center">
          <Image src={onestar} className={`w-[10.53px] lg:w-[29.44px]`} />
          <Image src={onestar} className={`w-[10.53px] lg:w-[29.44px]`} />
          <Image src={onestar} className={`w-[10.53px] lg:w-[29.44px]`} />
          <Image src={onestar} className={`w-[10.53px] lg:w-[29.44px]`} />
          <Image
            src={onestar}
            className={`opacity-40 w-[10.53px] lg:w-[29.44px]`}
          />
        </div>
      </div>
      <div className="flex justify-center mt-[11px] lg:mt-9">
      <div className="flex gap-3 lg:gap-6">
        <Image
          src={ps}
          className={`w-[13px] h-[13px] lg:w-[33px] lg:h-[33px]`}
        />
        <Image
          src={xb}
          className={`w-[13px] h-[13px] lg:w-[33px] lg:h-[33px]`}
        />
        <Image
          src={Line}
          className={`w-[13px] h-[13px] lg:w-[33px] lg:h-[33px]`}
        />
        <Image
          src={user}
          className={`w-[13px] h-[13px] lg:w-[33px] lg:h-[33px]`}
        />
        <Image
          src={key}
          className={`w-[13px] h-[13px] lg:w-[33px] lg:h-[33px]`}
        />
      </div>
      </div>
    </div>
  );
}

export default GamingCard;
