import React, { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { TAuthorizationStatus } from "../contexts/AuthContext";

export function AuthProvider({ children }: PropsWithChildren) {
  const [status, setStatus] = useState<TAuthorizationStatus>(
    TAuthorizationStatus.UNAUTHORIZED
  );

  useEffect(() => {
    const token = localStorage.getItem("AccessToken");
    if (token) {
      setStatus(TAuthorizationStatus.AUTHORIZED);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ status, setStatus }}>
      {children}
    </AuthContext.Provider>
  );
}
