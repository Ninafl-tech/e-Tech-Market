import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

import { StMainContainer } from "../../components/StMainContainer/StMainContainer.styled";
import { StPublicLayoutContainerWrapper } from "./StPublicLayoutContainerWrapper.styled";

import { Outlet } from "react-router-dom";
import React from "react";

export function PublicLayout() {
  return (
    <div>
      <Header />
      <StPublicLayoutContainerWrapper>
        <StMainContainer>
          <Outlet />
        </StMainContainer>
      </StPublicLayoutContainerWrapper>
      <Footer />
    </div>
  );
}
