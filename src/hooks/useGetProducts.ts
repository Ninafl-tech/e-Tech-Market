import axios from "axios";
import { useState, useCallback } from "react";
import { TProduct } from "../types/Tproduct";

export function useGetProducts(endpoint: string) {
  const [fetchedProducts, setFetchedProducts] = useState<TProduct[]>([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const getProductData = useCallback(
    async (searchKeyword: string) => {
      try {
        setError("");
        setLoading(true);
        const resp = await axios.get(
          endpoint + (searchKeyword ? `search?q=${searchKeyword}` : "")
        );
        setFetchedProducts(resp.data?.products);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error.message || "An error occurred.");
      }
    },
    [endpoint]
  );

  return {
    fetchedProducts,
    searchKeyword,
    setSearchKeyword,
    loading,
    error,
    getProductData,
  };
}
