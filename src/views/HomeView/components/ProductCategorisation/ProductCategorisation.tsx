import { useState, useEffect } from "react";
import { NavCategory } from "../Navigation/NavCategories/NavCategory/NavCategory";
import { useFetchData } from "../../../../hooks/useFetchData";

export function ProductCategorisation() {
  const { productsData, getProducts, isLoading } = useFetchData();
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts("", "");
  }, []);

  return (
    <div>
      {error && <div>Error</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : productsData ? (
        <ul>
          {productsData.map((product, index) => (
            <NavCategory key={index} category={product.category} />
          ))}
        </ul>
      ) : null}
    </div>
  );
}
