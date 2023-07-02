import React, { useEffect, useState } from "react";
import { StNavCategories } from "./StNavCategories.styled";
import { useFetchData } from "../../../../../hooks/useFetchData";
import { NavCategory } from "./NavCategory/NavCategory";

export function NavCategories() {
  const { productsData, getProducts, isLoading } = useFetchData();
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const categoriesArray = productsData.map((product) => product.category);
  const categories = categoriesArray.filter(
    (category, index) => categoriesArray.indexOf(category) === index
  );

  return (
    <>
      <StNavCategories className="rounded-sm ">
        <div className="w-full bg-blue-300  p-5 rounded-sm">
          <h2>კატეგორიები</h2>
        </div>
        <div className="flex flex-col rounded-sm bg-secondaryBlue">
          <div>
            {error && <div>Error</div>}
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <>
                {productsData.length > 0 &&
                  categories.map((category, index) => (
                    <NavCategory key={index} category={category} />
                  ))}
              </>
            )}
          </div>
        </div>
      </StNavCategories>
    </>
  );
}
