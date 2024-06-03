import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import Image from '../components/Image'
import Button from '../components/Button'
import Bag from '../assets/icons/Bag'
import UserIcon from '../assets/icons/UserIcon'
import Heart from '../assets/icons/Heart'
import Dollar from '../assets/icons/Dollar'

function Header() {
  return (
    <>
    <section className='pt-[50px] pb-[37px]'>
      <div className="container">
     <div className="flex justify-between">
      <Link to={'/'}>
        <img src={logo} alt="logo" />
      </Link>
      
      <div className='relative '>
        <input type="text" placeholder='Search products, sellers, deals...' className='w-[650px] border border-gray-300 px-4 py-2 rounded-lg bg-[#1E2127] text-white placeholder:text-white'/>
      </div>
      <div className='flex justify-end gap-5'>
        <Dollar/>
        <Heart/>
        <Link to={'/cart'} className="relative">
          <Bag/>
          <div className="absolute top-[-5px] right-[-10px] w-[23px] h-[23px] rounded-full bg-gradient-to-r from-[#FC00FF] to-[#00DBFF] text-white text-[19px] flex justify-center items-center font-secondary font-bold ">2</div>
        </Link>
        <UserIcon/>
      </div>
     </div>
      </div>
    </section>
    <hr className='container'/>
    </>
  )
}

export default Header