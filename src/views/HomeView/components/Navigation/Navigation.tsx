import { NavCategories } from "./NavCategories/NavCategories";
import { NavContext } from "./context/NavContext";
import React, { useContext, useState } from "react";
import { StContent, StCategories } from "./StNavigation.styled";

export function Navigation() {
  const [activeCategory, setActiveCategory] = useState<string>("");

  return (
    <NavContext.Provider value={{ activeCategory, setActiveCategory }}>
      <div className="flex  relative">
        <StCategories
          className="w-72"
          onMouseLeave={() => setActiveCategory("")}
        >
          <NavCategories />
        </StCategories>
        <StContent className="bg-red ">
          <img
            className="opacity-100 hover:opacity-50 transition duration-500 ease-in-out"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
            alt="content"
          />
        </StContent>
      </div>
    </NavContext.Provider>
  );
}
