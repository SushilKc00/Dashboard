"use client";
import React from "react";
import RecentFile from "@/components/RecentFiles/RecentFile";
import StorageDetails from "@/components/StorageDetails/StorageDetails";
import StorageOverView from "@/components/StorageOverView/StorageOverView";
import UpgradeAccount from "@/components/UpgradeAccount/UpgradeAccount";
import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "@/datas/TableData";

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
        <div className="w-full mt-6">
          <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
            hideFooter
            autoHeight
            style={{
              fontSize: "1.3rem",
              fontWeight: 400,
              textTransform: "capitalize",
            }}
          />
        </div>
      </div>
    </div>
  );
}
