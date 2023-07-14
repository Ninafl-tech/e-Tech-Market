import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../config/baseURL.config";
import { TcartProduct } from "../types/TcartProduct";
import { TProduct } from "../types/Tproduct";
import { set } from "react-hook-form";

export function useGetSingleCartProduct(cartId: TcartProduct) {
  const [singleCartProduct, setSingleCartProduct] = useState<TProduct>();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getProduct(cartId: TcartProduct) {
    try {
      setIsLoading(true);
      const response = await axios.get(`${baseURL}/product/${cartId.cartId}`);
      setSingleCartProduct(response.data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.response.data.message);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProduct(cartId);
  }, [cartId]);

  return { error, isLoading, singleCartProduct };
}
