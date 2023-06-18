import React, { useEffect, useState } from "react";
import axios from "axios";
import { TProductprops } from "../../types/Tproduct";
import { Product } from "../ProductDetailView/components/Product/Product";

export default function ProductsView() {
  const [products, setProducts] = useState<TProductprops[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function getProduct() {
    setLoading(true);
    const resp = await axios.get("https://dummyjson.com/products");
    setProducts(resp.data.products);
    setLoading(false);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {loading ? (
        <div>... loading </div>
      ) : (
        <div className="flex flex-wrap">
          {products.map((product: TProductprops) => {
            return (
              <div className="p-12">
                <Product product={product} key={product?.id} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
