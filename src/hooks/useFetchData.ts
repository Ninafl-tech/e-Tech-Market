import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { PAGINATION_LIMIT } from "../config/pagination.config";
import type { PaginationProps } from "antd";

import { TProduct } from "../types/Tproduct";
import { baseURL } from "../config/baseURL.config";

export function useFetchData() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);

  const calculateSkip = (currentPage: number, limit: number) => {
    (currentPage - 1) * limit;
  };
  const skipPages = calculateSkip(currentPage, PAGINATION_LIMIT);

  const getProducts = useCallback(
    async (
      searchKeyword?: string,
      endpoint?: string,
      limit?: number,
      skip?: number
    ) => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${baseURL}/products/${endpoint}`, {
          params: {
            q: searchKeyword,
            endpoint: endpoint || baseURL,
            limit: limit || PAGINATION_LIMIT,
            skip: skip || skipPages,
          },
        });
        const { data } = response;
        setProducts(data.products);
        setTotalItems(data.totalItems);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [skipPages]
  );

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
  };

  return {
    products,
    getProducts,
    isLoading,
    currentPage,
    totalItems,
    onChange,
  };
}
