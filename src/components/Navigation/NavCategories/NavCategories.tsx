import React from "react";
import { StNavCategories } from "./StNavCategories.styled";
import { ProductCategorisation } from "../../ProductCategorisation/ProductCategorisation";

export function NavCategories() {
  return (
    <>
      <StNavCategories className="rounded-sm ">
        <div className="bg-secondaryBlue p-5 rounded-sm">
          <h2>კატეგორიები</h2>
        </div>
        <div className="flex flex-col rounded-sm">
          <ProductCategorisation />
        </div>
      </StNavCategories>
    </>
  );
}
