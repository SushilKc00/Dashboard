import React from "react";
import StorageCard from "../Cards/StorageCard";
import { GoFileDirectoryFill } from "react-icons/go";
import { IoMdPhotos } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { FaFolder } from "react-icons/fa6";

const CardDetails = [
  {
    Category: "Shared Files",
    TotlaFiles: 1200,
    Storage: 3.2,
    Icon: <GoFileDirectoryFill size={16} color="#c02c69" />,
    BackgroundColor: "#faf0e7",
  },
  {
    Category: "Media",
    TotlaFiles: 1200,
    Storage: 3.2,
    Icon: <IoMdPhotos size={16} color="#ff6422" />,
    BackgroundColor: "#fff8e1",
  },
  {
    Category: "Documents",
    TotlaFiles: 1200,
    Storage: 3.2,
    Icon: <IoDocumentText size={16} color="#4a4de6" />,
    BackgroundColor: "#e1f5fd",
  },
  {
    Category: "Others",
    TotlaFiles: 1200,
    Storage: 3.2,
    Icon: <FaFolder size={16} color="#4caf50" />,
    BackgroundColor: "#faf0e7",
  },
];

export default function StorageDetails() {
  return (
    <div className="mt-6">
      <h3 className="common-text-size text-light-gray uppercase tracking-tighter">
        Storage details
      </h3>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mt-4">
        {CardDetails.map((Details, Index) => (
          <StorageCard key={Index} Details={Details} />
        ))}
      </div>
    </div>
  );
}
