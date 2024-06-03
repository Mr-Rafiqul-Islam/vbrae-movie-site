import React from 'react'
import cn from '../lib/cn'

function Image({src, className, ...restprops}) {
  return (
    <img src={src} alt={src} className={cn("w-full", className)} {...restprops}/>
  )
}

export default Image