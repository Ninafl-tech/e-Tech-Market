import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { baseURL } from "../config/baseURL.config";

export type TCurrentUserContext = {
  currentUser: {
    id: string;
    firstName: string;
    lastName: string;
  };
  setCurrentUser: React.Dispatch<
    React.SetStateAction<{
      id: string;
      firstName: string;
      lastName: string;
    }>
  >;
};

export const CurrentUserContext = createContext<TCurrentUserContext>({
  currentUser: {
    id: "",
    firstName: "",
    lastName: "",
  },
  setCurrentUser: () => {},
});

export function CurrentUserProvider({ children }: PropsWithChildren<{}>) {
  const [currentUser, setCurrentUser] = useState<{
    id: string;
    firstName: string;
    lastName: string;
  }>({
    id: "",
    firstName: "",
    lastName: "",
  });

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}
