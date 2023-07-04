import { NavCategories } from "./NavCategories/NavCategories";
import { NavContext } from "./context/NavContext";
import React, { useContext, useState } from "react";
import { StContent, StCategories } from "./StNavigation.styled";
import { Slider } from "../../../../components/Slider/Slider";

export function Navigation() {
  const [activeCategory, setActiveCategory] = useState<string>("");

  return (
    <NavContext.Provider value={{ activeCategory, setActiveCategory }}>
      <div className="flex  relative">
        <StCategories onMouseLeave={() => setActiveCategory("")}>
          <NavCategories />
        </StCategories>
        <StContent className="bg-red ">
          <Slider />
          {/* <img
            className="opacity-100 hover:opacity-50 transition duration-500 ease-in-out"
            src="https://d2xamzlzrdbdbn.cloudfront.net/BlogImages/322b9567-c69f-48d6-9f72-a733a8e9affa.jpg"
            alt="content"
          /> */}
        </StContent>
      </div>
    </NavContext.Provider>
  );
}
