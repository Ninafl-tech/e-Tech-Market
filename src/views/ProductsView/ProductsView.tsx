import React, { useEffect, useState } from "react";
import axios from "axios";
import { TProductprops } from "../../types/Tproduct";
import { Product } from "../ProductDetailView/components/Product/Product";

import { PAGINATION_LIMIT } from "../../config/pagination.config";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";

const calculateSkippedPages = (currentPage: number, limit: number) =>
  (currentPage - 1) * limit;

export default function ProductsView() {
  const [products, setProducts] = useState<TProductprops[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  async function getProduct(currentPage: number) {
    const skippedProducts = calculateSkippedPages(
      currentPage,
      PAGINATION_LIMIT
    );

    setLoading(true);
    const resp = await axios.get(
      `https://dummyjson.com/products?limit=${PAGINATION_LIMIT}&skip=${skippedProducts}`
    );

    setTotalPages(Math.ceil(resp.data.total / PAGINATION_LIMIT));

    setProducts(resp.data.products);
    setLoading(false);
  }

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getProduct(currentPage);
  }, [currentPage]);

  return (
    <>
      {loading ? (
        <div>... loading </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-wrap">
            {products.map((product: TProductprops) => {
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
                onChange={onChange}
                total={50}
              />
            }
          </div>
        </div>
      )}
    </>
  );
}
