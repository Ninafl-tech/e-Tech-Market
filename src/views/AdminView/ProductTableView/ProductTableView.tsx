import React, { useEffect } from "react";
import { TProduct } from "../../../types/Tproduct";
import { Pagination } from "antd";
import { PAGINATION_LIMIT } from "../../../config/pagination.config";
import { useGetProducts } from "../../../hooks/useGetProducts";

export default function ProductTableView() {
  const { productsData, isLoading, getProducts, totalItems, onChange } =
    useGetProducts();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  console.log(productsData);

  return (
    <div>
      {isLoading ? (
        <div>... loading</div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product title
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {productsData.map((product: TProduct) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.title}
                  </th>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="flex items-center px-6 py-4 space-x-3">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Remove
                    </a>
                  </td>
                </tr>
              ))}
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th></th>
                <td className="px-6 py-4">
                  {" "}
                  <div className="flex justify-center">
                    {/* <Pagination
                      current={currentPage}
                      onChange={onChange}
                      total={totalItems}
                      pageSize={PAGINATION_LIMIT}
                      simple={true}
                    /> */}
                  </div>
                </td>
                <td className="px-6 py-4"></td>
                <td className="flex items-center px-6 py-4 space-x-3">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  ></a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  ></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
