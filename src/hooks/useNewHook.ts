import React, { useState, useEffect } from "react";
import axios from "axios";
import { TProduct } from "../types/Tproduct";
// search
// filter
// pagination (skip,limit) splice
// products

export function useNewHook(endpoint: string) {
  const [limit, setLimit] = useState<number>(10);
  const [skip, setSkip] = useState<number>(0);
  //   const [endpoint, setEndpoint] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [products, setProducts] = useState<TProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  async function getProducts() {
    try {
      setLoading(true);
      setError("");
      const resp = await axios(
        `https://dummyjson.com/${endpoint}?take=${limit}&skip=${skip}`
      );

      setLoading(false);
      setProducts(resp.data?.products);
    } catch (error: any) {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, [limit, skip, endpoint]);

  return {
    setSkip,
    // setEndpoint,
    loading,
    error,
    products,
  };
}
