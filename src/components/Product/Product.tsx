import React from "react";

type ProductData = {
  product: {
    name: string;
    id: number;
    title: string;
    images: string;
    category: string;
    description: string;
  };
};

export function Product({ product }: ProductData) {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg"
      key={product.id}
    >
      <img className="w-full" src={product.images[0]} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
    </div>
  );
}
