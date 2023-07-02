import { useState, useEffect } from "react";
import { NavCategory } from "../Navigation/NavCategories/NavCategory/NavCategory";
import { useFetchData } from "../../../../hooks/useFetchData";
import { set } from "react-hook-form";
import { TProduct } from "../../../../types/Tproduct";

export function ProductCategorisation() {
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
    <div>
      {error && <div>Error</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {categories.map((category, index) => (
            <NavCategory key={index} category={category} />
          ))}
        </>
      )}
    </div>
  );
}
