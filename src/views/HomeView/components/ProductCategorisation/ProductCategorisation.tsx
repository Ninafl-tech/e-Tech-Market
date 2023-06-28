import { useState, useEffect } from "react";
import { NavCategory } from "../Navigation/NavCategories/NavCategory/NavCategory";
import { useFetchData } from "../../../../hooks/useFetchData";

export function ProductCategorisation() {
  const { productsData, getProducts, isLoading } = useFetchData();
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts("", "categories");
  }, []);

  return (
    <div>
      {/* {error && <div>Error</div>} */}
      {isLoading ? (
        <div>Loading...</div>
      ) : productsData ? (
        <ul>
          {productsData.map((product, index) => (
            <NavCategory
              key={index}
              category={
                typeof product === "string" ? product : product.category
              }
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
}
