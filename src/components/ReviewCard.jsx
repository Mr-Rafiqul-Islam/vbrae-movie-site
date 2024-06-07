import React from "react";
import Image from "./Image";
function ReviewCard({name, review, rating, img}) {
  return (
    <div className="!pt-[13px] md:!pt-[43px] md:!pb-[41px] md:!ps-[38px] !pb-[15px] !ps-[15px]  border-gradient">
      <div className="flex gap-4 mb-[7px] md:mb-[27px]">
        <Image src={img} className={`inline-block w-7 h-7 md:w-14 md:h-14`} />
        <div className="flex flex-col gap-1 md:gap-4">
          <h4 className="font-secondary font-medium text-[12px] md:text-2xl text-white">
            {name}
          </h4>
          <Image
            src={rating}
            className={`inline-block w-[73.29px] h-[11.95px] md:w-[164.15px] md:h-[26.77px]`}
          />
        </div>
      </div>
      
        <div>
        <p className="font-secondary font-normal text-[12px]  md:text-[16px] text-white ">
          {review}
        </p>
        </div>
      
    </div>
  );
}

export default ReviewCard;
