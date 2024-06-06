import React from 'react'
import user1 from "../assets/images/rev1.png"
import stargrp from "../assets/icons/stargrp.png"
import Image from './Image'
function ReviewCard() {
  return (
    <div className="pt-[43px] pb-[41px] ps-[38px] border border-[#767676] rounded-xl">
        <div className="flex gap-4 mb-[7px] md:mb-[27px]">
            <Image src={user1} className={`inline-block w-7 h-7 md:w-14 md:h-14`}/>
            <div className="flex flex-col gap-4">
                <h4 className='font-secondary font-medium text-[12px] md:text-2xl text-white'>Username</h4>
                <Image src={stargrp} className={`inline-block w-[73.29px] h-[11.95px] md:w-[164.15px] md:h-[26.77px]`} />
            </div>
        </div>
        <p className='font-secondary font-normal text-[12px] md:text-[22px] text-white w-[172px] h-[33px] md:w-[426px] md:h-[64px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
  )
}

export default ReviewCard