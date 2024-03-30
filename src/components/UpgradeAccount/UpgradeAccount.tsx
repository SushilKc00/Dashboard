import Image from "next/image";
import React from "react";

export default function UpgradeAccount() {
  return (
    <div className="flex justify-between bg-light-gray py-10 px-8 rounded-lg">
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
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzzJQskO8CaZIsTfiDruvhgfhZWrNYPPdpg&usqp=CAU"
          }
          alt="image"
          width={120}
          height={30}
          className="w-[100px] h-[80px]"
        />
      </div>
    </div>
  );
}
