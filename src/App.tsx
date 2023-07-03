import React from "react";
import { lazy, Suspense, useCallback, useContext } from "react";
import { AuthContext, TAuthorizationStatus } from "./contexts/AuthContext";
import { Route, Routes, Navigate } from "react-router-dom";
import { CurrentUserContext } from "./provider/CurrentUserProvider";
import { PublicLayout } from "./layouts/PublicLayout/PublicLayout";
import { PrivateLayout } from "./layouts/PrivateLayout/PrivateLayout";

const HomeView = lazy(() => import("./views/HomeView/HomeView"));
const ProductsView = lazy(() => import("./views/ProductsViews/ProductsView"));
const ProductDetailView = lazy(
  () => import("./views/ProductDetailView/ProductDetailView")
);
const LoginView = lazy(() => import("./views/LoginView/LoginView"));
const RegisterView = lazy(() => import("./views/RegisterView/RegisterView"));
const SearchResults = lazy(() => import("./views/SearchResults/SearchResults"));
const CartView = lazy(() => import("./views/CartView/CartView"));
const PaymentView = lazy(() => import("./views/PaymentView/PaymentView"));
const AdminView = lazy(() => import("./views/AdminView/AdminView"));
const ProductTableView = lazy(
  () => import("./views/AdminView/ProductTableView/ProductTableView")
);

function App() {
  const { status } = useContext(AuthContext);
  const { currentUser } = useContext(CurrentUserContext);

  // return (
  //   <Suspense fallback={<div>Loading...</div>}>
  //     <Routes>
  //       {status === TAuthorizationStatus.UNAUTHORIZED ||
  //         status === TAuthorizationStatus.AUTHORIZED ||
  //         (currentUser.user_role === "ADMIN" && (
  //           <Route element={<PublicLayout />}>
  //             <Route path="/" element={<HomeView />} />
  //             <Route path="/products" element={<ProductsView />} />
  //             <Route path="/products/:id" element={<ProductDetailView />} />
  //             <Route
  //               path="/searchResults/:searchKeyword"
  //               element={<SearchResults />}
  //             />
  //             <Route path="/cart" element={<CartView />} />
  //             <Route path="/login" element={<LoginView />} />
  //             <Route path="/register" element={<RegisterView />} />
  //             <Route path="*" element={<Navigate to="/" />} />
  //           </Route>
  //         ))}

  //       {status === TAuthorizationStatus.AUTHORIZED && (
  //         <Route element={<PrivateLayout />}>
  //           <Route path="/" element={<HomeView />} />
  //           <Route path="/products" element={<ProductsView />} />
  //           <Route path="/products/:id" element={<ProductDetailView />} />
  //           <Route
  //             path="/searchResults/:searchKeyword"
  //             element={<SearchResults />}
  //           />
  //           <Route path="/cart" element={<CartView />} />
  //           <Route path="/login" element={<LoginView />} />
  //           <Route path="/register" element={<RegisterView />} />
  //           <Route path="/pay" element={<PaymentView />} />
  //           <Route path="*" element={<Navigate to="/" />} />
  //         </Route>
  //       )}
  //       {status === TAuthorizationStatus.AUTHORIZED &&
  //         currentUser.user_role === "ADMIN" && (
  //           <Route element={<PrivateLayout />}>
  //             <Route path="/admin" element={<AdminView />} />
  //             <Route path="/" element={<HomeView />} />
  //             <Route path="/products" element={<ProductsView />} />
  //             <Route path="/products/:id" element={<ProductDetailView />} />
  //             <Route
  //               path="/searchResults/:searchKeyword"
  //               element={<SearchResults />}
  //             />
  //             <Route path="/cart" element={<CartView />} />
  //             <Route path="/login" element={<LoginView />} />
  //             <Route path="/register" element={<RegisterView />} />
  //             <Route path="/pay" element={<PaymentView />} />
  //             <Route path="admin/products" element={<ProductTableView />} />
  //             <Route path="*" element={<Navigate to="/" />} />
  //           </Route>
  //         )}
  //     </Routes>
  //   </Suspense>
  // );

  const handleRoots = useCallback((status: TAuthorizationStatus) => {
    switch (status) {
      case TAuthorizationStatus.AUTHORIZED:
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
              <Route path="/cart" element={<CartView />} />
              <Route path="/login" element={<LoginView />} />
              <Route path="/register" element={<RegisterView />} />
              <Route path="*" element={<Navigate to="/" />} />
              {currentUser.user_role === "ADMIN" && (
                <Route path="/admin" element={<AdminView />} />
              )}
            </Route>
          </Routes>
        );
      case TAuthorizationStatus.UNAUTHORIZED:
        return (
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<HomeView />} />
              <Route path="/products" element={<ProductsView />} />
              <Route path="/products/:id" element={<ProductDetailView />} />
              <Route
                path="/searchResults/:searchKeyword"
                element={<SearchResults />}
              />
              <Route path="/cart" element={<CartView />} />
              <Route path="/login" element={<LoginView />} />
              <Route path="/register" element={<RegisterView />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        );
    }
  }, []);

  return <Suspense>{handleRoots(status)}</Suspense>;
}

export default App;
