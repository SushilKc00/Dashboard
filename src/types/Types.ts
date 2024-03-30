import { ReactNode } from "react";

export interface ProgressBarPropsType {
  Percentage: number;
  ProgressBarColor: string;
  ProgressBackgroundColor: string;
  Height?: number;
}

export interface StorageCardPropType {
  Key?: number;
  Details: {
    Category: string;
    TotlaFiles: number;
    Storage: number;
    Icon: JSX.Element;
    BackgroundColor?: string;
  };
}

export interface RootContextPropsType {
  children: ReactNode;
}

export interface MyContextType {
  isAdminSideBarOpen: boolean;
  toggleAdminSideBarOpen: () => void;
}
