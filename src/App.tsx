import React from "react";
import { lazy, Suspense, useCallback, useContext } from "react";
import { AuthContext, TAuthorizationStatus } from "./contexts/AuthContext";
import { Route, Routes, Navigate } from "react-router-dom";

import { PublicLayout } from "./layouts/PublicLayout/PublicLayout";
import { PrivateLayout } from "./layouts/PrivateLayout/PrivateLayout";

const HomeView = lazy(() => import("./views/HomeView/HomeView"));
const ProductsView = lazy(() => import("./views/ProductsView/ProductsView"));
const ProductDetailView = lazy(
  () => import("./views/ProductDetailView/ProductDetailView")
);
const LoginView = lazy(() => import("./views/LoginView/LoginView"));
const RegisterView = lazy(() => import("./views/RegisterView/RegisterView"));
const SearchView = lazy(() => import("./views/SearchView/SearchView"));

function App() {
  const { status } = useContext(AuthContext);

  const handleRoots = useCallback((status: TAuthorizationStatus) => {
    switch (status) {
      case TAuthorizationStatus.AUTHORIZED:
        return (
          <Routes>
            <Route element={<PrivateLayout />}>
              <Route path="/" element={<div>authorized</div>} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        );
      case TAuthorizationStatus.UNAUTHORIZED:
        return (
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<HomeView />} />
              <Route path="/products/:id" element={<ProductDetailView />} />
              <Route path="/login" element={<LoginView />} />
              <Route path="/register" element={<RegisterView />} />
              <Route path="/products" element={<ProductsView />} />
              <Route path="/products/:query" element={<ProductsView />} />
            </Route>
          </Routes>
        );
    }
  }, []);

  return <Suspense>{handleRoots(status)}</Suspense>;
}

export default App;
