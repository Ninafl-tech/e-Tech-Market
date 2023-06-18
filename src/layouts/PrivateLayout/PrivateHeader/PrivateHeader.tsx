import React from "react";
import {
  AuthContext,
  TAuthorizationStatus,
} from "../../../contexts/AuthContext";
import { useContext } from "react";
import { User, UserPlus, Home, UserMinus } from "@styled-icons/boxicons-solid";
import { ShoppingCart } from "styled-icons/entypo";
import { StMainContainer } from "../../../components/StMainContainer/StMainContainer.styled";
import { ProductSearchbar } from "../../PublicLayout/Header/ProductSearchbar/ProductSearchbar";
import { StProductSearchbar } from "../../PublicLayout/Header/ProductSearchbar/StProductSearchbar.styled";
import {
  HeaderContainer,
  LogoDiv,
  SearchBar,
  UserCorner,
  UserItem,
} from "../../PublicLayout/Header/StHeader.styled";

export function PrivateHeader() {
  const { status, setStatus } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("AccessToken");
    setStatus(TAuthorizationStatus.UNAUTHORIZED);
  };

  function buttonClick(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <StMainContainer>
        <HeaderContainer className="flex justify-between py-6 items-center">
          <LogoDiv>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="dodgerblue"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              />
            </svg>
            <h3 className="text-customBlue text-3xl">eTechMarket.ge</h3>
          </LogoDiv>
          <SearchBar>
            <StProductSearchbar>
              <ProductSearchbar />
            </StProductSearchbar>
          </SearchBar>

          <UserCorner>
            <UserItem onClick={() => buttonClick("/login")}>
              <User size={24} />
              <p>Profile</p>
            </UserItem>
            <div className="text-solidGray" onClick={() => handleLogout()}>
              <UserMinus size={24} />
              <p>Log Out</p>
            </div>
            <div className="text-solidGray">
              <ShoppingCart size={24} />
              <p>My Card</p>
            </div>
            <div className="text-solidGray" onClick={() => buttonClick("/")}>
              <Home size={24} />
              <p>Home</p>
            </div>
          </UserCorner>
        </HeaderContainer>
      </StMainContainer>
    </div>
  );
}
