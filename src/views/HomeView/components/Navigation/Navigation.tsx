import { NavCategories } from "./NavCategories/NavCategories";
import { NavContext } from "./context/NavContext";
import React, { useContext, useState } from "react";
import { StContent, StCategories } from "./StNavigation.styled";

export function Navigation() {
  const [activeCategory, setActiveCategory] = useState<string>("");

  return (
    <NavContext.Provider value={{ activeCategory, setActiveCategory }}>
      <StCategories className="flex  relative">
        <div
          className="w-72"
          // onMouseLeave={() => setActiveCategory("")}
        >
          <NavCategories />
        </div>
        <StContent className="bg-red relative">contenti</StContent>
      </StCategories>
    </NavContext.Provider>
  );
}
