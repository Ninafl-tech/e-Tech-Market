import React, { useContext } from "react";
import { useGetSingleCartProduct } from "../../../hooks/useGetSingleCartProduct";
import { TcartProduct } from "../../../types/TcartProduct";
import { GlobalContext } from "../../../contexts/GlobalContext";

export function CartItem(cartId: TcartProduct) {
  const { error, singleCartProduct, isLoading } =
    useGetSingleCartProduct(cartId);
  const { cartItems, setCartItems } = useContext(GlobalContext);

  const handleRemoveFromCart = () => {
    const newCartItems = cartItems.filter((item) => item !== cartId.cartId);
    setCartItems(newCartItems);
  };

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
              <p className="ml-4">{singleCartProduct?.price}$</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              {singleCartProduct?.title}
            </p>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500">Qty {singleCartProduct?.amount}</p>

            <div className="flex">
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={handleRemoveFromCart}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}
