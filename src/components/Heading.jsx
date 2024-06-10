import React from 'react'
import cn from '../lib/cn'

function Heading({className,text, ...restprops}) {
  return (
    <h1 className={cn("font-primary font-normal text-[26px] lg:text-[68px] leading-[34px] lg:leading-[68px] text-white",className)} {...restprops}>{text}</h1>
  )
}

export default Heading