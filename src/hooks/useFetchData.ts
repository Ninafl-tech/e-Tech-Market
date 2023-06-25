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
    return (currentPage - 1) * limit; // Added the return statement
  };
  const skipPages = calculateSkip(currentPage, PAGINATION_LIMIT);

  const getProducts = useCallback(
    async (
      searchKeyword?: string,
      searchQuerry?: string,
      limit?: number,
      skip?: number
    ) => {
      setIsLoading(true);
      try {
        const endpoint = `${baseURL}/products`;
        const searchEndpoint = `${baseURL}/products/search`;
        let response;

        if (searchQuerry) {
          response = await axios.get(searchEndpoint, {
            params: {
              q: searchKeyword,
              limit: limit || PAGINATION_LIMIT,
              skip: skip || skipPages,
            },
          });
        } else {
          response = await axios.get(endpoint, {
            params: {
              limit: limit || PAGINATION_LIMIT,
              skip: skip || skipPages,
            },
          });
        }

        const { data } = response;
        setProducts(data.products);
        setTotalItems(data.total);
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

