import React, { PropsWithChildren, useEffect, useState } from "react";
import { CartModalContext } from "../contexts/CartModalContext";

export function CartModalProvider({ children }: PropsWithChildren) {
  const [cartVisible, setCartVisible] = useState<boolean>(false);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  return (
    <CartModalContext.Provider
      value={{ cartVisible, setCartVisible, totalAmount, setTotalAmount }}
    >
      {children}
    </CartModalContext.Provider>
  );
}
