'use client';
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      
      <div className='flex h-screen bg-white overflow-hidden'>
        <div className='w-[220px] h-full bg-black text-white px-[20px] py[30px] box-border flex flex-col' >
          <h1 className='items-center text-white text-[28px] font-bold mb-[15px] border-b border-white  mt-3'>Dashboard</h1>
          <Link href="/User">
            <div className=' nav-items px-[15px] py-[12px] rounded-[6px] cursor-pointer text-[18px] mb-[12px] text-white transition-colors duration-300 ease-in-out nav-items hover:bg-white hover:text-[#000000]'>
              User
            </div>
          </Link>
          <Link href="/Clients">
            <div className='nav-items px-[15px] py-[12px] rounded-[6px] cursor-pointer text-[18px] mb-[12px] text-white transition-colors duration-300 ease-in-out nav-items hover:bg-white hover:text-[#000000]'>
              Clients
            </div>
          </Link>
          <Link href="/Product">
            <div className='nav-items px-[15px] py-[12px] rounded-[6px] cursor-pointer text-[18px] mb-[12px] text-white transition-colors duration-300 ease-in-out nav-items hover:bg-white hover:text-[#000000]'>
              Product</div>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default page
