import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { baseURL } from "../config/baseURL.config";
import { Tlocalstorage } from "../types/TlocalStorage";
import jwt_decode from "jwt-decode";
import { T } from "styled-icons/fa-solid";

export enum TUserTypes {
  ADMIN = "ADMIN",
  GUEST = "GUEST",
  USER = "USER",
}

type TCurrentUserContext = {
  currentUser: TUserTypes;
  setCurrentUser: React.Dispatch<React.SetStateAction<TUserTypes>>;
};

export const CurrentUserContext = createContext<TCurrentUserContext>({
  currentUser: TUserTypes.GUEST,
  setCurrentUser: () => {},
});

export function CurrentUserProvider({ children }: PropsWithChildren) {
  const [currentUser, setCurrentUser] = useState<TUserTypes>(TUserTypes.GUEST);

  const accessToken = localStorage.getItem("AccessToken");

  useEffect(() => {
    if (accessToken) {
      const { isAdmin }: { isAdmin: boolean } = jwt_decode(accessToken);
      console.log(isAdmin);
      if (isAdmin) {
        setCurrentUser(TUserTypes.ADMIN);
      } else {
        setCurrentUser(TUserTypes.USER);
      }
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}
