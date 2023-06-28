import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { PAGINATION_LIMIT } from "../config/pagination.config";
import type { PaginationProps } from "antd";

import { TProduct, TProductsList } from "../types/Tproduct";
import { baseURL } from "../config/baseURL.config";

export function useFetchData() {
  const [productsData, setProductsData] = useState<TProduct[] | string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);

  const getProducts = useCallback(
    async (searchKeyword?: string, categorisation?: string) => {
      setIsLoading(true);
      try {
        const skipPages = (currentPage - 1) * PAGINATION_LIMIT;
        let endpoint = "";
        if (searchKeyword) {
          endpoint = `${baseURL}/products/search?q=${searchKeyword}`;
        } else if (categorisation) {
          endpoint = `${baseURL}/products/${categorisation}`;
        } else {
          endpoint = `${baseURL}/products?/limit=${PAGINATION_LIMIT}&skip=${
            skipPages || 0
          }`;
        }

        const response = await axios.get(endpoint);
        const { data } = response;
        if (categorisation) {
          setProductsData(data);
        } else {
          setProductsData(data.products);
        }

        setTotalItems(data.total);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [currentPage]
  );

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
  };

  return {
    productsData,
    getProducts,
    isLoading,
    currentPage,
    totalItems,
    onChange,
  };
}
