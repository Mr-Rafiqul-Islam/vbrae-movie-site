import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='text-3xl font-bold flex justify-center gap-4 items-center h-screen text-white capitalize'>404 not found <Link to={'/'} className={'bg-gradient-to-r from-[#FC00FF] to-[#00DBFF] text-white py-2 px-4 rounded-lg flex items-center gap-x-2 text-2xl font-secondary '}>Go Home 🏡</Link></div>
  )
}

export default ErrorPage