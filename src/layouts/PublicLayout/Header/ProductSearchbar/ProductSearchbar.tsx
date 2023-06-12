import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "../../../../components/Product/Product";
import React from "react";

type ProductData = {
  id: number;
  title: string;
  images: string;
};

export function ProductSearchbar() {
  const [productData, setProductData] = useState<ProductData[]>([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getProductData(searchKeyword: string) {
    try {
      setError("");
      setLoading(true);
      const resp = await axios.get(
        `https://dummyjson.com/products/search?q=${searchKeyword}`
      );
      setProductData(resp.data?.products);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message || "An error occurred.");
    }
  }

  useEffect(() => {
    getProductData(searchKeyword);
  }, [searchKeyword]);

  return (
    <div className="searchDiv">
      <input
        type="search"
        id="default-search"
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-primaryBlue rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-primaryBlue dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="search..."
        required
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      {error && <div>Error</div>}
      {loading ? (
        <div>Loading...</div>
      ) : searchKeyword.trim() !== "" ? (
        <ul>
          {productData.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </ul>
      ) : null}
    </div>
  );
}
