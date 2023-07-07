import React from "react";
import { useGetSingleProduct } from "../../../hooks/useGetSingleProduct";
import { TcartProduct } from "../../../types/TcartProduct";

export function CartItem({ id }: TcartProduct) {
  const {} = useGetSingleProduct({ id });
  return <div>{id}</div>;
}
