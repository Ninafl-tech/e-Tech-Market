import { Outlet } from "react-router-dom";
import { PrivateHeader } from "./PrivateHeader/PrivateHeader";
import React from "react";
import { StPublicLayoutContainerWrapper } from "../PublicLayout/StPublicLayoutContainerWrapper.styled";
import { StMainContainer } from "../../components/StMainContainer/StMainContainer.styled";

export function PrivateLayout() {
  return (
    <div>
      <PrivateHeader />
      <StPublicLayoutContainerWrapper>
        <StMainContainer>
          <Outlet />
        </StMainContainer>
      </StPublicLayoutContainerWrapper>
    </div>
  );
}
