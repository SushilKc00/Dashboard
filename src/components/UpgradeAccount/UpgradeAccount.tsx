import Image from "next/image";
import React from "react";
import Cat from "../../../public/images/cat.png";

export default function UpgradeAccount() {
  return (
    <div className="flex justify-between items-center bg-light-gray py-10 px-8 rounded-lg">
      <div className="flex flex-col gap-3">
        <h2 className="common-heading-h2">Upgrade Account</h2>
        <p className="text-dark-gray common-text-size">
          100 Gb storage, Access to Delex Support experts
        </p>
        <div>
          <button className="common-btn-layout">Upgrade Account</button>
        </div>
      </div>
      <div>
        <Image
          src={Cat}
          alt="image"
          width={120}
          height={30}
          className="w-[150px] h-[100px]"
        />
      </div>
    </div>
  );
}
