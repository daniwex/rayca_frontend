import Icon from "@/components/Icon";
import Pie from "@/components/Pie";
import Switch from "@/components/Switch";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="sm:flex sm:w-full xl:w-1/2 bg-[#1F1F21] p-3 rounded justify-between items-center">
        <div className="">
          <div className="sm:flex block items-center">
            <Pie />
            <div>
              <span className="text-sm"> Your account security is 90%</span>
              <p className="text-[#7b7b7f] text-xs">
                Please review your account security settings regularly and
                update your password
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-0">
          <button className="text-sm border-2 py-1 px-2 rounded border-[#2f2f31]">
            Dismiss
          </button>
          <button className="text-sm ml-3 bg-[#4270E7] px-2 py-1 rounded">
            Review security
          </button>
        </div>
      </div>
      <div className="mt-5">
        <div>
          <div className="border-b-2 border-y-[#1F1F21] pb-1 mb-5">
            <h2>Basics</h2>
          </div>

          <div className="border-b-2 mb-5 border-y-[#1F1F21] pb-1">
            <div className="flex justify-between">
              <h2>Password</h2>
              <span className="text-xs">
                ***********************
                <span className="pl-2 text-[#4B7151]">
                  <i class="fas fa-check-circle"></i> Very secure
                </span>
              </span>
              <button className="text-sm border-2 py-1 px-2 rounded border-[#2f2f31]">
                Edit
              </button>
            </div>
            <p className="text-[#7b7b7f] text-xs">
              Set a password to protect your account
            </p>
          </div>
          <div className="border-b-2 border-y-[#1F1F21] pb-1 mb-5">
            <div className="sm:flex flex justify-between">
              <h2>Two-step verification</h2>
              <span className="text-sm  sm:flex "><Switch /> <span className="pl-2 hidden sm:inline">Two-step verification</span> </span>
              <button className="inline sm:inline text-sm border-2 py-1 px-2 rounded border-[#2f2f31]">
                Edit
              </button>
            </div>
            <p className="text-[#7b7b7f] text-xs sm:w-1/4">
              We recommend requiring a verification code in addition to your
              password.
            </p>
          </div>
          <div className="border-b-2 border-y-[#1F1F21] pb-1">
            <h2>Browsers and devices</h2>
            <p className="text-[#7b7b7f] text-xs">
              These browsers and devices are currently signed in to your
              account. Remove any authorized devices.
            </p>
          </div>
        </div>

        <div className="mt-5 text-[0.65rem] sm:text-xs">
          <div className="flex justify-between border-b-2 border-y-[#1F1F21] pb-1 mb-5">
            <div className="flex items-center">
              <Icon iconImage={<i class="fab fa-chrome "></i>} /> Brave on Mac OS
              X
            </div>
            <div className="text-[#7b7b7f] sm:w-1/3 flex justify-between sm:text-xs">
              <span>Ninh Binh, Vietnam</span>
              <span>Current session</span>
              <span className="pl-2 sm:pl-0">
                <i class="fas fa-trash-alt"></i>
              </span>
            </div>
          </div>
          <div className="flex justify-between border-b-2 border-y-[#1F1F21] pb-1 mb-5">
            <div className="flex items-center">
              <Icon iconImage={<i class="fab fa-apple"></i>} /> Mia's Macbook
              Pro
            </div>
            <div className="text-[#7b7b7f] sm:w-1/3 flex justify-between sm:text-xs">
              <span>Ninh Binh, Vietnam</span>
              <span>Current session</span>
              <span className="pl-2 sm:pl-0">
                <i class="fas fa-trash-alt"></i>
              </span>
            </div>
          </div>
          <div className="flex justify-between border-b-2 border-y-[#1F1F21] pb-1 mb-5">
            <div className="flex items-center">
              <Icon iconImage={<i class="fab fa-chrome"></i>} />
              Brave on Mac OS X
            </div>
            <div className="text-[#7b7b7f] sm:w-1/3 flex justify-between sm:text-xs">
              <span>Mexico City, Mexico</span>
              <span>1 month ago</span>
              <span className="pl-2 sm:pl-0">
                <i class="fas fa-trash-alt"></i>
              </span>
            </div>
          </div>
          <div className="flex justify-between border-b-2 border-y-[#1F1F21] pb-1">
            <div className="flex items-center">
              <Icon iconImage={<i class="fab fa-apple"></i>} />
              Mia's Macbook Pro
            </div>
            <div className="text-[#7b7b7f] sm:w-1/3 flex justify-between sm:text-xs">
              <span>Mexico City, Mexico</span>
              <span>1 month ago</span>
              <span className="pl-2 sm:pl-0">
                <i class="fas fa-trash-alt"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
