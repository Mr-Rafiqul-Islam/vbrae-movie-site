import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Icon1 from "../assets/icons/Icon1";
import Icon2 from "../assets/icons/Icon2";
import Icon3 from "../assets/icons/Icon3";
import Icon4 from "../assets/icons/Icon4";
import Button2 from "../components/Button2";

const iconArray = [
  { icon: "ri:playstation-fill", id: 1 },
  { icon: "ri:xbox-fill", id: 2 },
  { icon: "cbi:nintendo-switch-logo", id: 3 },
  { icon: "mdi:mouse-scroll-wheel", id: 4 },
];
const iconArrayComponents = [
  { icon: <Icon1 className={`cursor-pointer`} />, id: 5 },
  { icon: <Icon2 className={`cursor-pointer`} />, id: 6 },
  { icon: <Icon3 className={`cursor-pointer`} />, id: 7 },
  { icon: <Icon4 className={`cursor-pointer`} />, id: 8 },
];
function NavBar() {
  const [isActive, setIsActive] = useState();

  const toggleActive = (index) => {
    setIsActive((prevActiveIndex) =>
      prevActiveIndex === index ? null : index
    );
  };
  return (
    <section className="py-[28px] sm:py-[25px]">
      <div className="container">
        <div className="flex">
          {/* 1st col start */}
          <div className="flex justify-evenly sm:border-r-2 border-white w-full">
            {iconArray.map((icon, index) => (
              <div className="flex flex-col gap-y-5">
                <div
                  onClick={() => toggleActive(icon.id)}
                  key={index}
                  className={`grid place-content-center w-[87px] h-[87px] rounded-lg hover:bg-gradient-to-r from-gradF to-gradT ${
                    isActive === icon.id
                      ? "bg-gradient-to-r from-gradF to-gradT"
                      : ""
                  }`}
                >
                  <Icon
                    icon={icon.icon}
                    className={`text-white text-5xl cursor-pointer`}
                  />
                </div>
                {isActive === icon.id && (
                  <div className="relative">
                    <div
                      className={`flex gap-x-3 -bottom-10 absolute ${
                        isActive === 3 || isActive === 4 ? "right-0" : "left-0"
                      }`}
                    >
                      <Button2 text={"Playstation"} />
                      <Button2 text={"PS4"} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* 1st col end */}
          {/* 2nd col  start*/}
          <div className="hidden sm:flex w-full">
            <div className="flex justify-evenly border-white w-full">
              {iconArrayComponents.map((icon, index) => (
                <div className="flex flex-col gap-y-5">
                  <div
                    onClick={() => toggleActive(icon.id)}
                    key={index}
                    className={`grid place-content-center w-[87px] h-[87px] rounded-lg hover:bg-gradient-to-r from-gradF to-gradT ${
                      isActive === icon.id
                        ? "bg-gradient-to-r from-gradF to-gradT"
                        : ""
                    }`}
                  >
                    {icon.icon}
                  </div>
                  {isActive === icon.id && (
                  <div className="relative">
                    <div
                      className={`flex gap-x-3 -bottom-10 absolute ${
                        isActive === 7 || isActive === 8 ? "right-0" : "left-0"
                      }`}
                    >
                      <Button2 text={"Playstation"} />
                      <Button2 text={"PSVR"} />
                      <Button2 text={"PS4"} />
                    </div>
                  </div>
                )}
                </div>
              ))}
            </div>
          </div>
          {/* 2nd col end */}
        </div>
      </div>
    </section>
  );
}

export default NavBar;
