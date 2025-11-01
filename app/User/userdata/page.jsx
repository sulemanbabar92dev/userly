import React from 'react'
// import './userdata.css'
import Link from 'next/link'
const Page = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-white font-sans'>
      <div className='bg-white px-[40px] py-[50px] rounded-[12px] shadow-[0_3px_10px_rgba(0,0,0,0.1)] w-[700px] overflow-hidden'>
        <Link href={"/User"}>
          <button className= "absolute top-[20px] left-[20px]  bg-black text-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-black transition">Go Back</button>
        </Link>
        <h1 className='text-black mb-[35px] text-center font-semibold'>Create User</h1>
        <div className='overflow-hidden grid grid-cols-2 gap-x-[30px] gap-y-[25px]'>
          <div className='flex flex-col'>
            <label className='overflow-auto font-semibold mb-[6px] text-black'>Full Name</label>
            <input className='rounded-[8px] px-[10px] py-[12px]  border-[1.5px] border-[#ccc] text-[15px] transition duration-200 placeholder:text-[#aaa]' type="text" placeholder="Enter your name" required />
          </div>
          <div className='flex flex-col'>
            <label className='overflow-auto font-semibold mb-[6px] text-black'>Username</label>
            <input className='rounded-[8px] px-[10px] py-[12px]  border-[1.5px] border-[#ccc] text-[15px] transition duration-200 placeholder:text-[#aaa]' type="text" placeholder="Enter your username" required />
          </div>
          <div className='flex flex-col'>
            <label className='overflow-auto font-semibold mb-[6px] text-black'>Email</label>
            <input className='rounded-[8px] px-[10px] py-[12px]  border-[1.5px] border-[#ccc] text-[15px] transition duration-200 placeholder:text-[#aaa]' type="email" placeholder="Enter your email" required />
          </div>
          <div className='flex flex-col'>
            <label className='overflow-auto font-semibold mb-[6px] text-black'>Phone Number</label>
            <input className='rounded-[8px] px-[10px] py-[12px]  border-[1.5px] border-[#ccc] text-[15px] transition duration-200 placeholder:text-[#aaa]' type="number" placeholder="Enter your number" required />
          </div>
          <div className='flex flex-col'>
            <label className='overflow-auto font-semibold mb-[6px] text-black'>Password</label>
            <input className='rounded-[8px] px-[10px] py-[12px]  border-[1.5px] border-[#ccc] text-[15px] transition duration-200 placeholder:text-[#aaa]' type="password" placeholder="Enter your password" required />
          </div>
          <div className='flex flex-col'>
            <label className='overflow-auto font-semibold mb-[6px] text-black'>Confirm Password</label>
            <input className='rounded-[8px] px-[10px] py-[12px]  border-[1.5px] border-[#ccc] text-[15px] transition duration-200 placeholder:text-[#aaa]' type="password" placeholder="Confirm your password" required />
          </div>
        </div>
        <div className='text-center mt-[30px]'>
          <button className= ' bg-black text-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-black transition' type='submit'>Create</button>
        </div>
      </div>
    </div>
  )
}
export default Page
