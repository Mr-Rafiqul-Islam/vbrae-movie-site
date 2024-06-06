import React from "react";
import Image from "../components/Image";
import Line from "../assets/icons/revLine.png";
import ReviewStar from "../assets/icons/ReviewStar.svg";

function Review() {
  return (
    <section className="py-[72px]">
      <div className="container">
        <div className="flex">
          <div className="grid place-content-center w-1/4">
            <div className="text-center">
              <h3 className="font-third font-bold text-[12px] md:text-[36px] text-white">
                Trustpilot <br /> Reviews
              </h3>
              <Image src={Line} className={`min-w-[74px] md:my-[10px] my-2`} />
              <div className="flex gap-2 justify-center items-center">
                <h5 className="font-third font-bold text-[16px] md:text-[47px] text-[#38AAE6]">
                  5.0
                </h5>
                <Image
                  src={ReviewStar}
                  className={`md:w-[49.82px] w-[18.21px] md:h-[47.38px] h-[17.32px] my-[10px]`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
