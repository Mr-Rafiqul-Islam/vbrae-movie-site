import React from "react";
import cn from "../lib/cn";

function SubHeading({ className, text, ...restprops }) {
  return (
    <h3
      className={cn(
        "font-primary font-normal text-sm inline-block md:text-[21px] xl:text-[36px] text-white",
        className
      )}
      {...restprops}
    >
      {text}
    </h3>
  );
}

export default SubHeading;
