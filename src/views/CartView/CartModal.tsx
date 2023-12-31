import { Fragment, useContext, useMemo, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { CartModalContext } from "../../contexts/CartModalContext";
import { GlobalContext } from "../../contexts/GlobalContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { CartItem } from "./CartItem/CartItem";
import { TUserTypes } from "../../types/TUserTypes";
import { useNavigate } from "react-router-dom";

export function CartModal() {
  const { cartVisible, setCartVisible } = useContext(CartModalContext);
  const { cartItems, setCartItems } = useContext(GlobalContext);
  const { currentUser } = useContext(CurrentUserContext);
  const [bought, setBought] = useState<boolean>(false);
  const navigate = useNavigate();

  const AfterPayment = useMemo(
    () => (
      <div className="mt-8 font-medium text-indigo-600 bg-primaryGray rounded p-3">
        {" "}
        Payment was successfull !
      </div>
    ),
    []
  );

  const BeforePayment = useMemo(
    () => (
      <>
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cartItems.map((item) => {
                return <CartItem cartId={item} key={item} />;
              })}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>{}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          {currentUser === TUserTypes.USER ||
            (currentUser === TUserTypes.ADMIN ? (
              <div className="mt-6">
                <button
                  onClick={() => {
                    if (cartItems.length !== 0) {
                      setBought(true);
                      setCartItems([]);
                    }
                  }}
                  type="button"
                  className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Continue To Payment
                </button>
              </div>
            ) : (
              <div className="mt-6">
                <button
                  onClick={() => {
                    navigate("/login");
                    setCartVisible(false);
                  }}
                  type="button"
                  className="w-full flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Log in to proceed payment
                </button>
              </div>
            ))}

          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => setCartVisible(false)}
              >
                or Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </>
    ),
    [cartItems]
  );

  if (cartVisible) {
    return (
      <Transition.Root show={cartVisible} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setCartVisible}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setCartVisible(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        {bought ? AfterPayment : BeforePayment}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }
  return null;
}
