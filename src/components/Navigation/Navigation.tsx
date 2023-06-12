import React from "react";
// import { NavContent } from "./NavContent/NavContent";
import { NavCategories } from "./NavCategories/NavCategories";

export function Navigation() {
  return (
    <div className="flex w-96">
      {/* // NavHeader */}
      <NavCategories />
      {/* <NavContent /> */}
    </div>
  );
}
