import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/reset.css";
import "./index.css";
import { AuthProvider } from "./provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { CurrentUserProvider } from "./provider/CurrentUserProvider";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CurrentUserProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </CurrentUserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
