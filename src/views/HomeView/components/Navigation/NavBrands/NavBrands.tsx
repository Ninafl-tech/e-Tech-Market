import React, { useEffect, useState } from "react";
import { StNavBrands } from "./StNavBrands.styled";
import { useGetProducts } from "../../../../../hooks/useGetProducts";
import { NavBrand } from "./NavBrand/NavBrand";

export function NavBrands() {
  const { productsData, getProducts, isLoading } = useGetProducts();
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const brandsArray = productsData.map((product) => product.brand);
  const brands = brandsArray.filter(
    (brand, index) => brandsArray.indexOf(brand) === index
  );

  return (
    <>
      <StNavBrands className="rounded-sm ">
        <div className="w-full bg-blue-300  p-5 rounded-sm">
          <h2>ბრენდები</h2>
        </div>
        <div className="flex flex-col rounded-sm bg-secondaryBlue">
          <div>
            {error && <div>Error</div>}
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <>
                {productsData.length > 0 &&
                  brands.map(
                    (brand: string, index: React.Key | null | undefined) => (
                      <NavBrand key={index} brand={brand} />
                    )
                  )}
              </>
            )}
          </div>
        </div>
      </StNavBrands>
    </>
  );
}
