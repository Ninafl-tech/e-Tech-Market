import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { PAGINATION_LIMIT } from "../config/pagination.config";
import type { PaginationProps } from "antd";

import { TProduct, TProductsList } from "../types/Tproduct";
import { baseURL } from "../config/baseURL.config";

export function useFetchData() {
  const [productsData, setProductsData] = useState<TProduct[]>([]);
  const [singleProduct, setSingleProduct] = useState<TProduct | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);

  const getProducts = useCallback(
    async (id?: string, searchKeyword?: string, endpoint?: string) => {
      setIsLoading(true);
      try {
        const skipPages = (currentPage - 1) * PAGINATION_LIMIT;
        let url = "";

        if (id) {
          url = `${baseURL}/products/${id}`;
        } else if (endpoint) {
          url = `${baseURL}/products/${endpoint}`;
        } else if (searchKeyword) {
          url = `${baseURL}/products/search?q=${searchKeyword}`;
        } else {
          url = `${baseURL}/products?limit=${PAGINATION_LIMIT}&skip=${
            skipPages || 0
          }`;
        }

        const response = await axios.get(url);

        const { data } = response;

        if (id) {
          setSingleProduct(data as TProduct);
          setProductsData([]);
        } else if (endpoint) {
          setProductsData(data);
          setSingleProduct(null);
        } else {
          setSingleProduct(null);
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
    singleProduct,
    getProducts,
    isLoading,
    currentPage,
    totalItems,
    onChange,
  };
}
