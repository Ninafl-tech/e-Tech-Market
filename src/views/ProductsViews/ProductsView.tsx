import React, { useEffect } from "react";
import { TProduct } from "../../types/Tproduct";
import { Product } from "../../components/Product/Product";
import { Pagination } from "antd";
import { PAGINATION_LIMIT } from "../../config/pagination.config";
import { useProductsOLD } from "../../hooks/useProductsOLD";
import { StCard } from "../../components/StCard/StCard.syled";

export default function ProductsView() {
  const { productsData, getProducts, isLoading, totalItems } = useProductsOLD();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div>
      {isLoading ? (
        <div>... loading</div>
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-wrap">
            {productsData.map((product: TProduct) => (
              <div className="p-12" key={product.id}>
                <Product product={product} />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Pagination
              total={totalItems}
              pageSize={PAGINATION_LIMIT}
              simple={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}
