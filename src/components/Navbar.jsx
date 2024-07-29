"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Progess from "./Progess";
import Notification from "./Notification";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const pathname = usePathname();
  return (
    <nav className="bg-[#1F1F21] text-white sm:w-1/6 xl:w-[10%] h-20 sm:py-4 sm:h-screen fixed sm:px-2 sm:p-5 z-10 sm:z-0 sm:flex-col sm:justify-between sm:flex">
      <div className="w-screen sm:w-0 sm:hidden  bg-[#161618] h-20 p-7">
        <div className="flex justify-between items-center">
          <span className="font-bold">Rayca</span>
          <button><i class="fas fa-bars"></i></button>
        </div>
      
      </div>
      <div className="hidden sm:inline">
        <div className="flex justify-between">
          <span>Untitiled UI</span>
          <a className="text-xs text-[#47474a] flex items-center cursor-pointer">
            v4.0 <i class="fas fa-external-link-alt pl-2"></i>
          </a>
        </div>
        <div className="sm:mt-5 mt-10">
          <ul className="flex flex-col">
            <Link
              className={`font-extralight py-3 sm:my-1 sm:p-1 xl:p-2 ${
                pathname == "/dashboard" ? "bg-[#3B3B3D] font-bold" : ""
              } rounded text-sm`}
              href="/dashboard"
            >
              <span className="text-[#47474a] mr-2">
                <i class="fas fa-home"></i>
              </span>
              Home
            </Link>
            <Link
              className={`font-extralight py-3 sm:my-1 sm:p-1 xl:p-2 ${
                pathname == "/dashboard/files" ? "bg-[#3B3B3D]" : ""
              } rounded text-sm`}
              href=""
            >
              <span className="text-[#47474a] mr-2">
                <i class="fas fa-folder"></i>
              </span>
              All files
            </Link>
            <Link
              className={`font-extralight  py-3 sm:my-1 sm:p-1 xl:p-2 ${
                pathname == "/dashboard/private-files" ? "bg-[#3B3B3D]" : ""
              } rounded text-sm`}
              href=""
            >
              <span className="text-[#47474a] mr-2">
                <i class="fas fa-key"></i>
              </span>
              Private files
            </Link>
            <Link
              className={`font-extralight  py-3 sm:my-1 sm:p-1 xl:p-2 ${
                pathname == "/dashboard/shares" ? "bg-[#3B3B3D]" : ""
              } rounded text-sm`}
              href=""
            >
              <span className="text-[#47474a] mr-2">
                <i class="fas fa-share-square"></i>
              </span>
              Shared with me
            </Link>
            <Link
              className={`font-extralight py-3 sm:my-1 sm:p-1 xl:p-2 ${
                pathname == "/dashboard/deleted-files" ? "bg-[#3B3B3D]" : ""
              } rounded text-sm`}
              href=""
            >
              <span className="text-[#47474a] mr-2">
                {" "}
                <i class="fas fa-trash-alt"></i>
              </span>
              Deleted files
            </Link>
            <Link
              className={`font-extralight py-3 sm:my-1 sm:p-1 xl:p-2 ${
                pathname == "/dashboard/design" ? "bg-[#3B3B3D]" : ""
              } rounded text-sm`}
              href=""
            >
              <span className="text-[#47474a] mr-2">
                <i class="fas fa-ruler-combined"></i>
              </span>
              Design
            </Link>
            <Link
              className={`font-extralight  py-3 sm:my-1 sm:p-1 xl:p-2 flex justify-between ${
                pathname == "/dashboard/notifications" ? "bg-[#3B3B3D]" : ""
              } rounded text-sm`}
              href=""
            >
              <div>
                <span className="text-[#47474a] mr-2">
                  <i class="fas fa-envelope"></i>
                </span>
                Notifications
              </div>

              <Notification num="8" />
            </Link>
            <Link
              className={`font-extralight  py-3  sm:my-1 sm:p-1 xl:p-2 ${
                pathname == "/dashboard/settings" ||
                pathname == "/dashboard/settings/security"
                  ? "bg-[#3B3B3D]"
                  : ""
              } rounded text-sm`}
              href="/dashboard/settings"
            >
              <span className="text-[#47474a] mr-2">
                <i class="fas fa-cog"></i>
              </span>
              Settings
            </Link>
          </ul>
          <div className="mt-2">
            <div className="flex text-[#626265] justify-between items-center text-[14px]">
              <span>File Browser</span>
              <i className="fas fa-ellipsis-v"></i>
            </div>
            <div className="mt-2 font-extralight text-[14px]">
              <i class="fas fa-chevron-right text-xs mr-3 text-[#626265]"></i>
              Folders
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#28282A] px-3 py-4 rounded-sm border-2 border-[#2f2f31] hidden sm:block">
        <div className="flex justify-between font-extralight text-xs">
          <span>Storage</span>
          <a href="" className="underline">
            Upgrade
          </a>
        </div>
        <Progess progress="90%" />
        <span className="text-[0.65rem] text-[#626265]">
          9.2Gb of 10Gb used
        </span>
      </div>

    </nav>
  );
}
