import React from "react";
import Image from "./Image";
function ReviewCard({name, review, rating, img}) {
  return (
    <div className="!pt-[13px] lg:!pt-[43px] lg:!pb-[41px] lg:!ps-[38px] !pb-[15px] !ps-[15px]  border-gradient">
      <div className="flex gap-4 mb-[7px] lg:mb-[27px]">
        <Image src={img} className={`inline-block w-7 h-7 lg:w-14 lg:h-14`} />
        <div className="flex flex-col gap-1">
          <h4 className="font-secondary font-medium text-[12px] lg:text-2xl text-white">
            {name}
          </h4>
          <Image
            src={rating}
            className={`inline-block w-[73.29px] h-[11.95px] lg:w-[164.15px] lg:h-[26.77px]`}
          />
        </div>
      </div>
      
        <div>
        <p className="font-secondary font-normal text-[12px]  lg:text-[16px] text-white ">
          {review}
        </p>
        </div>
      
    </div>
  );
}

export default ReviewCard;
