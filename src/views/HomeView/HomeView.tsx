import React from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { StCard } from "../../components/StCard/StCard.syled";
// import { Slider } from "../../components/Slider/Slider";

export default function HomeView() {
  return (
    <StCard className="shadow-lg">
      <Navigation />
      {/* <Slider /> */}
    </StCard>
  );
}
