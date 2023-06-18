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
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  async function getcategories() {
    try {
      setError("");
      setLoading(true);
      const resp = await axios.get(`https://dummyjson.com/products/categories`);
      setCategories(resp.data);
      console.log(resp.data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message || "An error occurred.");
    }
  }

  useEffect(() => {
    getcategories();
  }, []);

  return (
    <div>
      {error && <div>Error</div>}
      {loading ? (
        <div>Loading...</div>
      ) : categories ? (
        <ul>
          {categories.map((category) => (
            <NavCategory key={category} category={category} />
          ))}
        </ul>
      ) : null}
    </div>
  );
}
