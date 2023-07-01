import jwt_decode from "jwt-decode";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

export type CurrentUserContext = {
  currentUser: {
    user_id: string;
    user_role: string;
  };
  setCurrentUser: React.Dispatch<
    React.SetStateAction<{
      user_id: string;
      user_role: string;
    }>
  >;
};

export const CurrentUserContext = createContext<CurrentUserContext>({
  currentUser: {
    user_id: "",
    user_role: "",
  },
  setCurrentUser: () => {},
});

export function CurrentUserProvider({ children }: PropsWithChildren) {
  const [currentUser, setCurrentUser] = useState<{
    user_id: string;
    user_role: string;
  }>({
    user_id: "",
    user_role: "",
  });
  useEffect(() => {
    const token = localStorage.getItem("access-token");
    if (token) {
      const decodedToken = jwt_decode(token);
      setCurrentUser({
        user_id: (decodedToken as { id: string; role: string }).id,
        user_role: (decodedToken as { id: string; role: string }).role,
      });
    }
  }, []);
  console.log(currentUser);

  //   if (currentUser.user_id) {
  //     return <></>;
  //   }
  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}
