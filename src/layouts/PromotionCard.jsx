import React from "react";
import Image from "../components/Image";

import Heading from "../components/Heading";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../components/Button";
import cn from "../lib/cn";

function PromotionCard({cardImg, cardTitle, iconsArray, fromPrice, toPrice,rating, className}) {
  
  return (
    <section className="!py-[30px] lg:py-[72px]">
      <div className="container">
        <div className={cn("flex gap-[15px] lg:gap-[30px] flex-col lg:flex-row", className)}>
          <div className="h-auto">
            <Image src={cardImg} className={`inline-block min-w-[327px] min-h-[180px]`} />
          </div>
          <div className="bg-primary rounded-lg !p-6 lg:!p-[45px] border-gradient relative">
            <div className="absolute grid place-content-center text-white bg-third w-[44px] h-[51px] lg:w-[88px] lg:h-[102px] top-0 right-0">
              <p>Save</p>
              <p>25%</p>
            </div>
            <div className="flex gap-2 items-center min-h-[19px] min-w-[170.58px] max-w-[305.03px] max-h-[33.57px]">
              {iconsArray.map((icon, index) => (
                <Image
                  className={`min-w-[21.82px] min-h-[16.84px] max-h-[33.57px] max-w-[33.57px] inline-block`}
                  src={icon}
                  key={index}
                />
              ))}
            </div>
            <Heading text={cardTitle} className={`my-4`} />
            <div className="flex gap-2 items-center">
              <div className="w-[30px] lg:w-[53px]">
                <p className="text-[10px] lg:text-[18px] font-secondary text-secondary">
                  From
                </p>
                <p className="text-[10px] lg:text-[18px] font-secondary text-secondary line-through">
                  {fromPrice} to
                </p>
              </div>
              <h4 className="text-[14px] lg:text-[28px] font-primary text-third">
                {toPrice}
              </h4>
              <Image
                src={rating}
                className={`inline-block w-[73.29px] h-[11.95px] lg:w-[164.15px] lg:h-[26.77px]`}
              />
            </div>
            <Button text={"Shop Now"} className={`flex-row-reverse mt-2 lg:mt-5`} icon={<Icon icon="la:cart-plus"/>}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromotionCard;
