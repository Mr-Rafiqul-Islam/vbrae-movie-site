import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import heart from '../assets/icons/heart (1).svg'
import dollar from '../assets/icons/Subtração 165.svg'
import bag from '../assets/icons/Subtraction 124.svg'
import userIcon from '../assets/icons/path0.svg'

function Header() {
  return (
    <>
    <section className='pt-[50px] pb-[37px]'>
      <div className="container">
     <div className="flex justify-between">
      <Link to={'/'}><img src={logo} alt="logo" /></Link>
      <div className='relative '>
        <input type="text" placeholder='Search products, sellers, deals...' className='w-[650px] border border-gray-300 px-4 py-2 rounded-lg bg-[#1E2127] text-white placeholder:text-white'/>
      </div>

      <div className='flex justify-end gap-5'>
        <img src={dollar} alt="" className='cursor-pointer '/>
        <img src={heart} alt="" className='cursor-pointer '/>
        <img src={bag} alt="" className='cursor-pointer '/>
        <img src={userIcon} alt="" className='cursor-pointer '/>
      </div>
     </div>
      </div>
    </section>
    <hr className='container'/>
    </>
  )
}

export default Header