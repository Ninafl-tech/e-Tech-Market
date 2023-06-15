import React from "react";
import { useState } from "react";
// import { NavContent } from "./NavContent/NavContent";
import { NavCategories } from "./NavCategories/NavCategories";
import { NavContext } from "./context/NavContext";

export function Navigation() {
  const [activeCategory, setActiveCategory] = useState<string>("");
  console.log(activeCategory);
  return (
    <NavContext.Provider value={{ activeCategory, setActiveCategory }}>
      <div
        className="flex w-72 relative"
        onMouseLeave={() => setActiveCategory("")}
      >
        {/* // NavHeader */}
        <NavCategories />
      </div>
    </NavContext.Provider>
  );
}
