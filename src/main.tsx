import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/reset.css";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { CurrentUserProvider } from "./provider/CurrentUserProvider";
import { CartModalProvider } from "./provider/CartModalProvider";
import { GlobalProvider } from "./provider/GlobalProvider";
// import { LocaleProvider } from "./provider/LocaleProvider/LocaleProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <QueryClientProvider client={queryClient}>
          <CurrentUserProvider>
            <CartModalProvider>
              {/* <LocaleProvider> */}
              <App />
              {/* </LocaleProvider> */}
            </CartModalProvider>
          </CurrentUserProvider>
        </QueryClientProvider>
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
