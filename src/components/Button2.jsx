import React from 'react'
import cn from '../lib/cn'

function Button2({className,text,icon, ...restprops}) {
  return (
    <button className={cn("hover:bg-gradient-to-r from-[#FC00FF] to-[#00DBFF] text-white py-2 px-4 rounded-lg text-[12px] lg:text-2xl font-secondary border border-white", className)} {...restprops}>{text}</button>
  )
}

export default Button2