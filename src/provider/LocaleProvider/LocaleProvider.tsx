import React, { PropsWithChildren, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import en from "./translations/en.json";
import de from "./translations/de.json";

import { LocaleContext } from "../../contexts/LocaleContext";

export function LocaleProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<"en" | "de">("en");

  const languageStorage = localStorage.getItem("en");

  useEffect(() => {}, []);

  const messages = { en, de };
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
        defaultLocale="en"
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}
