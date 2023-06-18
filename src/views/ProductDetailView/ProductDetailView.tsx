import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { TProductprops } from "../../types/Tproduct";

export default function ProductDetailView() {
  const { id } = useParams();

  const [product, setProduct] = useState({} as TProductprops);
  const [loading, setLoading] = useState<boolean>(false);

  async function getOneProduct(userId: string) {
    setLoading(true);
    const resp = await axios.get(`https://dummyjson.com/products/${userId}`);
    setProduct(resp.data);
    setLoading(false);
  }

  useEffect(() => {
    id && getOneProduct(id);
  }, [id]);

  loading && <div>... loading </div>;
  return (
    <section className="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <ul className="flex flex-wrap items-center mb-16">
              <li className="mr-6">
                <a
                  className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                  href="#"
                >
                  <span>Home</span>
                  <svg
                    className="ml-6"
                    width="4"
                    height="7"
                    viewBox="0 0 4 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="mr-6">
                <a
                  className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                  href="#"
                >
                  <span>{product.category}</span>
                  <svg
                    className="ml-6"
                    width="4"
                    height="7"
                    viewBox="0 0 4 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="text-xs font-medium text-indigo-500 hover:text-indigo-600"
                  href="#"
                >
                  {product.title}
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
              <div className="w-full sm:w-auto min-w-max px-4 text-center flex sm:flex-col items-center justify-center">
                <a
                  className="inline-block sm:mb-12 mr-4 sm:mr-0 transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400"
                  href="#"
                >
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.54064 7.21015C1.18719 7.59662 0.615928 7.59662 0.265087 7.21015C-0.087058 6.82369 -0.0896663 6.19929 0.265087 5.81282L5.36206 0.289847C5.71421 -0.0966173 6.28416 -0.0966172 6.63892 0.289847L11.7359 5.81282C12.088 6.19785 12.088 6.82369 11.7359 7.21015C11.3824 7.59662 10.8112 7.59662 10.4603 7.21015L5.99853 2.68073L1.54064 7.21015Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <a className="h-30 block mb-4 mr-2 sm:mr-0" href="#">
                  <img
                    className="h-full w-full"
                    src="uinel-assets/images/ecommerce-product-info/placeholder1.png"
                    alt=""
                  />
                </a>
                <a className="hidden sm:block h-30 mb-4 mr-2 sm:mr-0" href="#">
                  <img
                    className="h-full w-full"
                    src="uinel-assets/images/ecommerce-product-info/placeholder2.png"
                    alt=""
                  />
                </a>
                <a
                  className="hidden sm:block h-30 mb-4 mr-2 sm:mr-0 rounded-xl border-2 border-blueGray-500"
                  href="#"
                >
                  <img
                    className="h-full w-full"
                    src="uinel-assets/images/ecommerce-product-info/placeholder4.png"
                    alt=""
                  />
                </a>
                <a className="h-30 block mb-4 sm:mb-12 mr-4 sm:mr-0" href="#">
                  <img
                    className="h-full w-full"
                    src="uinel-assets/images/ecommerce-product-info/placeholder3.png"
                    alt=""
                  />
                </a>
                <a
                  className="inline-block transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400"
                  href="#"
                >
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4594 0.289849C10.8128 -0.0966154 11.3841 -0.0966154 11.7349 0.289849C12.0871 0.676313 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880364 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.0966159 1.53966 0.289848L6.00147 4.81927L10.4594 0.289849Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>

              <div className="w-full sm:w-9/12 px-4">
                <p className="text-sm text-gray-300">
                  Roll over image to zoom in
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-md mb-6">
              <span className="text-xs text-gray-400 tracking-wider">
                {product.brand}
              </span>
              <h2 className="mt-6 mb-4 text-xl md:text-2xl lg:text-3xl font-heading font-medium">
                {product.title}
              </h2>
              <p className="flex items-center mb-6">
                <span className="mr-2 text-sm text-blue-500 font-medium">
                  $
                </span>
                <span className="text-xl text-blue-500 font-medium">
                  {product.price}
                </span>
              </p>
              <p className="text-lg text-gray-400">{product.description}</p>
            </div>
            <div className="flex mb-6 items-center">
              <div className="inline-flex mr-4">
                <button className="mr-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                      fill="#C1C9D3"
                    ></path>
                  </svg>
                </button>
                <button className="mr-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                      fill="#C1C9D3"
                    ></path>
                  </svg>
                </button>
                <button className="mr-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                      fill="#C1C9D3"
                    ></path>
                  </svg>
                </button>
                <button className="mr-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                      fill="#C1C9D3"
                    ></path>
                  </svg>
                </button>
                <button>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                      fill="#C1C9D3"
                    ></path>
                  </svg>
                </button>
              </div>
              <span className="text-md text-gray-400">{product.rating}</span>
            </div>

            <div className="flex flex-wrap -mx-2 mb-12">
              <div className="w-full md:w-2/3 px-2 mb-2 md:mb-0">
                <a
                  className="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl"
                  href="#"
                >
                  Add to bag
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
