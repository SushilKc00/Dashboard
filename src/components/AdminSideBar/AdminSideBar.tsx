"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiCaretUpDownBold } from "react-icons/pi";
import { IoAdd } from "react-icons/io5";
import SideLinks from "./SideLinks";
import Progress from "../ProgressBar/Progress";
import { useMyContext } from "@/context/CreateContext";

export default function AdminSideBar() {
  const pathname = usePathname();
  const { isAdminSideBarOpen, toggleAdminSideBarOpen } = useMyContext();
  return (
    <div
      className="md:py-8 py-4 md:px-10 px-5 flex flex-col lg:justify-between lg:flex-1 w-[280px] h-[100vh] lg:static fixed top-[55px] bg-gray-50"
      style={{
        left: isAdminSideBarOpen ? "0" : "-100%",
        transition: "all 0.6s linear",
      }}
    >
      {/* TOP LINKS AND CONTENT SECTION***** */}
      <div>
        <div className="flex justify-between items-center bg-light-gray rounded-xl py-6 px-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#ed6700] rounded-full flex items-center justify-center text-white">
              <h2 className="text-[1rem] font-medium">DX</h2>
            </div>

            <div>
              <h3 className="text-[1.2rem] font-medium tracking-tighter">
                Delex workspace
              </h3>
              <span className="text-[#7e7e7f] font-semibold">5 members</span>
            </div>
          </div>
          <div>
            <PiCaretUpDownBold className="text-[1.3rem] " />
          </div>
        </div>

        {/* LINKS TO NAVIGATE***** */}
        <div>
          {SideLinks.map((Data, Index) => {
            return (
              <div className="mt-6" key={Index}>
                <h2 className="text-[1.1rem] text-[#aaa9a9] uppercase font-normal">
                  {Data.cagtegory}
                </h2>
                <div className="flex flex-col gap-3 mt-3">
                  {Data.links.map((Links, Index) => {
                    return (
                      <Link
                        key={Index}
                        className={`text-[1.1rem] font-medium px-4 py-3 flex items-center gap-2 ${
                          pathname == Links.Src ? "active" : ""
                        }`}
                        href={Links.Src}
                        onClick={toggleAdminSideBarOpen}
                      >
                        {Links.Icon}
                        {Links.LinkName}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BOTTOM STORAGE AND CREATE SECTION***** */}
      <div className="flex flex-col gap-8 mt-6">
        <div className="border border-gray-200 px-5 py-8 rounded-xl">
          <div className="flex justify-between">
            <div>
              <h3 className="text-[1.1rem] font-medium">Storage</h3>
              <p className="text-[1.1rem] text-[#b1b1b1]">
                <span className="text-black font-medium">3.4 Gb</span> of 15 Gb
              </p>
            </div>
            <p className="text-[1.1rem] text-[#3855b3] font-normal">Upgrade</p>
          </div>

          <div className="mt-3">
            <Progress
              Percentage={30}
              ProgressBackgroundColor="#f0f1f2"
              ProgressBarColor="#3855b3"
            />
          </div>
        </div>
        <div>
          <button className="common-btn-layout w-full flex justify-center items-center gap-1">
            <IoAdd size={16} color="#ffffff" /> Create New
          </button>
        </div>
      </div>
    </div>
  );
}
