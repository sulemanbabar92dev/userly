"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { RiMenuUnfold4Line  } from "react-icons/ri";
import { RiMenuUnfoldLine } from "react-icons/ri";
import Image from "next/image";


export default function Header({ toggleSidebar, isOpen }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className=" flex items-center justify-between  px-3 py-1 shadow-sm bg-white z-50 ">
        <button
          className="rounded-full hover:bg-gray-100 transition-colors duration-200 "
        >{
            isOpen ?
              <RiMenuUnfold4Line onClick={toggleSidebar} className="text-2xl hover:text-black" />
              :
              <RiMenuUnfoldLine onClick={toggleSidebar} className="text-2xl hover:text-black" />

          }
        </button>
        <div className="flex items-center gap-4  ">
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Search"
          >
            <CiSearch className="text-gray-600 text-2xl hover:text-black transition-transform duration-200 hover:scale-110" />
          </button>
          <button
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Notifications"
          >
            <IoMdNotificationsOutline className="text-gray-600 text-2xl hover:text-black transition-transform duration-200 hover:scale-110" />
            <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
          </button>
          <Image
            width={100}
            height={100}
            alt="tania andrew"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            className="relative inline-block h-10 w-10 cursor-pointer rounded-full object-cover object-center"
            data-popover-target="profile-menu"
            onClick={() => setOpen(!open)}
          />
          {open && (
            <div className="absolute right-0 mt-50 mr-2 w-48  rounded-md bg-gray-200 ">
              <div className="py-2">
                <a
                  className=" flex items-center py-2 px-4 text-sm  text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  href="#">
                  <FiUser className="h-5 w-5 mr-2" />
                  Profile
                </a>
                <a
                  className=" flex items-center py-2 px-4 text-sm  text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  href="#">
                  <FiSettings className="h-5 w-5 mr-2" />
                  Setting
                </a>
                <hr className="my-1  border-black" />
                <button className=" flex items-center w-48 py-2 px-4 text-sm  text-red-600 hover:bg-gray-100 hover:text-red-400 ">
                  <FiLogOut className="h-5 w-5 mr-2" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

    </>
  );
}