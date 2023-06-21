import { Button, Space, Input } from "antd";
import { Product } from "../../../../views/ProductDetailView/components/Product/Product";
import { useSearchParams } from "react-router-dom";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import React from "react";

export function ProductSearchbar() {
  const [searchParams] = useSearchParams();

  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  function handleclick() {
    navigate({
      pathname: "/products/search",
      search: `?q=${searchKeyword}`,
    });
    searchParams.set("q", searchKeyword);
  }
  return (
    <>
      <div className="searchDiv w-full h-full">
        <form>
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
              onClick={handleclick}
            >
              Submit
            </Button>
          </Space.Compact>
        </form>
        {/* {error && <div>Error</div>} */}
        {/* {fetchedProducts.length > 0 && (
            <div>
              {fetchedProducts.map((product: TProduct) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          )} */}
      </div>
      {/* )} */}
    </>
  );
}
