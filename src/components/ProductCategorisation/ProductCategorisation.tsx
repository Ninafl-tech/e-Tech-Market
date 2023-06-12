import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { NavCategory } from "../Navigation/NavCategories/NavCategory/NavCategory";

type ProductData = {
  id: number;
  title: string;
  images: string;
  description: string;
  category: string;
};

export function ProductCategorisation() {
  const [activeCategory, setActiveCategory] = useState<String>("");
  const [productData, setProductData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  async function getProductData() {
    try {
      setError("");
      setLoading(true);
      const resp = await axios.get(`https://dummyjson.com/products/categories`);
      setProductData(resp.data);
      console.log(resp.data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message || "An error occurred.");
    }
  }

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      {error && <div>Error</div>}
      {loading ? (
        <div>Loading...</div>
      ) : productData ? (
        <ul>
          {productData.map((product) => (
            <NavCategory key={product} product={product} />
          ))}
        </ul>
      ) : null}
    </div>
  );
}
