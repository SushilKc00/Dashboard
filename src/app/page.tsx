"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center bg-[#EFF1F9] h-[100vh]">
      <Link
        href={"/dashboard/overview"}
        className="bg-[#3855b3] text-white border border-gray-800 px-10 py-4 rounded-md text-[1.4rem] hover:bg-transparent hover:text-[#1c1c1c] transition-all"
      >
        Got To Dahsborad
      </Link>
    </main>
  );
}
