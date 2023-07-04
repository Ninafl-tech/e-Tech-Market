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
  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem("AccessToken");
      if (accessToken) {
        try {
          const resp = await axios.get(`${baseURL}/me`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          setCurrentUser(resp.data);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}
