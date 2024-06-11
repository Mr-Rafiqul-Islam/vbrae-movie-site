import React from "react";
import SubHeading from "../components/SubHeading";
import Image from "../components/Image";
import Button2 from "../components/Button2";
import DealsLine from "../assets/images/DealsLine1.png";
import GamingCard from "../components/GamingCard";
import cardimg1 from "../assets/images/cardimg1.png"; 
import cardimg2 from "../assets/images/cardimg2.png";
import cardimg3 from "../assets/images/cardimg3.png";
import cardimg4 from "../assets/images/cardimg4.png";

function NewArrivals() {
  return (
    <section className="!py-[30px] lg:py-[72px]">
      <div className="container">
        <div className="lg:!py-[40px] !py-5 lg:!px-[30px]">
          {/* upper part starts*/}
          <div className="flex justify-between items-center mb-[11px] lg:mb-[35px]">
            <SubHeading text={`New Arrivals`} className={``} />
            <Image
              src={DealsLine}
              className={`!inline-block min-w-[133px] lg:max-w-[672px]`}
            />
            <Button2 text={`Browse All`} className={``} />
          </div>
          {/* upper part ends*/}
          {/* lower part starts */}
          <div className="new">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 xl:grid-cols-4">
              <GamingCard className={`border-gradient`} cardImg={cardimg1} title={`Sekiro Shadows Die...`} price={`$59.99`} />
              <GamingCard className={`border-gradient`} cardImg={cardimg1} title={`Sekiro Shadows Die...`} price={`$59.99`} />
              <GamingCard className={`border-gradient`} cardImg={cardimg1} title={`Sekiro Shadows Die...`} price={`$59.99`} />
              <GamingCard className={`border-gradient`} cardImg={cardimg1} title={`Sekiro Shadows Die...`} price={`$59.99`} />
              <GamingCard className={`border-gradient`} cardImg={cardimg1} title={`Sekiro Shadows Die...`} price={`$59.99`} />
              <GamingCard className={`border-gradient`} cardImg={cardimg1} title={`Sekiro Shadows Die...`} price={`$59.99`} />
              <GamingCard className={`border-gradient`} cardImg={cardimg1} title={`Sekiro Shadows Die...`} price={`$59.99`} />
              <GamingCard className={`border-gradient`} cardImg={cardimg1} title={`Sekiro Shadows Die...`} price={`$59.99`} />
            </div>
          </div>
          {/* lower part ends */}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
