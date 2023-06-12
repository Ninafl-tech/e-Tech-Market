import React from "react";

type Productrops = {
  product: {
    id: number;
    title: string;
    images: string;
  };
};

export function Product({ product }: Productrops) {
  return <li>{product.title}</li>;
}
