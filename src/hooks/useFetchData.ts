import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { PAGINATION_LIMIT } from "../config/pagination.config";
import type { PaginationProps } from "antd";

import { TProduct,TProductsList } from "../types/Tproduct";
import { baseURL } from "../config/baseURL.config";

export function useFetchData() {
  const [productsData, setProductsData] = useState<TProduct[]>([]);
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
      id?: string
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
        setProductsData(data.products);
        console.log(data.products[`${id}`]);
        setProduct(data.products[1]);
        
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
    product,
    setProduct,
    getProducts,
    isLoading,
    currentPage,
    totalItems,
    onChange,
  };
}
