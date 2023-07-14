import React, { useContext, useEffect } from "react";
import { TProduct } from "../../types/Tproduct";
import { Product } from "../../components/Product/Product";
import { Pagination } from "antd";
import { PAGINATION_LIMIT } from "../../config/pagination.config";
import { useGetProducts } from "../../hooks/useGetProducts";
import { StCard } from "../../components/StCard/StCard.syled";
import { CartModalContext } from "../../contexts/CartModalContext";
import { Cart } from "@styled-icons/boxicons-solid";

export default function ProductsView() {
  const { productsData, getProducts, isLoading, totalItems, onChange } =
    useGetProducts();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div>
      {isLoading ? (
        <div>... loading</div>
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-wrap">
            {productsData.map((product: TProduct, index) => (
              <div className="p-12" key={index}>
                <Product {...product} />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Pagination
              total={totalItems}
              pageSize={PAGINATION_LIMIT}
              simple={true}
              onChange={onChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}
