import React from "react";

import { PropsWithChildren, useEffect, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";

export function SearchProvider({ children }: PropsWithChildren) {
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  return (
    <SearchContext.Provider
      value={{
        searchKeyword,
        setSearchKeyword,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
