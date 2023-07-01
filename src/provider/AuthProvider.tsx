import React from "react";

import { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Tlocalstorage } from "../types/TlocalStorage";
import { TAuthorizationStatus } from "../contexts/AuthContext";

export function AuthProvider({ children }: PropsWithChildren) {
  const [status, setStatus] = useState<TAuthorizationStatus>(
    TAuthorizationStatus.UNAUTHORIZED
  );

  useEffect(() => {
    const token = localStorage.getItem("access-token");
    if (token) {
      setStatus(TAuthorizationStatus.AUTHORIZED);
      console.log(status);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ status, setStatus }}>
      {children}
    </AuthContext.Provider>
  );
}
