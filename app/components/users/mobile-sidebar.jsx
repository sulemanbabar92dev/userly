import { links } from "@/data/routes-data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { RiMenuFoldFill } from "react-icons/ri";
const MobileSidebar = ({ setBreadcrumbsData, toggleSidebar, isOpen }) => {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };
  return (
    <div>
        <div
      className={`
        fixed top-0 left-0 z-10 h-full w-[140px] 
        bg-[#800080] text-white px-3
        transform transition-transform duration-700 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:hidden
      `}
    >
          <div
            className="pl-5 pt-3 transition-all duration-500 ease-in-out  px-3  h-full bg-[#800080] text-white box-border flex flex-wrap flex-col"
          >
            <div className="flex items-center justify-between">
              <h1 className="flex items-center gap-3 bg-white p-2 rounded-sm text-[#A80080] text-[12px] font-bold my-[15px] ">
                <FaUserFriends className="text-[25px]" />
                Userly 
              </h1>

              {/* close button */}
              {/* <div
                onClick={toggleSidebar}
                className="text-end text-white text-lg  font-bold p-5 "
              >
                {" "}
                <RiMenuFoldFill className="text-2xl " />{" "}
              </div> */}
            </div>

            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => {setBreadcrumbsData(link.label)
                  toggleSidebar()
                }}
              >
                <div
                  className={`flex items-center py-3 gap-3 rounded-[6px] cursor-pointer pl-2 text-[16px] mb-[15px]   transition-colors duration-300 ease-in-out 
                    ${
                    isActive(link.path)
                      ? "bg-white text-[#A80080] "
                      : " hover:bg-white hover:text-[#A80080]"
                  }`}
                >
                  <span className="text-[15px]">{link.icon}</span>
                  <span className="text-[12px] font-medium">{link.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      
    </div>
  );
};
export default MobileSidebar;
