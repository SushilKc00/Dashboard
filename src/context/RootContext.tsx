import React, { useState } from "react";
import ContextProvider from "./CreateContext";
import { RootContextPropsType } from "@/types/Types";

export default function RootContext({ children }: RootContextPropsType) {
  const [isAdminSideBarOpen, setAdminSideBarOpen] = useState<boolean>(false);

  const toggleAdminSideBarOpen = () => {
    document.body.classList.toggle("bg-salmon");
    setAdminSideBarOpen(!isAdminSideBarOpen);
  };
  return (
    <ContextProvider.Provider
      value={{ isAdminSideBarOpen, toggleAdminSideBarOpen }}
    >
      {children}
    </ContextProvider.Provider>
  );
}
