import axios from "axios";
import { useState, useCallback } from "react";
import { TProduct } from "../types/Tproduct";
import { PAGINATION_LIMIT } from "../config/pagination.config";
import { PaginationProps } from "antd";

const calculateSkippedPages = (currentPage: number, limit: number) =>
  (currentPage - 1) * limit;

export function useGetProducts(endpoint: string) {
  const [fetchedProducts, setFetchedProducts] = useState<TProduct[]>([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);

  const getProductData = useCallback(
    async (searchKeyword: string, currentPage: number) => {
      try {
        const skippedProducts = calculateSkippedPages(
          currentPage,
          PAGINATION_LIMIT
        );
        setError("");
        setLoading(true);
        if (searchKeyword)
          endpoint =
            endpoint + (searchKeyword ? `search?q=${searchKeyword}` : "");
        else
          endpoint = `https://dummyjson.com/products?limit=${PAGINATION_LIMIT}&skip=${skippedProducts}`;
        const resp = await axios.get(endpoint);
        setTotalItems(resp.data.total);

        setFetchedProducts(resp.data?.products);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error.message || "An error occurred.");
      }
    },
    [endpoint, currentPage, searchKeyword]
  );

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
  };

  return {
    fetchedProducts,
    searchKeyword,
    setSearchKeyword,
    loading,
    error,
    getProductData,
    currentPage,
    totalItems,
    onChange,
  };
}
