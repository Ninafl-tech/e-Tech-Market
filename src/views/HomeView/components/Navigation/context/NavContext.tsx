import { useState, PropsWithChildren, createContext } from "react";
import { TProduct } from "../../../../../types/Tproduct";
import { useFetchData } from "../../../../../hooks/useFetchData";

type NavContextValue = {
  activeCategory: string;
  setActiveCategory: any;
};

export const NavContext = createContext<NavContextValue>({
  activeCategory: "",
  setActiveCategory: () => {},
});
