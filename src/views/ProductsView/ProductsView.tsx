import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { TProductprops } from "../../types/Tproduct";
import { Product } from "../ProductDetailView/components/Product/Product";
import { SearchContext } from "../../contexts/SearchContext";

export default function ProductsView() {
  const { searchKeyword } = useContext(SearchContext); // Access searchKeyword from the SearchContext

  const [products, setProducts] = useState<TProductprops[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  async function getProduct(searchKeyword: string) {
    let endpoint: string;
    try {
      setError("");
      setLoading(true);
      if (searchKeyword) {
        endpoint = `https://dummyjson.com/products/search?q=${searchKeyword}`;
      } else {
        endpoint = "https://dummyjson.com/products";
      }
      const resp = await axios.get(endpoint);
      setProducts(resp.data?.products);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message || "An error occurred.");
    }
  }

  useEffect(() => {
    getProduct(searchKeyword);
  }, [searchKeyword]);

  return (
    <>
      {error && <div>Error</div>}
      {loading ? (
        <div>... loading </div>
      ) : (
        <div className="flex flex-wrap">
          {products.map((product: TProductprops) => (
            <div className="p-12" key={product?.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
