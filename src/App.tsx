import React from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { PublicLayout } from "./layouts/PublicLayout/PublicLayout";

const HomeView = lazy(() => import("./views/HomeView/HomeView"));
const ProductsView = lazy(() => import("./views/ProductsView/ProductsView"));
const ProductDetailView = lazy(
  () => import("./views/ProductDetailView/ProductDetailView")
);

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/products/:id" element={<ProductDetailView />} />
          <Route path="/products" element={<ProductsView />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
