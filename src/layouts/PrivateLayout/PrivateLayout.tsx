import { Outlet } from "react-router-dom";
import { PrivateHeader } from "./PrivateHeader/PrivateHeader";
import React, { useContext } from "react";
import { StPublicLayoutContainerWrapper } from "../PublicLayout/StPublicLayoutContainerWrapper.styled";
import { StMainContainer } from "../../components/StMainContainer/StMainContainer.styled";
import { CartModalContext } from "../../contexts/CartModalContext";
import { CartModal } from "../../views/CartView/CartModal";
import { Footer } from "../PublicLayout/Footer/Footer";

export function PrivateLayout() {
  const { cartVisible } = useContext(CartModalContext);
  return (
    <div>
      <PrivateHeader />
      <StPublicLayoutContainerWrapper>
        <StMainContainer>
          {cartVisible && <CartModal />}
          <Outlet />
        </StMainContainer>
      </StPublicLayoutContainerWrapper>
      <Footer />
    </div>
  );
}
