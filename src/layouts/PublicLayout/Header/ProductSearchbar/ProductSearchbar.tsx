import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "../../../../components/Product/Product";
import React from "react";
import { Button, Space, Input } from "antd";

type ProductData = {
  id: number;
  title: string;
  images: string;
  category: string;
};

export function ProductSearchbar() {
  const [productData, setProductData] = useState<ProductData[]>([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
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
    <div className="searchDiv w-screen">
      <Space.Compact
        style={{
          width: "100%",
        }}
      >
        <Input
          placeholder="Search"
          required
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <Button type="primary" className="bg-primaryBlue">
          Submit
        </Button>
      </Space.Compact>
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
