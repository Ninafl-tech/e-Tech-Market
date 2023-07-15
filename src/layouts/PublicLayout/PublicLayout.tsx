import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

import { StMainContainer } from "../../components/StMainContainer/StMainContainer.styled";
import { StPublicLayoutContainerWrapper } from "./StPublicLayoutContainerWrapper.styled";
import { CartModalContext } from "../../contexts/CartModalContext";
import { CartModal } from "../../views/CartView/CartModal";

import { Outlet } from "react-router-dom";
import React, { useContext } from "react";

export function PublicLayout() {
  const { cartVisible } = useContext(CartModalContext);
  return (
    <div>
      <Header />
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
