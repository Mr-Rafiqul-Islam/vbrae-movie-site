import React from "react";
import ps from "../assets/icons/ps.svg";
import xb from "../assets/icons/xb.svg";
import Line from "../assets/icons/LineHorizontal.svg";
import user from "../assets/icons/user.svg";
import key from "../assets/icons/key.svg";
import stargrp from "../assets/icons/stargrp.png";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "../components/Image";

function BannerPost({ className }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="flex justify-around w-[161px] lg:w-[248px]">
        <Image
          src={ps}
          className={`w-[21px] h-[21px] lg:w-[33px] lg:h-[33px]`}
        />
        <Image
          src={xb}
          className={`w-[21px] h-[21px] lg:w-[33px] lg:h-[33px]`}
        />
        <Image
          src={Line}
          className={`w-[21px] h-[21px] lg:w-[33px] lg:h-[33px]`}
        />
        <Image
          src={user}
          className={`w-[21px] h-[21px] lg:w-[33px] lg:h-[33px]`}
        />
        <Image
          src={key}
          className={`w-[21px] h-[21px] lg:w-[33px] lg:h-[33px]`}
        />
      </div>
      <Heading className="text-white my-2 lg:my-5" text="Death Stranding" />
      <div className="flex gap-1 lg:gap-3">
        <p className="font-secondary font-normal text-[13px] lg:text-[18px] text-white self-end">
          From
        </p>
        <h4 className="font-primary font-normal text-[21px] lg:text-[28px] text-white line-through">
          $70
        </h4>
        <p className="font-secondary font-normal text-[13px] lg:text-[18px] text-white self-end">
          to
        </p>
        <h4 className="font-primary font-normal text-[21px] lg:text-[28px] text-third ">
          $59.99
        </h4>
        <Image src={stargrp} className={`!hidden lg:!block`} />
      </div>
      <Button
        text={"Shop Now"}
        className={`flex-row-reverse mt-2 lg:mt-5`}
        icon={<Icon icon="la:cart-plus" />}
      />
    </div>
  );
}

export default BannerPost;
