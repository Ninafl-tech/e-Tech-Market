import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetProducts } from "../../hooks/useGetProducts";
import { Product } from "../../components/Product/Product";
import { TProduct } from "../../types/Tproduct";
import { Pagination } from "antd";
import { PAGINATION_LIMIT } from "../../config/pagination.config";

export default function SearchResults() {
  const { searchKeyword } = useParams();
  const { productsData, getProducts, onChange, isLoading, totalItems } =
    useGetProducts();

  useEffect(() => {
    getProducts(`${searchKeyword}`);
  }, [getProducts, searchKeyword]);

  return (
    <>
      {" "}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-wrap">
            {productsData.map((searchResult: TProduct, index) => (
              <div className="p-12" key={index}>
                <Product {...searchResult} />
              </div>
            ))}
          </div>
          {/* <div className="flex justify-center">
            {
              <Pagination
                current={currentPage}
                onChange={onChange}
                total={totalItems}
                pageSize={PAGINATION_LIMIT}
                simple={true}
              />
            }
          </div> */}
        </div>
      )}
    </>
  );
}
