import { NavBrands } from "./NavBrands/NavBrands";
import React from "react";
import { StContent, StBrands } from "./StNavigation.styled";
import { Slider } from "../../../../components/Slider/Slider";

export function Navigation() {
  return (
    <div className="flex  relative p-5">
      <StBrands>
        <NavBrands />
      </StBrands>
      <StContent>
        <Slider />
      </StContent>
    </div>
  );
}
