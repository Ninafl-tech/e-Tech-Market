import { createContext } from "react";

type TGlobalContext = {
  cartItems: string[];
  setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
};

export const GlobalContext = createContext<TGlobalContext>({
  cartItems: [],
  setCartItems: () => {},
});
