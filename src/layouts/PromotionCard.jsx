import React from "react";
import Image from "../components/Image";
import saveBatch from "../assets/icons/saveBatch.png";
import Heading from "../components/Heading";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../components/Button";
import cn from "../lib/cn";

function PromotionCard({
  cardImg,
  cardTitle,
  iconsArray,
  fromPrice,
  toPrice,
  rating,
  className,
  discount
}) {
  return (
    <section className="!py-[30px] lg:py-[72px]">
      <div className="container">
        <div
          className={cn(
            "flex gap-[15px] lg:gap-[30px] flex-col lg:flex-row",
            className
          )}
        >
          <div className="h-auto flex items-center lg:basis-1/2">
            <Image
              src={cardImg}
              className={`inline-block min-w-[327px] min-h-[180px]`}
            />
          </div>
          <div className="bg-primary rounded-lg !p-6 lg:!p-[45px] border-gradient relative lg:basis-1/2">
            <div className="absolute grid place-content-center text-white top-0 lg:right-4 right-3">
              <div className="relative">
                <Image src={saveBatch} className={`w-[44px] h-[51px] lg:w-[88px] lg:h-[102px]`}/>
                <div className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
                  <p className="text-[13px] lg:text-[26px] font-secondary mb-3">
                    Save <br />{discount}
                  </p>
                  
                </div>
              </div>
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
              <div className="w-[30px] md:w-10 lg:w-[53px]">
                <p className="text-[10px] md:text-sm lg:text-[18px] font-secondary text-secondary">
                  From
                </p>
                <p className="text-[10px] md:text-sm lg:text-[18px] font-secondary text-secondary line-through">
                  {fromPrice} to
                </p>
              </div>
              <h4 className="text-[14px] md:text-[21px] lg:text-[28px] font-primary text-third">
                {toPrice}
              </h4>
              <Image
                src={rating}
                className={`inline-block w-[73.29px] h-[11.95px] md:w-[108px] md:h-[18.95px] lg:w-[164.15px] lg:h-[26.77px]`}
              />
            </div>
            <Button
              text={"Shop Now"}
              className={`flex-row-reverse mt-2 lg:mt-5`}
              icon={<Icon icon="la:cart-plus" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromotionCard;
