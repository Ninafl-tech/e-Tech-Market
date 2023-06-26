import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { PAGINATION_LIMIT } from "../config/pagination.config";
import type { PaginationProps } from "antd";

import { TProduct, TProductsList } from "../types/Tproduct";
import { baseURL } from "../config/baseURL.config";

export function useFetchData() {
  const [productsData, setProductsData] = useState<TProduct[]>([]);
  const [product, setProduct] = useState<TProduct>({
    brand: "",
    price: 0,
    rating: 0,
    id: "",
    title: "",
    images: [],
    category: "",
    name: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);

  const getProducts = useCallback(
    async (
      id?: string,
      searchKeyword?: string,
      limit?: number,
      skip?: number
    ) => {
      setIsLoading(true);
      try {
        const skipPages = (currentPage - 1) * (limit || PAGINATION_LIMIT);
        let endpoint = "";

        if (id) {
          endpoint = `${baseURL}/products/${id}`;
        } else if (searchKeyword) {
          endpoint = `${baseURL}/products/search?q=${searchKeyword}`;
        } else {
          endpoint = `${baseURL}/products?limit=${
            limit || PAGINATION_LIMIT
          }&skip=${skipPages || 0}`;
        }

        const response = await axios.get(endpoint);

        const { data } = response;
        if (data.products) {
          setProductsData(data.products);

          const foundProduct = data.products.find(
            (product: TProduct) => product.id === id
          );
          if (foundProduct) {
            setProduct(foundProduct);
          }
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
    product,
    setProduct,
    getProducts,
    isLoading,
    currentPage,
    totalItems,
    onChange,
  };
}
