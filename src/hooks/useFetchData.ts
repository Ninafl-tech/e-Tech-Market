// import { useState, useEffect, useCallback } from "react";
// import axios from "axios";
// import { PAGINATION_LIMIT } from "../config/pagination.config";
// import type { PaginationProps } from "antd";

// import { TProduct, TProductsList } from "../types/Tproduct";
// import { baseURL } from "./../config/baseURL.config";
// import { Category } from "@styled-icons/boxicons-solid";

// export function useFetchData() {
//   const [productsData, setProductsData] = useState<TProduct[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [totalItems, setTotalItems] = useState<number>(0);

//   const getProducts = useCallback(
//     async (searchKeyword?: string, category?: string) => {
//       setIsLoading(true);
//       try {
//         const skipPages = (currentPage - 1) * PAGINATION_LIMIT;
//         let url = "";

//         // if (id) {
//         //   url = `${baseURL}/products/${id}`;
//         // } else if (searchKeyword) {
//         //   url = `${baseURL}/products?search=${searchKeyword}`;
//         // } else if (category) {
//         //   url = `${baseURL}/products?category=${category}`;
//         // } else {
//         //   url = `${baseURL}/products?skip=${
//         //     skipPages || 0
//         //   } &take=${PAGINATION_LIMIT}`;
//         // }

//         const response = await axios.get(url);

//         const { data } = response;

//         setSingleProduct(null);
//         setProductsData(data);

//         setTotalItems(data.total);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     },
//     [currentPage]
//   );

//   const onChange: PaginationProps["onChange"] = (page) => {
//     setCurrentPage(page);
//   };

//   return {
//     productsData,
//     getProducts,
//     isLoading,
//     currentPage,
//     totalItems,
//     onChange,
//   };
// }

import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { PAGINATION_LIMIT } from "../config/pagination.config";
import type { PaginationProps } from "antd";

import { TProduct, TProductsList } from "../types/Tproduct";
import { baseURL } from "../config/baseURL.config";
import { Category } from "@styled-icons/boxicons-solid";

export function useFetchData() {
  const [productsData, setProductsData] = useState<TProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const getProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const skipPages = (currentPage - 1) * PAGINATION_LIMIT;

      const response = await axios.post(`${baseURL}/products`, {
        page_size: PAGINATION_LIMIT,
        page_number: 0,
      });

      const { data } = response;
      console.log("data", data);
      setProductsData(data.products);
      setTotalItems(data.total_found);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
  };

  return {
    productsData,
    getProducts,
    onChange,
    isLoading,
    totalItems,
  };
}
