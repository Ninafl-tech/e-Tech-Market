import React from "react";

type Productprops = {
  product: {
    id: number;
    title: string;
    images: string;
    category: string;
  };
};

export function Product({ product }: Productprops) {
  return <li>{product.title} </li>;
}
