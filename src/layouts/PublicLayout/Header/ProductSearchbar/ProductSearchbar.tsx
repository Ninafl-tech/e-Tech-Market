<<<<<<< HEAD
import { useState } from "react";
import { Button, Space, Input } from "antd";

export function ProductSearchbar() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
=======
import { Button, Space, Input } from "antd";
import { Product } from "../../../../views/ProductDetailView/components/Product/Product";
import { TProduct } from "../../../../types/Tproduct";
import { useGetProducts } from "../../../../hooks/useGetProducts";
import { useCallback } from "react";

export function ProductSearchbar() {
  const {
    fetchedProducts,
    searchKeyword,
    setSearchKeyword,
    loading,
    error,
    getProductData,
  } = useGetProducts(`https://dummyjson.com/products/`);
>>>>>>> c251e014f9ff29d8fc9790aafaf1fbedfc3b45be

  const handleSubmit = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();
      getProductData(searchKeyword);
    },
    [getProductData, searchKeyword]
  );
  return (
<<<<<<< HEAD
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
          <Button type="primary" className="bg-primaryBlue" htmlType="submit">
            Submit
          </Button>
        </Space.Compact>
      </form>
    </div>
=======
    <>
      {loading ? (
        <div>... loading </div>
      ) : (
        <div className="searchDiv w-full h-full">
          <form onSubmit={handleSubmit}>
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
              >
                Submit
              </Button>
            </Space.Compact>
          </form>
          {error && <div>Error</div>}
          {fetchedProducts.length > 0 && (
            <div>
              {fetchedProducts.map((product: TProduct) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
>>>>>>> c251e014f9ff29d8fc9790aafaf1fbedfc3b45be
  );
}
