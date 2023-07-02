import { useState, PropsWithChildren, createContext } from "react";
import { TProduct } from "../../../../../types/Tproduct";
import { useFetchData } from "../../../../../hooks/useFetchData";
type NavContextValue = {
  productsData: TProduct[];
};

export const NavContext = createContext<NavContextValue>({ productsData: [] });

export function NavProvider({ children }: PropsWithChildren) {
  const { productsData } = useFetchData();
  const categoriesArray = productsData.map((product) => product.category);
  const categories = categoriesArray.filter(
    (category, index) => categoriesArray.indexOf(category) === index
  );
  return (
    <NavContext.Provider value={{ productsData }}>
      {children}
    </NavContext.Provider>
  );
}
