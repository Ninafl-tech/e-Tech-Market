import React, { createContext, useState } from "react";

type TCartModalContext = {
  cartVisible: boolean;
  setCartVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CartModalContext = createContext<TCartModalContext>({
  cartVisible: false,
  setCartVisible: () => {},
});
