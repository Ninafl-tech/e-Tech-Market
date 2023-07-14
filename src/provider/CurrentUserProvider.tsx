import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { TUserTypes } from "../types/TUserTypes";
import jwt_decode from "jwt-decode";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

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
