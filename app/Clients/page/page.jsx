'use client';
import React, { useState } from "react";
import Modal from "@/components/ui/Modal";
const page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <button
        className="px-4 py-2 bg-black text-white rounded hover:bg-white hover:text-black transition"
        onClick={() => setModalOpen(true)}
      >
        Add Client
      </button>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title =""
      >
        {/* <div className='flex justify-center items-start bg-white font-sans'> */}
  <div className='flex justify-center items-center flex-col bg-white px-[40px] py-[50px] rounded-[12px] shadow-[0_3px_10px_rgba(0,0,0,0.1)] w-full-screen h-full-screen'>
    <h1 className='text-black mb-[35px] text-center font-semibold text-2xl'>Create Client</h1>
    
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
          Create
        </button>
      </div>
    </form>
  </div>
{/* </div>             */}
      </Modal>
    </div>
  );
};
export default page;