import React from "react";
import { Visible, Hidden, Container, Text } from "./StProduct.styled";
import { useNavigate } from "react-router";
import { Button } from "antd";
import { TProductsList } from "../../types/Tproduct";

export function Product({ product }: TProductsList) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/products/${product.id}`);
    console.log("product clicked");
  };

  return (
    <Container>
      <Visible
        className="max-w-sm w-64 h-96 overflow-hidden rounded  shadow-lg flex flex-col justify-around "
        key={product.id}
      >
        <div className="flex justify-center ">
          <img
            className=" w-11/12 max-h-52"
            src={product.images[0]}
            alt={product.title}
          />
        </div>
        <div className="px-3.5 font-bold">{`${Math.floor(
          product.price
        )}$`}</div>
        <div className="px-3.5 py-3 flex justify-between items-center">
          <div className=" text-xs mb-2">{product.title}</div>
          <div className=" flex-col  justify-between">
            {" "}
            <Button>
              <p>add to cart</p>
            </Button>
            <Button>
              <p>buy now</p>
            </Button>
          </div>
        </div>
      </Visible>
      <Hidden onClick={handleProductClick}>
        <Text>DETAILS</Text>
      </Hidden>
    </Container>
  );
}
