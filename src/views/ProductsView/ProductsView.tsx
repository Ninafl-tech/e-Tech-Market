import { TProduct } from "../../types/Tproduct";
import { Product } from "../ProductDetailView/components/Product/Product";
import { useGetProducts } from "../../hooks/useGetProducts";
import React, { useEffect } from "react";
import { Pagination } from "antd";
import { PAGINATION_LIMIT } from "../../config/pagination.config";
import { useNewHook } from "../../hooks/useNewHook";

export default function ProductsView() {
  const { loading, fetchedProducts, totalItems, onChange } = useGetProducts(
    `https://dummyjson.com/products/`
  );
  const { setSkip, currentPage, setCurrentPage, limit, total, products } =
    useNewHook("products/");

  const handleClick = (e: any) => {
    console.log(e);
    setCurrentPage(e);
  };

  return (
    <>
      {loading ? (
        <div>... loading </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-wrap">
            {products.map((product: TProduct) => {
              return (
                <div className="p-12" key={product.id}>
                  <Product product={product} />
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            {
              <Pagination
                current={currentPage}
                onChange={handleClick}
                total={total}
                pageSize={limit}
                simple={true}
              />
            }
          </div>
        </div>
      )}
    </>
  );
}
