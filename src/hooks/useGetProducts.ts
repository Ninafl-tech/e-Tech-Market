import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { PAGINATION_LIMIT } from "../config/pagination.config";
import type { PaginationProps } from "antd";

import { TProduct } from "../types/Tproduct";
import { baseURL } from "../config/baseURL.config";

export function useGetProducts() {
  const [productsData, setProductsData] = useState<TProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string>("");

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
    console.log(page);
  };
  const getProducts = useCallback(
    async (searchKeyword?: string) => {
      setIsLoading(true);
      try {
        const skipPages = (currentPage - 1) * PAGINATION_LIMIT;

        const response = await axios.post(`${baseURL}/products`, {
          page_size: PAGINATION_LIMIT,
          page_number: skipPages,
          keyword: searchKeyword,
        });

        const { data } = response;
        setProductsData(data.products);
        setTotalItems(data.total_found);
      } catch (error: any) {
        setError((prev) => (prev = error.message));
      } finally {
        setIsLoading(false);
      }
    },
    [currentPage]
  );

  return {
    productsData,
    getProducts,
    currentPage,
    onChange,
    isLoading,
    totalItems,
  };
}
