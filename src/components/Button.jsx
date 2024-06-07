import React from 'react'
import cn from '../lib/cn'

function Button({className,text,icon, ...restprops}) {
  return (
    <button className={cn("bg-gradient-to-r from-[#FC00FF] to-[#00DBFF] text-white py-2 px-4 rounded-lg flex items-center gap-x-2 text-[14px] md:text-2xl font-secondary ", className)} {...restprops}>{text}{icon}</button>
  )
}

export default Button