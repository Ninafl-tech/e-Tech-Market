import React, { useEffect, useState } from "react";
import { TProduct } from "../../../types/Tproduct";
import { baseURL } from "../../../config/baseURL.config";
import axios from "axios";
import { Product } from "../../../components/Product/Product";

type RelatedProductsProps = {
  relatedBrand: string | undefined;
};

export function RelatedProducts({ relatedBrand }: RelatedProductsProps) {
  const [relatedProducts, setRelatedProducts] = useState<TProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function getProduct(brand?: string) {
    try {
      setIsLoading(true);
      const response = await axios.post(`${baseURL}/products`, {
        page_size: 9,
        page_number: 0,
        keyword: brand,
      });
      setRelatedProducts(response.data.products);
      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      setError("Error occurred while fetching the product.");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    relatedBrand && getProduct(relatedBrand);
  }, [relatedBrand]);

  const slicedProducts = relatedProducts.slice(0, 10);

  return (
    <>
      <div className="flex">
        <h1 className="pt-3 pl-5 text-xl text-gray-800">Related Products</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-wrap">
          {slicedProducts.map((product: TProduct, index) => (
            <div className="p-12" key={index}>
              <Product {...product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
