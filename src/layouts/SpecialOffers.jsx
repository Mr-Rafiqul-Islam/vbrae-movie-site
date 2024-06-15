import React from 'react'
import CardSmall from '../components/CardSmall'
import ts4 from '../assets/images/ts4.png'

function SpecialOffers() {
  return (
    <div className='w-full grid grid-cols-1 sm:w-[60%] lg:w-1/3 2xl:w-1/3'>
        <CardSmall cardImg={ts4} cardTitle={`Far Cry 3`} discount={`25%`} fromPrice={`$70`} toPrice={`$55.99`}/>
    </div>
  )
}

export default SpecialOffers