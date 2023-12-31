import React, { useEffect, useState, useContext } from "react";
import { StNavBrands } from "./StNavBrands.styled";
import { useGetProducts } from "../../../../../hooks/useGetProducts";
import { NavBrand } from "./NavBrand/NavBrand";
import { FormattedMessage } from "react-intl";

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

  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);

  const handleHover = (brand: string) => {
    setHoveredBrand(brand);
  };

  const handleUnhover = () => {
    setHoveredBrand(null);
  };

  return (
    <>
      <StNavBrands className="rounded-sm ">
        <div className=" w-full bg-white  p-4 rounded-sm">
          <h2 className="flex text-gray-700 bg-slate-200 p-2 rounded">
            <FormattedMessage id="all.brands" />
          </h2>
        </div>
        <div className="flex flex-col  text-solidGray  bg-white ">
          <div>
            {error && <div>Error</div>}
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <>
                {productsData.length > 0 &&
                  brands.map(
                    (brand: string, index: React.Key | null | undefined) => (
                      <div
                        key={index}
                        onMouseLeave={handleUnhover}
                        onMouseEnter={() => {
                          handleHover(brand);
                        }}
                        {...(hoveredBrand === brand && {
                          className: "bg-secondaryBlue rounded text-gray-700",
                        })}
                      >
                        <NavBrand brand={brand} />
                      </div>
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
