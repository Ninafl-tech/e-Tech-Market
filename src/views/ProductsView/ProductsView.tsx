import React, { useEffect, useState } from "react";
import axios from "axios";
import { TProduct } from "../../types/Tproduct";
import { Product } from "../ProductDetailView/components/Product/Product";

import type { PaginationProps } from "antd";
import { Pagination } from "antd";

const calculateSkippedPages = (currentPage: number, limit: number) =>
  (currentPage - 1) * limit;
const PAGINATION_LIMIT = 20;

export default function ProductsView() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);

  async function getProduct(currentPage: number) {
    const skippedProducts = calculateSkippedPages(
      currentPage,
      PAGINATION_LIMIT
    );

    setLoading(true);
    const resp = await axios.get(
      `https://dummyjson.com/products?limit=${PAGINATION_LIMIT}&skip=${skippedProducts}`
    );

    setTotalItems(resp.data.total);
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
