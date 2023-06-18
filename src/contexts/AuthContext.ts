import React from "react";

import { createContext } from "react";

export enum TAuthorizationStatus {
  AUTHORIZED = "authorized",
  UNAUTHORIZED = "unauthorized",
}

type TAuthContext = {
  status: TAuthorizationStatus;
  setStatus: React.Dispatch<React.SetStateAction<TAuthorizationStatus>>;
};

export const AuthContext = createContext<TAuthContext>({
  status: TAuthorizationStatus.UNAUTHORIZED,
  setStatus: () => {},
});
