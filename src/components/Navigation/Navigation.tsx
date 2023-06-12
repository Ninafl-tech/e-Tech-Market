import React from "react";
import { StCard } from "../StCard/StCard.syled";
// import { NavContent } from "./NavContent/NavContent";
import { NavCategories } from "./NavCategories/NavCategories";

export function Navigation() {
  return (
    <StCard className="flex">
      <NavCategories />
      {/* <NavContent /> */}
    </StCard>
  );
}
