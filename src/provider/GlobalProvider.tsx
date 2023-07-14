import React, { PropsWithChildren, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export function GlobalProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<string[]>([]);

  return (
    <GlobalContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </GlobalContext.Provider>
  );
}
