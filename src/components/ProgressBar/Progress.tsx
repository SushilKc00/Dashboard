import { ProgressBarPropsType } from "@/types/Types";
import React from "react";

export default function Progress({
  Percentage,
  ProgressBarColor,
  ProgressBackgroundColor,
  Height,
}: ProgressBarPropsType) {
  return (
    <div
      className="rounded-md w-full"
      style={{
        backgroundColor: ProgressBackgroundColor,
        height: Height ? `${Height}px` : "3px",
      }}
    >
      <div
        className="h-full rounded-md"
        style={{
          width: `${Percentage}%`,
          backgroundColor: ProgressBarColor,
        }}
      ></div>
    </div>
  );
}
