import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { TProduct } from "../../types/Tproduct";
import { Product } from "../ProductDetailView/components/Product/Product";
import { SearchContext } from "../../contexts/SearchContext";

import { PAGINATION_LIMIT } from "../../config/pagination.config";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";

const calculateSkippedPages = (currentPage: number, limit: number) =>
  (currentPage - 1) * limit;

export default function ProductsView() {
<<<<<<< HEAD
  const { searchKeyword } = useContext(SearchContext); // Access searchKeyword from the SearchContext

  const [products, setProducts] = useState<TProductprops[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  async function getProduct(searchKeyword: string) {
    let endpoint: string;
    try {
      setError("");
      setLoading(true);
      if (searchKeyword) {
        endpoint = `https://dummyjson.com/products/search?q=${searchKeyword}`;
      } else {
        endpoint = "https://dummyjson.com/products";
      }
      const resp = await axios.get(endpoint);
      setProducts(resp.data?.products);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message || "An error occurred.");
    }
=======
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
>>>>>>> c251e014f9ff29d8fc9790aafaf1fbedfc3b45be
  }

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
<<<<<<< HEAD
    getProduct(searchKeyword);
  }, [searchKeyword]);
=======
    getProduct(currentPage);
  }, [currentPage]);
>>>>>>> c251e014f9ff29d8fc9790aafaf1fbedfc3b45be

  return (
    <>
      {error && <div>Error</div>}
      {loading ? (
        <div>... loading </div>
      ) : (
<<<<<<< HEAD
        <div className="flex flex-wrap">
          {products.map((product: TProductprops) => (
            <div className="p-12" key={product?.id}>
              <Product product={product} />
            </div>
          ))}
=======
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
>>>>>>> c251e014f9ff29d8fc9790aafaf1fbedfc3b45be
        </div>
      )}
    </>
  );
}
