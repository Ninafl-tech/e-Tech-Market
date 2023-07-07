import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../config/baseURL.config";
import { TcartProduct } from "../types/TcartProduct";

export function useGetSingleProduct({ id }: TcartProduct) {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function getProduct(id: string) {
    try {
      setIsLoading(true);
      const response = await axios.get(`${baseURL}/product/${id}`);
      setSingleProduct(response.data);
      setIsLoading(false);
    } catch (error) {
      setError("Error occurred while fetching the product.");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    id && getProduct(id);
  }, [id]);

  return { singleProduct, isLoading, error };
}
