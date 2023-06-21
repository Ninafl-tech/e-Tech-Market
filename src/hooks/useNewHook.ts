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

  useEffect(() => {
    console.log((currentPage - 1) * limit);
    setSkip((currentPage - 1) * limit);
  }, [currentPage]);

  async function getProducts() {
    try {
      setLoading(true);
      setError("");
      const resp = await axios(
        `https://dummyjson.com/${endpoint}?limit=${limit}&skip=${skip}`
      );

      console.log(resp.data?.products);
      setTotal(resp.data?.total);

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
    setCurrentPage,
    currentPage,
    loading,
    error,
    products,
    limit,
    total,
  };
}
