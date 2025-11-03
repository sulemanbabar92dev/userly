"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaUserFriends } from "react-icons/fa";
import { links } from "@/data/routes-data";

export default function Sidebar({ isOpen, setBreadcrumbsData }) {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };
  return (
    <div>
      <div className="hidden md:flex h-screen bg-[#800080] overflow-hidden"> 
        <div
          className={` ${
            isOpen ? "w-[270px] pt-0 pl-5 " : "w-[50px] pt-10"
          } transition-all duration-500 ease-in-out  px-3  h-full bg-[#800080] text-white box-border flex flex-wrap flex-col`}
        >
          {isOpen && (
            <h1 className="flex items-center gap-3 bg-white p-2 rounded-sm text-[#A80080] text-[22px] font-bold my-[15px] ">
              <FaUserFriends />
              Userly
            </h1>
          )}
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setBreadcrumbsData(link.label)}
            >
              <div
                className={`flex items-center py-3 gap-3 rounded-[6px] cursor-pointer text-[16px] mb-[15px]  transition-colors ${
                  isOpen ? "pl-5" : "pl-1"
                } duration-300 ease-in-out ${
                  isActive(link.path)
                    ? "bg-white text-[#A80080]"
                    : " hover:bg-white hover:text-[#A80080]"
                }`}
              >
                <span className="text-[15px]">{link.icon}</span>
                {isOpen && (
                  <span className="text-[16px] font-medium">{link.label}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
