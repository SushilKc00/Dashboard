"use client";
import AdminHeadr from "@/components/AdminHeader/AdminHeadr";
import AdminSideBar from "@/components/AdminSideBar/AdminSideBar";
import { useMyContext } from "@/context/CreateContext";
import RootContext from "@/context/RootContext";

import React from "react";

interface AdminLayoutType {
  children: React.ReactNode;
}

export default function Adminlayout({ children }: AdminLayoutType) {
  return (
    <RootContext>
      {/* TOP HEADER****** */}
      <AdminHeadr />

      {/* CONTENT SECTION**** */}
      <div className="flex">
        {/* SIDE BAR ***** */}
        <AdminSideBar />

        {/* CHILDREN CONTENT ********/}
        <div className="pl-4 py-8 flex-[5] h-[100vh] w-full overflow-y-auto hide-scroll-bar">
          {children}
        </div>
      </div>
    </RootContext>
  );
}
