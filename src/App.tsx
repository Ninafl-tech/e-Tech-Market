import React from "react";
import { useState } from "react";
import { lazy, Suspense, useCallback, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import { PublicLayout } from "./layouts/PublicLayout/PublicLayout";
import { PrivateLayout } from "./layouts/PrivateLayout/PrivateLayout";
import { TUserTypes } from "./types/TUserTypes";

const HomeView = lazy(() => import("./views/HomeView/HomeView"));
const ProductsView = lazy(() => import("./views/ProductsViews/ProductsView"));
const ProductDetailView = lazy(
  () => import("./views/ProductDetailView/ProductDetailView")
);
const LoginView = lazy(() => import("./views/LoginView/LoginView"));
const RegisterView = lazy(() => import("./views/RegisterView/RegisterView"));
const SearchResults = lazy(() => import("./views/SearchResults/SearchResults"));
// const CartView = lazy(() => import("./views/CartView/CartView"));
const PaymentView = lazy(() => import("./views/PaymentView/PaymentView"));
const AdminView = lazy(() => import("./views/AdminView/AdminView"));
const UserView = lazy(() => import("./views/UserView/UserView"));
const AddProduct = lazy(
  () => import("./views/AdminView/views/AddProduct/AddProduct")
);
const ProductTable = lazy(
  () => import("./views/AdminView/views/ProductTable/ProductTable")
);
const EditProduct = lazy(
  () => import("./views/AdminView/views/EditProduct/EditProduct")
);

function App() {
  const { currentUser } = useContext(CurrentUserContext);

  const handleRoots = useCallback((currentUser: TUserTypes) => {
    switch (currentUser) {
      case TUserTypes.GUEST:
        return (
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<HomeView />} />
              <Route path="/products" element={<ProductsView />} />
              <Route path="/products/:id" element={<ProductDetailView />} />
              <Route
                path="/searchResults/:searchKeyword?"
                element={<SearchResults />}
              />
              <Route path="/login" element={<LoginView />} />
              <Route path="/register" element={<RegisterView />} />
            </Route>
          </Routes>
        );
      case TUserTypes.USER:
        return (
          <Routes>
            <Route element={<PrivateLayout />}>
              <Route path="/" element={<HomeView />} />
              <Route path="/products" element={<ProductsView />} />
              <Route path="/products/:id" element={<ProductDetailView />} />
              <Route
                path="/searchResults/:searchKeyword"
                element={<SearchResults />}
              />
              <Route path="/pay" element={<PaymentView />} />
              <Route path="/login" element={<LoginView />} />
              <Route path="/register" element={<RegisterView />} />
              <Route path="/user" element={<UserView />} />
            </Route>
          </Routes>
        );
      case TUserTypes.ADMIN:
        return (
          <Routes>
            <Route element={<PrivateLayout />}>
              <Route path="/" element={<HomeView />} />
              <Route path="/products" element={<ProductsView />} />
              <Route path="/products/:id" element={<ProductDetailView />} />
              <Route
                path="/searchResults/:searchKeyword"
                element={<SearchResults />}
              />
              <Route path="/pay" element={<PaymentView />} />
              <Route path="/login" element={<LoginView />} />
              <Route path="/register" element={<RegisterView />} />
              <Route path="/admin" element={<AdminView />} />
              <Route path="/admin/add" element={<AddProduct />} />
              <Route path="/admin/products" element={<ProductTable />} />
              <Route path="/admin/edit/:id" element={<EditProduct />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        );
    }
  }, []);

  return <Suspense>{handleRoots(currentUser)}</Suspense>;
}

export default App;
