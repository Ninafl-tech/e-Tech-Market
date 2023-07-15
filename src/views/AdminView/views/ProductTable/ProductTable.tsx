import React, { useEffect } from "react";
import { TProduct } from "../../../../types/Tproduct";
import { Pagination } from "antd";
import { PAGINATION_LIMIT } from "../../../../config/pagination.config";
import { useGetProducts } from "../../../../hooks/useGetProducts";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../../../config/baseURL.config";

export default function ProductTable() {
  const navigate = useNavigate();
  const storedAccessToken = localStorage.getItem("AccessToken");

  const {
    productsData,
    isLoading,
    getProducts,
    totalItems,
    onChange,
    currentPage,
  } = useGetProducts();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const onDelete = async (id: string | number) => {
    try {
      await axios.delete(`${baseURL}/product/${id}`, {
        headers: {
          Authorization: `Bearer ${storedAccessToken}`,
        },
      });
      getProducts();
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <div>... loading</div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
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
                <tr
                  key={product.id}
                  className="bg-white border-b  hover:bg-gray-50 "
                >
                  <th
                    onClick={() => navigate(`/products/${product.id}`)}
                    scope="row"
                    className=" cursor-pointer hover:text-blue-500 hover:underline hover:scale-95 duration-300 px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {product.title.slice(0, 50) + "..."}
                  </th>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="flex items-center px-6 py-4 space-x-3">
                    <Link
                      to={`/admin/edit/${product.id}`}
                      className="font-medium text-blue-600  hover:underline"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => onDelete(product.id)}
                      className="font-medium text-red-600  hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="flex justify-center mt-7">
        <Pagination
          current={currentPage}
          onChange={onChange}
          total={totalItems}
          pageSize={PAGINATION_LIMIT}
          simple={true}
        />
      </div>
    </div>
  );
}
