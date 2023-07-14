import React, { PropsWithChildren, useEffect, useState } from "react";
import { CartModalContext } from "../contexts/CartModalContext";

export function CartModalProvider({ children }: PropsWithChildren) {
  const [cartVisible, setCartVisible] = useState<boolean>(false);

  return (
    <CartModalContext.Provider value={{ cartVisible, setCartVisible }}>
      {children}
    </CartModalContext.Provider>
  );
}
