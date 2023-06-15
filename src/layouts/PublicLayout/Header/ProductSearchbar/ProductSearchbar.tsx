import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Space, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { Product } from "../../../../components/Product/Product";

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

  const navigate = useNavigate();

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

  function buttonClick() {
    navigate("/products");
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
          <Button
            type="primary"
            className="bg-primaryBlue"
            htmlType="submit"
            onClick={buttonClick}
          >
            Submit
          </Button>
        </Space.Compact>
      </form>
      {error && <div>Error</div>}
      {productData.length > 0 && (
        <div>
          {productData.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
