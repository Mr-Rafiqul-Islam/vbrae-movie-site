import React from "react";
import SubHeading from "./SubHeading";
import Image from "./Image";
import Button2 from "./Button2";
import DealsLine from "../assets/images/DealsLine1.png";

function SectionHeading({title,btntext}) {
  return (
    <div className="flex justify-between items-center mb-[11px] lg:mb-[35px]">
      <SubHeading text={title} className={``} />
      <Image
        src={DealsLine}
        className={`inline-block max-w-[133px] sm:max-w-[350px] lg:max-w-[400px] xl:max-w-[600px] 2xl:max-w-[672px]`}
      />
      <Button2 text={btntext} className={``} />
    </div>
  );
}

export default SectionHeading;
