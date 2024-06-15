import React from "react";
import Image from "./Image";

function CardSmall({ cardTitle, fromPrice, toPrice, cardImg,discount}) {
  return (
    <div className="bg-primary rounded-3xl md:ps-[10px] ps-2 py-2 md:py-[10px] pe-4 md:pe-[30px]">
      <div className="flex items-center">
        <div className="me-[13px]">
        <Image src={cardImg} className={`inline-block w-[72px] md:w-[100px]  2xl:w-[128px]`}/>
        </div>
        <div className="me-14 lg:me-2 2xl:me-14">
          <h4 className="text-[16px] md:text-[20px] 2xl:text-[26px] font-primary text-white">{cardTitle}</h4>
          <div className="flex gap-2 items-center">
          <div className="w-[36px] md:w-10 2xl:w-[53px]">
            <p className="text-[12px] md:text-sm 2xl:text-[16px] font-secondary text-secondary">
              From
            </p>
            <p className="text-[12px] md:text-sm 2xl:text-[16px] font-secondary text-secondary line-through">
              {fromPrice} to
            </p>
          </div>
          <h4 className="text-[16px] md:text-[20px] 2xl:text-[26px] font-primary text-third">
            {toPrice}
          </h4>
          </div>
        </div>
        <div className="mt-7">
        <button className="border border-[#28B8E3] text-[#28B8E3] text-[11px] md:text-[16px] 2xl:text-[20px] font-secondary md:p-[11px] p-[6px] rounded-xl">Save {discount}</button>
        </div>
      </div>
    </div>
  );
}

export default CardSmall;
