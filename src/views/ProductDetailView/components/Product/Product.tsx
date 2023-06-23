import React from "react";
import { Visible, Hidden, Container, Text } from "./StProduct.styled";
import { useNavigate } from "react-router";
import { Button } from "antd";
import { TProductsList } from "../../../../types/Tproduct";

export function Product({ product }: TProductsList) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/products/${product.id}`);
    console.log("product clicked");
  };

  return (
    <Container>
      <Visible
        className="max-w-sm w-64 h-80 overflow-hidden rounded  shadow-lg flex flex-col justify-between "
        key={product.id}
      >
        <img
          className="w-full max-h-60"
          src={product.images[0]}
          alt={product.name}
        />
        <div className="px-5 py-3 flex justify-between items-center">
          <div className="font-bold text-base mb-2">{product.title}</div>
          <Button className="w-2/5 text-xs">
            <p>add to cart</p>
          </Button>
        </div>
      </Visible>
      <Hidden onClick={handleProductClick}>
        <Text>DETAILS</Text>
      </Hidden>
    </Container>
  );
}
