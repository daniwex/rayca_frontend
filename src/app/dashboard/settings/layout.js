import Menu from "@/components/Menu";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="sm:my-2 mt-20 sm:ml-[17%] xl:ml-[10%] bg-[#161618] w-full h-screen xl:overflow-y-auto overflow-y-scroll rounded text-white p-5 sm:p-10 ">
      <div className="sm:flex justify-between w-full mb-12 sm:mb-0">
        <h1 className="text-lg py-5 sm:py-0">Mia de Silva</h1>
        <div className="sm:w-2/5 mb-5 sm:m-0  h-10 xl:w-1/4">
          <input
            type="search"
            placeholder="Search"
            className="bg-transparent border-2 px-2 border-[#1F1F21] mr-2 h-full rounded"
          />
          <span className="px-3 py-2 xl:py-3 h-full bg-[#1F1F21] mr-2 text-sm rounded border-2 border-[#2f2f31]">
            Invite
          </span>
          <button className="text-sm bg-[#4270E7] px-2 py-1 mt-2 sm:mt-0 rounded">
            Upgrade
          </button>
        </div>
      </div>
      <p className="text-sm text-[#7b7b7f] block mt-10 sm:mt-0 font-light">
      
          Manage your details and personal preferences here.
      </p>
      <Menu />
      {children}
    </div>
  );
}
