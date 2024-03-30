import React from "react";
import { StorageCardPropType } from "@/types/Types";

export default function StorageCard({ Details }: StorageCardPropType) {
  return (
    <div
      className="px-6 py-8 rounded-md"
      style={{
        backgroundColor: Details.BackgroundColor
          ? Details.BackgroundColor
          : "#e4e4e4ff",
      }}
    >
      <div className="flex flex-col gap-2">
        {Details.Icon}
        <h2 className="common-heading-h2">{Details.Category}</h2>
        <p className="text-light-gray common-text-size">
          {Details.TotlaFiles} files
        </p>
      </div>
      <div className="mt-10">
        <p className="text-black common-text-size">3.2 GB</p>
      </div>
    </div>
  );
}
