import React from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { StCard } from "../../components/StCard/StCard.syled";
import { HotOffers } from "./components/HotOffers/HotOffers";

export default function HomeView() {
  return (
    <>
      <StCard className="shadow-lg">
        <Navigation />
      </StCard>
      <HotOffers />
    </>
  );
}
