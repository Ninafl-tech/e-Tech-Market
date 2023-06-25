import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import { Product } from "../ProductDetailView/components/Product/Product";
import { TProduct } from "../../types/Tproduct";
import { Pagination } from "antd";
import { PAGINATION_LIMIT } from "../../config/pagination.config";

export default function SearchResults() {
  const { searchKeyword } = useParams();
  const {
    products,
    getProducts,
    isLoading,
    currentPage,
    totalItems,
    onChange,
  } = useFetchData();

  useEffect(() => {
    getProducts(searchKeyword, "search");
  }, [getProducts, searchKeyword]);

  return (
    <>
      {" "}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-wrap">
            {products.map((searchResult: TProduct) => (
              <div key={searchResult.id}>
                <Product product={searchResult} />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            {
              <Pagination
                current={currentPage}
                onChange={onChange}
                total={totalItems}
                pageSize={PAGINATION_LIMIT}
                simple={true}
              />
            }
          </div>
        </div>
      )}
    </>
  );
}
