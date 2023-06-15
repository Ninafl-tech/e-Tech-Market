import { useState } from "react";
import axios from "axios";
import { Button, Space, Input } from "antd";
import { useNavigate } from "react-router-dom";

type ProductData = {
  name: string;
  id: number;
  title: string;
  images: string;
  category: string;
  description: string;
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

  function handleSubmit() {
    getProductData(searchKeyword);
  }

  return (
    <div className="searchDiv w-screen">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
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
          <Button type="primary" className="bg-primaryBlue" htmlType="submit">
            Submit
          </Button>
        </Space.Compact>
      </form>
      {error && <div>Error</div>}
      {productData.length > 0 && (
        <div>
          {productData.map((product) => (
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg"
              key={product.id}
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
