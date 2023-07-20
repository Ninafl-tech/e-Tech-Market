import React, { createContext, useState } from "react";

type TCartModalContext = {
  cartVisible: boolean;
  setCartVisible: React.Dispatch<React.SetStateAction<boolean>>;
  totalAmount: number;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
};

export const CartModalContext = createContext<TCartModalContext>({
  cartVisible: false,
  setCartVisible: () => {},
  totalAmount: 0,
  setTotalAmount: () => {},
});
