import React, { useCallback, useContext, useMemo, useState } from "react";
import { useGetSingleCartProduct } from "../../../hooks/useGetSingleCartProduct";
import { TcartProduct } from "../../../types/TcartProduct";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { CartModalContext } from "../../../contexts/CartModalContext";

export function CartItem(cartId: TcartProduct, total: number) {
  const { error, singleCartProduct, isLoading } =
    useGetSingleCartProduct(cartId);
  const { cartItems, setCartItems } = useContext(GlobalContext);
  const { totalAmount, setTotalAmount } = useContext(CartModalContext);

  const [quantity, setQuantity] = useState<number>(
    Number(singleCartProduct?.amount) || 0
  );
  const price = Number(singleCartProduct?.price);

  const calculateTotal = useMemo(() => {
    let total = 0;
    if (!isNaN(price) && !isNaN(quantity)) {
      total += price * quantity;
    }
    setTotalAmount(total);
    return total;
  }, [quantity, price]);

  const handleRemoveFromCart = useCallback(() => {
    setCartItems((prev) => {
      const newCartItems = prev.filter((item) => item !== cartId.cartId);
      return newCartItems;
    });
  }, [cartId]);

  const handleIncreaseQuantity = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }, []);

  const handleDecreaseQuantity = useCallback(() => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }, [quantity]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <div>
      <li className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={singleCartProduct?.images[0]}
            // alt={}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              {/* <h3><a href={product.href}>{product.name}</a></h3> */}
              <p className="ml-4">{price}$</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              {singleCartProduct?.title}
            </p>
          </div>
          <div className="flex flex-1 items-end justify-between pt-3 text-sm">
            <div className="flex justify-between">
              {" "}
              <button
                type="button"
                className="font-medium p-3.5   text-indigo-600 hover:text-indigo-500"
                onClick={handleIncreaseQuantity}
              >
                +
              </button>
              <p className="text-gray-500 flex justify-center items-center ">
                {quantity}{" "}
              </p>
              <button
                type="button"
                className="font-medium p-3.5   text-indigo-600 hover:text-indigo-500"
                onClick={handleDecreaseQuantity}
              >
                -
              </button>
            </div>

            <div className="flex">
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => handleRemoveFromCart()}
              >
                Remove
              </button>
            </div>
          </div>
          <p>{totalAmount}</p>
        </div>
      </li>
    </div>
  );
}
