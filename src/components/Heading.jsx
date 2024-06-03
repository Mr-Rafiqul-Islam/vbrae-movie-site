import React from 'react'

function Heading({className,text, ...restprops}) {
  return (
    <h1 className={cn("font-primary font-normal text-[26px] sm:text-[68px] leading-[34px] sm:leading-[68px] text-white",className)} {...restprops}>{text}</h1>
  )
}

export default Heading