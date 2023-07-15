import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { TProduct } from "../../../../types/Tproduct";
import { baseURL } from "../../../../config/baseURL.config";
import { Product } from "../../../../components/Product/Product";
import { StarRate } from "@styled-icons/material-rounded/StarRate";

export function HotOffers() {
  const [productsData, setProductsData] = useState<TProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const getProducts = useCallback(async (searchKeyword?: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${baseURL}/products`, {
        page_size: 10,
        page_number: 0,
        keyword: searchKeyword,
      });
      console.log(response);
      const { data } = response;
      setProductsData(data.products);
      setTotalItems(data.total_found);
    } catch (error: any) {
      setError((prev) => (prev = error.message));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const sortedProducts = productsData.sort(
    (a, b) => Number(b.rating) - Number(a.rating)
  );
  const topRatedProducts = sortedProducts.slice(0, 9);

  return (
    <>
      <div className="flex">
        <h1 className="pt-14 pl-12 text-xl text-gray-800">
          Top Rated Products
        </h1>
        <div className="flex flex-col justify-end">
          <StarRate className=" sw-8 h-8 text-yellow-500" />
        </div>
      </div>

      <div className="flex  justify-between flex-col">
        <div className="flex  flex-wrap">
          {topRatedProducts.map((product: TProduct, index) => (
            <div className="p-12" key={index}>
              <Product {...product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
