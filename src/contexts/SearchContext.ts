import React from "react";

import { createContext } from "react";

export type SearchContextValue = {
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchContext = createContext<SearchContextValue>({
  searchKeyword: "",
  setSearchKeyword: () => {},
});
