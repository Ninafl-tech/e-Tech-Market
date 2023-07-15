import { createContext } from "react";

export type TLocaleContextValue = {
  locale: "en" | "de";
  setLocale: React.Dispatch<React.SetStateAction<"en" | "de">>;
};

export const LocaleContext = createContext<TLocaleContextValue>({
  locale: "en",
  setLocale: () => {},
});
