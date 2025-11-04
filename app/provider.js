"use client";
import React, { useState } from "react";
import { BreadcrumbsProvider } from "./context/Breadcrumbs";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Breadcrumbs from "./components/Breadcrumbs";
import MobileSidebar from "./components/users/mobile-sidebar";
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [BreadcrumbsData, setBreadcrumbsData] = useState("User");
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <BreadcrumbsProvider>
      {/* sidebar */}
      <div className="flex relative">
        <MobileSidebar
          setBreadcrumbsData={setBreadcrumbsData}
          toggleSidebar={toggleSidebar}
          isOpen={isSidebarOpen}
        />
        <Sidebar
          isOpen={isSidebarOpen}
          setBreadcrumbsData={setBreadcrumbsData}
        />
        <div className="flex flex-col w-full">
          <main className=" w-full "></main>
          <div>
            <Header toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
            <Breadcrumbs BreadcrumbsData={BreadcrumbsData} />
          </div>
          {children}
        </div>
      </div>
    
    </BreadcrumbsProvider>
  );
};
export default AppProvider;
