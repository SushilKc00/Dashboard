import { MyContextType } from "@/types/Types";
import { createContext, useContext, Dispatch, SetStateAction } from "react";

const ContextProvider = createContext<MyContextType>({
  isAdminSideBarOpen: false,
  toggleAdminSideBarOpen: () => {},
});

export default ContextProvider;

export const useMyContext = () => {
  return useContext(ContextProvider);
};
