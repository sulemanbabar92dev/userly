import { links } from "@/data/routes-data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { RiMenuFoldFill } from "react-icons/ri";
// import { RiMenuUnfold4Line, RiMenuUnfoldLine } from "react-icons/ri";
const MobileSidebar = ({ setBreadcrumbsData, toggleSidebar, isOpen }) => {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <div>
      {isOpen && (
        <div
          className={`absolute z-10 transition-all  block md:hidden duration-500 ease-in-out  px-3  h-full bg-[#800080] text-white`}
        >
          <div
            className={`pl-5 pt-3 transition-all duration-500 ease-in-out  px-3  h-full bg-[#800080] text-white box-border flex flex-wrap flex-col`}
          >
            <div className="flex items-center justify-between">
              <h1 className="flex items-center gap-3 bg-white p-2 rounded-sm text-[#A80080] text-[22px] font-bold my-[15px] ">
                <FaUserFriends />
                Userly App
              </h1>

              {/* close button */}
              <div
                onClick={toggleSidebar}
                className="text-end text-white text-lg  font-bold p-5 "
              >
                {" "}
                <RiMenuFoldFill className="text-2xl " />{" "}
              </div>
            </div>

            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setBreadcrumbsData(link.label)}
              >
                <div
                  className={`flex items-center py-3 gap-3 rounded-[6px] cursor-pointer pl-3 text-[16px] mb-[15px]  transition-colors duration-300 ease-in-out ${
                    isActive(link.path)
                      ? "bg-white text-[#A80080]"
                      : " hover:bg-white hover:text-[#A80080]"
                  }`}
                >
                  <span className="text-[15px]">{link.icon}</span>
                  <span className="text-[16px] font-medium">{link.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default MobileSidebar;
