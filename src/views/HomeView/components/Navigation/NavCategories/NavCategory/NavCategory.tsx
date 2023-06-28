import { useContext } from "react";
import { NavContext } from "../../context/NavContext";
import { NavContent } from "./NavContent/NavContent";
import { Tcategory } from "../../../../../../types/TnavCategory";
import React from "react";

export function NavCategory({ category }: { category: string }) {
  // const { activeCategory, setActiveCategory } = useContext(NavContext);
  return (
    <div
      className=" p-2 cursor-pointer text-center border-b-2"
      // onMouseEnter={() => setActiveCategory(category)}
    >
      <div>{category}</div>
      {/* {activeCategory === category && <NavContent />} */}
    </div>
  );
}
