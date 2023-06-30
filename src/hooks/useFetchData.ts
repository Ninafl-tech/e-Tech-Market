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
    async (id?: string, searchKeyword?: string) => {
      setIsLoading(true);
      try {
        const skipPages = (currentPage - 1) * PAGINATION_LIMIT;
        let url = "";

        if (id) {
          url = `${baseURL}/products/${id}`;
        } else if (searchKeyword) {
          url = `${baseURL}/products?search=${searchKeyword}`;
        } else {
          url = `${baseURL}/products?skip=${
            skipPages || 0
          } &take=${PAGINATION_LIMIT}`;
        }

        const response = await axios.get(url);

        const { data } = response;

        console.log(data.id);

        if (id) {
          setSingleProduct(data);
          setProductsData([]);
        } else {
          setSingleProduct(null);
          setProductsData(data);
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
