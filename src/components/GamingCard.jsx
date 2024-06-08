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
    <div className="w-[158px] md:w-[394px] bg-primary rounded-lg p-[6px] md:p-4">
      <div className="relative">
        <Image className={`w-[146px] md:w-full inline-block`} src={cardImg} />
      </div>
      <SubHeading
        className={`mt-2 mb-2.5 md:mt-4 md:mb-6 md:!text-[28px]`}
        text={title}
      />
      <div className="flex justify-between items-center">
        <div className="w-[30px] md:w-[53px]">
          <p className="text-[10px] md:text-[18px] font-secondary text-secondary">
            From
          </p>
          <p className="text-[10px] md:text-[18px] font-secondary text-secondary line-through">
            $70 to
          </p>
        </div>
        <h4 className="text-[14px] md:text-[28px] font-primary text-third">
          {price}
        </h4>
        <div className="flex items-center">
          <Image src={onestar} className={`w-[10.53px] md:w-[29.44px]`} />
          <Image src={onestar} className={`w-[10.53px] md:w-[29.44px]`} />
          <Image src={onestar} className={`w-[10.53px] md:w-[29.44px]`} />
          <Image src={onestar} className={`w-[10.53px] md:w-[29.44px]`} />
          <Image
            src={onestar}
            className={`opacity-40 w-[10.53px] md:w-[29.44px]`}
          />
        </div>
      </div>
      <div className="flex justify-center mt-[11px] md:mt-9">
      <div className="flex gap-3 md:gap-6">
        <Image
          src={ps}
          className={`w-[13px] h-[13px] md:w-[33px] md:h-[33px]`}
        />
        <Image
          src={xb}
          className={`w-[13px] h-[13px] md:w-[33px] md:h-[33px]`}
        />
        <Image
          src={Line}
          className={`w-[13px] h-[13px] md:w-[33px] md:h-[33px]`}
        />
        <Image
          src={user}
          className={`w-[13px] h-[13px] md:w-[33px] md:h-[33px]`}
        />
        <Image
          src={key}
          className={`w-[13px] h-[13px] md:w-[33px] md:h-[33px]`}
        />
      </div>
      </div>
    </div>
  );
}

export default GamingCard;
