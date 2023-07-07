import React, { createContext } from "react";
import { TUserTypes } from "../types/TUserTypes";

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
