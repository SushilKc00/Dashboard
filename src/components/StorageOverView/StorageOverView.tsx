import React from "react";
import Progress from "../ProgressBar/Progress";

export default function StorageOverView() {
  return (
    <div className="mt-16 flex flex-col gap-4">
      <div className="flex justify-between">
        <h2 className="common-heading-h2">Storage overview</h2>
        <p className="text-[1.1rem] text-[#b1b1b1]">
          <span className="text-black font-medium">3.4Gb</span> of 15 Gb
        </p>
      </div>
      <Progress
        Percentage={30}
        ProgressBackgroundColor="#f0f1f2"
        ProgressBarColor="#3855b3"
        Height={7}
      />
    </div>
  );
}
