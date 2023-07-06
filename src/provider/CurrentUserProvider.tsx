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
import { J, T } from "styled-icons/fa-solid";

export enum TUserTypes {
  ADMIN = "ADMIN",
  GUEST = "GUEST",
  USER = "USER",
}

type TCurrentUserContext = {
  currentUser: TUserTypes;
  setCurrentUser: React.Dispatch<React.SetStateAction<TUserTypes>>;
  pending: boolean;
  setPending: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CurrentUserContext = createContext<TCurrentUserContext>({
  currentUser: TUserTypes.GUEST,
  setCurrentUser: () => {},
  pending: true,
  setPending: () => {},
});

export function CurrentUserProvider({ children }: PropsWithChildren) {
  const [currentUser, setCurrentUser] = useState<TUserTypes>(TUserTypes.GUEST);
  const [pending, setPending] = useState<boolean>(true);

  const accessToken = localStorage.getItem("AccessToken");

  useEffect(() => {
    if (accessToken) {
      const { isAdmin }: { isAdmin: boolean } = jwt_decode(accessToken);
      console.log(jwt_decode(accessToken));

      if (isAdmin) {
        setCurrentUser(TUserTypes.ADMIN);
      } else {
        setCurrentUser(TUserTypes.USER);
      }
      setPending(false);
    } else {
      setPending(false);
    }
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ pending, setPending, currentUser, setCurrentUser }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}
