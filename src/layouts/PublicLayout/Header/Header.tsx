import { HeaderWrapper, HeaderContainer } from "./StHeader.styled";
import { StMainContainer } from "../../../components/StMainContainer/StMainContainer.styled";
import { LogoDiv, SearchBar, UserCorner, UserItem } from "./StHeader.styled";
import { StHeader } from "./StHeader.styled";
import { LocaleContext } from "../../../contexts/LocaleContext";

import { ProductSearchbar } from "./ProductSearchbar/ProductSearchbar";
import { StProductSearchbar } from "./ProductSearchbar/StProductSearchbar.styled";

import { User } from "@styled-icons/boxicons-solid";

import { UserPlus } from "@styled-icons/boxicons-solid/UserPlus";
import { ShoppingCart } from "@styled-icons/material-sharp/ShoppingCart";
import { Home } from "@styled-icons/boxicons-solid/Home";

import { To, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { MenuOutline } from "styled-icons/evaicons-outline";
import locale from "antd/es/locale";
import { FormattedMessage } from "react-intl";
import { TUserTypes } from "../../../types/TUserTypes";

export function Header() {
  const navigate = useNavigate();
  const { locale, setLocale } = useContext(LocaleContext);

  function buttonClick(path: To) {
    navigate(path);
  }
  return (
    <>
      <StHeader>
        <HeaderWrapper>
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
              <h3 className="text-customBlue text-3xl">eMarket.ge</h3>
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
              <div
                className="text-solidGray"
                onClick={() => buttonClick("/register")}
              >
                <UserPlus size={24} />
                <p>Register</p>
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
        </HeaderWrapper>
      </StHeader>
      <StHeader>
        <HeaderWrapper>
          <div className=" flex justify-between items-center p-1.5">
            <div className="flex">
              <div
                className=" flex justify-center items-center cursor-pointer  text-solidGray rounded p-1.5 hover:bg-gray-100  hover:text-black"
                onClick={() => navigate("/products")}
              >
                <MenuOutline size={24} />
                <button>
                  <FormattedMessage id="all.products" />
                </button>
              </div>
            </div>
            <div className="text-solidGray rounded p-1.5 flex">
              <select
                name=""
                id=""
                value={locale}
                onChange={(e) => setLocale(e.target.value as "en" | "de")}
              >
                <option value={"en"}>
                  English
                  <div className="flex items-center">
                    <img
                      className="w-7 h-full"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
                    />
                  </div>
                </option>

                <option value={"de"}>
                  German
                  <div className="flex items-center">
                    <img
                      className="w-7 h-full"
                      src="https://img.freepik.com/premium-vector/vector-image-british-flag-england-sign-kingdom-great-britain-lovely-london-badge_213497-1010.jpg?w=2000"
                      alt=""
                    />
                  </div>
                </option>
                {}
              </select>
              {}
            </div>
          </div>
        </HeaderWrapper>
      </StHeader>
    </>
  );
}
