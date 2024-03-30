import RecentFile from "@/components/RecentFiles/RecentFile";
import StorageDetails from "@/components/StorageDetails/StorageDetails";
import StorageOverView from "@/components/StorageOverView/StorageOverView";
import UpgradeAccount from "@/components/UpgradeAccount/UpgradeAccount";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="border-b border-b-gray-200 pb-3">
        <h2 className="common-heading-h2">Overview</h2>
      </div>

      <div className="pr-6 mt-10">
        <UpgradeAccount />
        <StorageOverView />
        <StorageDetails />
        <RecentFile />
      </div>
    </div>
  );
}
