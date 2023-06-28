import React, { useEffect } from "react";
import { TProduct } from "../../types/Tproduct";
import { Product } from "../../components/Product/Product";
import { Pagination } from "antd";
import { PAGINATION_LIMIT } from "../../config/pagination.config";
import { useFetchData } from "../../hooks/useFetchData";

export default function ProductsView() {
  const {
    productsData,
    getProducts,
    isLoading,
    currentPage,
    totalItems,
    onChange,
  } = useFetchData();

  useEffect(() => {
    getProducts();
  }, [currentPage, getProducts]);

  return (
    <>
      {isLoading ? (
        <div>... loading</div>
      ) : (
        <div className="flex flex-row">
          <div className="w-1/5 h-full">
            <h2>something like Categories:</h2>{" "}
          </div>
          <div className="w-4/5">
            <div className="flex flex-wrap justify-between">
              {productsData.map((product: TProduct) => (
                <div className="p-5" key={product.id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Pagination
                current={currentPage}
                onChange={onChange}
                total={totalItems}
                pageSize={PAGINATION_LIMIT}
                simple={true}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
