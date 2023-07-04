import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFetchData } from "../../hooks/useFetchData";
import axios from "axios";
import { baseURL } from "../../config/baseURL.config";
import { TProduct } from "../../types/Tproduct";

export default function ProductDetailView() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState<TProduct>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function getProduct(id: string) {
    try {
      setIsLoading(true);
      const response = await axios.get(`${baseURL}/product/${id}`);
      setSingleProduct(response.data);
      setIsLoading(false);
    } catch (error) {
      setError("Error occurred while fetching the product.");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    id && getProduct(id);
  }, [id]);

  isLoading && <div>... loading </div>;
  error && <div>... {error} </div>;

  return (
    <section className="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex  -mx-4">
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
                  <span>{singleProduct?.category}</span>
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
                  {singleProduct?.title}
                </a>
              </li>
            </ul>
          </div>
          {/* {singleProduct?.images.map((image, index) => (
              <Carousel key={index} autoplay={true} afterChange={onChange}>
                <div>
                  <h3 style={contentStyle}>{image}</h3>
                </div>
              </Carousel>
            ))} */}

          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-md mb-6">
              <span className="text-xs text-gray-400 tracking-wider">
                {/* {singleProduct?.brand} */}
              </span>
              <h2 className="mt-6 mb-4 text-xl md:text-2xl lg:text-3xl font-heading font-medium">
                {singleProduct?.title}
              </h2>
              <p className="flex items-center mb-6">
                <span className="mr-2 text-sm text-blue-500 font-medium">
                  $
                </span>
                <span className="text-xl text-blue-500 font-medium">
                  {singleProduct?.price}
                </span>
              </p>
              <p className="text-lg text-gray-400">
                {singleProduct?.description}
              </p>
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
              <span className="text-md text-gray-400">
                {/* {singleProduct?.rating} */}
              </span>
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
