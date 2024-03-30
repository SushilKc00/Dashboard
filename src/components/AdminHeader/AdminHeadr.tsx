"use client";

import React, { useState } from "react";
import "./AdminHeader.scss";
import {
  IoMdMenu,
  IoIosSearch,
  IoMdNotificationsOutline,
} from "react-icons/io";

import Image from "next/image";
import { useMyContext } from "@/context/CreateContext";

export default function AdminHeadr() {
  const { toggleAdminSideBarOpen } = useMyContext();

  return (
    <div className="admin-header-container">
      <div className="max-width flex justify-between items-center">
        {/* LEFT SIDE **** */}
        <div className="flex items-center justify-center gap-3">
          <IoMdMenu
            className="text-[2.8rem] cursor-pointer"
            onClick={toggleAdminSideBarOpen}
          />
          <h2 className="text-[1.8rem] font-semibold text-[#3855b3]">Delex</h2>
        </div>
        {/* RIGHT SIDE ******* */}
        <div className="flex items-center gap-6">
          <div>
            <span className="sr-only">Search-icon</span>
            <IoIosSearch className="text-[2rem]" />
          </div>
          <div className="relative">
            <span className="sr-only">Notification-icon</span>
            <IoMdNotificationsOutline className="text-[2rem]" />
            <span className="inline-block w-2 h-2 bg-red-600 rounded-full absolute top-0 right-0"></span>
          </div>
          <Image
            src={
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="profile"
            width={25}
            height={25}
            className="rounded-full w-12 h-12"
          />
        </div>
      </div>
    </div>
  );
}
