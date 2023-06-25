import React, { useEffect } from "react";
import { TProduct } from "../../types/Tproduct";
import { Product } from "../../components/Product/Product";
import { Pagination } from "antd";
import { PAGINATION_LIMIT } from "../../config/pagination.config";
import { useFetchData } from "../../hooks/useFetchData";

export default function ProductsView() {
  const {
    products,
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
        <div className="flex flex-col">
          <div className="flex flex-wrap">
            {products.map((product: TProduct) => (
              <div className="p-12" key={product.id}>
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
      )}
    </>
  );
}
