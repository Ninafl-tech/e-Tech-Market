import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

import { StMainContainer } from "../../components/StMainContainer/StMainContainer.styled";
import { StPublicLayoutContainerWrapper } from "./StPublicLayout.styled";

import { Outlet } from "react-router-dom";

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
