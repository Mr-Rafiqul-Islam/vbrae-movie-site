import React from 'react'
import SpecialOffers from './SpecialOffers'

function TilesSection() {
  return (
    <section className='py-[36px] md:py-[72px]'>
        <div className="container">
            <div className='flex flex-col sm:items-center lg:flex-row gap-4'>
            <SpecialOffers/>
            <SpecialOffers/>
            <SpecialOffers/>
            </div>
        </div>
    </section>
  )
}

export default TilesSection