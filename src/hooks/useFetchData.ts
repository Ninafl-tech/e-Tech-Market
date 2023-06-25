import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { PAGINATION_LIMIT } from "../config/pagination.config";
import type { PaginationProps } from "antd";

import { TProduct } from "../types/Tproduct";
import { baseURL } from "../config/baseURL.config";

export function useFetchData() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [product, setProduct] = useState<TProduct>(
    {
    brand: "",
    price: 0,
    rating: 0,
    id: 0,
    title: "",
    images: [],
    category: "",
    name: "",
    description: "",
    }

  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);

  const getProducts = useCallback(
    async (
      searchKeyword?: string,
      limit?: number,
      skip?: number,
      id?: number
    ) => {
      setIsLoading(true);
      try {
        const endpoint = `${baseURL}/products`;
        const searchEndpoint = `${baseURL}/products/search`;
        const skipPages = (currentPage - 1) * (limit || PAGINATION_LIMIT);

        const response = await axios.get(
          searchKeyword ? searchEndpoint : endpoint,
          {
            params: {
              q: searchKeyword,
              limit: limit || PAGINATION_LIMIT,
              skip: skip || skipPages,
              id: id,
            },
          }
        );

        const { data } = response;
        setProducts(data.products);
        console.log(data.products);
        setProduct(data.products[`${id}`]);
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
    products,
    product,
    setProduct,
    getProducts,
    isLoading,
    currentPage,
    totalItems,
    onChange,
  };
}
