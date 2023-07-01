import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL } from "../../../../config/baseURL.config";

type TaddProductForm = {
  title: string;
  category: string;
  price: number;
  description: string;
};

export function AddProduct() {
  const [added, setAdded] = useState<boolean>(false);
  const [title, setTile] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TaddProductForm>();

  async function onSubmit(data: TaddProductForm) {
    try {
      const resp = await axios.post(
        `http://localhost:3001/products`,
        { title: title, description: desc, price: +price, category: category },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNWRmM2U4LTRlNjItNDIzMS04ZTFmLWFiNzMzZDA2N2ZkYiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY4ODEzODgzMywiZXhwIjoxNjg4MjI1MjMzfQ.4OABF9AkX8TccqWbSHojlyjKIG0w7jdcY7NfzduMJk0`,
          },
        }
      );
      if (resp.data) {
        setAdded(true);
        console.log(resp.data);
      }
    } catch (error: any) {
      setError("root", { message: "something went wrong" });
    }
  }

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Add New Product
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product title
                  </label>
                  <input
                    // {...register("title", { required: true })}
                    // type="text"
                    // name="title"
                    // id="title"
                    // className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // placeholder="title"
                    // required
                    value={title}
                    onChange={(e) => setTile(e.target.value)}
                    type="text"
                    className="w-full"
                  />
                  {errors.title && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      <span className="font-medium">Oh, snapp!</span> Some error
                      message.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product category
                  </label>
                  <input
                    // {...register("category", { required: true })}
                    // type="text"
                    // name="category"
                    // id="category"
                    // placeholder="category"
                    // className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    type="text"
                    className="w-full"
                  />
                  {errors.category && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      <span className="font-medium">Oh, snapp!</span> Some error
                      message.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    price
                  </label>
                  <input
                    // {...register("price", { required: true })}
                    // type="number"
                    // name="price"
                    // id="price"
                    // placeholder="price"
                    // className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="text"
                    className="w-full"
                  />
                  {errors.price && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      <span className="font-medium">Oh, snapp!</span> Some error
                      message.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    description
                  </label>
                  <input
                    // {...register("description", { required: true })}
                    // type="text"
                    // name="description"
                    // id="description"
                    // className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // placeholder="description"
                    // required
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    type="text"
                    className="w-full"
                  />
                  {errors.description && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      <span className="font-medium">Oh, snapp!</span> Some error
                      message.
                    </p>
                  )}
                </div>

                {errors?.root && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">ups!</span>{" "}
                    {errors.root.message}
                  </p>
                )}

                <button
                  type="submit"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  ADD
                </button>

                {added && (
                  <p className="mt-2 text-sm text-green-600 dark:text-green-500">
                    <span className="mr-10">Product added successfully</span>
                    <span className="font-medium">
                      <Link to="/admin/products">Manage Products List</Link>
                    </span>{" "}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
