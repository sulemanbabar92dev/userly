'use client';
import React, { useState } from "react";
import Modal from "@/components/ui/Modal";
const page = () => {
  const [setEditOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <button
        className="px-4 py-2 bg-black text-white rounded hover:bg-white hover:text-black transition"
        onClick={() => setEditOpen(true)}
      >
        Edit User
      </button>
      <Modal
        isOpen={modalOpen}
        onClose={() => setEditOpen(false)}
        title =""
      >
  <div className='flex justify-center items-center flex-col bg-white px-[40px] py-[50px] rounded-[12px] shadow-[0_3px_10px_rgba(0,0,0,0.1)] w-full-screen h-full-screen'>
    <h1 className='text-black mb-[35px] text-center font-semibold text-2xl'>Edit User</h1>
    
    <form className='grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[25px]'>
      <div className='flex flex-col'>
        <label className='font-semibold mb-[6px] text-black'>Full Name</label>
        <input className='rounded-[8px] px-[10px] py-[12px] border border-[#ccc] text-[15px] placeholder:text-[#aaa]' type="text" placeholder="Enter your name" required />
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold mb-[6px] text-black'>Username</label>
        <input className='rounded-[8px] px-[10px] py-[12px] border border-[#ccc] text-[15px] placeholder:text-[#aaa]' type="text" placeholder="Enter your username" required />
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold mb-[6px] text-black'>Email</label>
        <input className='rounded-[8px] px-[10px] py-[12px] border border-[#ccc] text-[15px] placeholder:text-[#aaa]' type="email" placeholder="Enter your email" required />
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold mb-[6px] text-black'>Phone Number</label>
        <input className='rounded-[8px] px-[10px] py-[12px] border border-[#ccc] text-[15px] placeholder:text-[#aaa]' type="number" placeholder="Enter your number" required />
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold mb-[6px] text-black'>Password</label>
        <input className='rounded-[8px] px-[10px] py-[12px] border border-[#ccc] text-[15px] placeholder:text-[#aaa]' type="password" placeholder="Enter your password" required />
      </div>
      <div className='flex flex-col'>
        <label className='font-semibold mb-[6px] text-black'>Confirm Password</label>
        <input className='rounded-[8px] px-[10px] py-[12px] border border-[#ccc] text-[15px] placeholder:text-[#aaa]' type="password" placeholder="Confirm your password" required />
      </div>
      <div className='col-span-full text-center mt-[30px]'>
        <button className='bg-black text-white px-6 py-2 rounded font-semibold hover:bg-white hover:text-black border border-black transition' type='submit'>
          Update
        </button>
      </div>
    </form>
  </div>
      </Modal>
    </div>
  );
};
export default page;




























// import React from 'react'
// import Link from 'next/link'
// const Page = () => {
//   return (
//     <div className='flex justify-center items-center min-h-screen bg-white font-sans'>
//       <div className='bg-white px-[40px] py-[50px] rounded-[12px] shadow-[0_3px_10px_rgba(0,0,0,0.1)] w-[700px] overflow-hidden'>
//         <Link href={"/User"}>
//           <button className= "absolute top-[20px] left-[20px]  bg-black text-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-black transition">Go Back</button>
//         </Link>
//         <h1 className='text-black mb-[35px] text-center font-semibold'>Edit User</h1>
//         <div className='overflow-hidden grid grid-cols-2 gap-x-[30px] gap-y-[25px]'>
//           <div className='form-group'>
//             <label className='overflow-auto font-semibold mb-[6px] text-black'>Full Name</label>
//             <input className='rounded-[8px] px-[10px] py-[12px]  border-[1.5px] border-[#ccc] text-[15px] transition duration-200 placeholder:text-[#aaa]' type="text" placeholder="Enter your name" required />
//           </div>
//           <div className='flex flex-col'>
//             <label className='overflow-auto font-semibold mb-[6px] text-black'>Username</label>
//             <input className='rounded-[8px] px-[10px] py-[12px]  border-[1.5px] border-[#ccc] text-[15px] transition duration-200 placeholder:text-[#aaa]' type="text" placeholder="Enter your username" required />
//           </div>
//           <div className='flex flex-col'>
//             <label className='overflow-auto font-semibold mb-[6px] text-black'>Email</label>
//             <input className='rounded-[8px] px-[10px] py-[12px]  border-[1.5px] border-[#ccc] text-[15px] transition duration-200 placeholder:text-[#aaa]' type="email" placeholder="Enter your email" required />
//           </div>
//           <div className='flex flex-col'>
//             <label className='overflow-auto font-semibold mb-[6px] text-black'>Phone Number</label>
//             <input className='rounded-[8px] px-[10px] py-[12px]  border-[1.5px] border-[#ccc] text-[15px] transition duration-200 placeholder:text-[#aaa]' type="number" placeholder="Enter your number" required />
//           </div>
//           <div className='flex flex-col'>
//             <label className='overflow-auto font-semibold mb-[6px] text-black'>Password</label>
//             <input className='rounded-[8px] px-[10px] py-[12px]  border-[1.5px] border-[#ccc] text-[15px] transition duration-200 placeholder:text-[#aaa]' type="password" placeholder="Enter your password" required />
//           </div>
//           <div className='flex flex-col'>
//             <label className='overflow-auto font-semibold mb-[6px] text-black'>Confirm Password</label>
//             <input className='rounded-[8px] px-[10px] py-[12px]  border-[1.5px] border-[#ccc] text-[15px] transition duration-200 placeholder:text-[#aaa]' type="password" placeholder="Confirm your password" required />
//           </div>
//         </div>
//         <div className='text-center mt-[30px]'>
//           <button className= ' bg-black text-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-black transition' type='submit'>Update</button>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Page
