import React from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { StCard } from "../../components/StCard/StCard.syled";


export default function HomeView() {
  return (
    <StCard>
      <Navigation />
    </StCard>
  );
}
