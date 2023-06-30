import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

type TaddProductForm = {
  Title: string;
  Category: string;
  Price: number;
  Description: string;
  Upload: string;
};

export function AddProduct() {
  const [added, setAdded] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TaddProductForm>();

  async function onSubmit(data: TaddProductForm) {
    try {
      const resp = await axios.post("https://dummyjson.com/products/add", data);
      if (resp.status === 201 || resp.status === 200) {
        setAdded(true);
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
                    htmlFor="Title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Title
                  </label>
                  <input
                    {...register("Title", { required: true })}
                    type="text"
                    name="Title"
                    id="Title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Title"
                    required
                  />
                  {errors.Title && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      <span className="font-medium">Oh, snapp!</span> Some error
                      message.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="Category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Category
                  </label>
                  <input
                    {...register("Category", { required: true })}
                    type="text"
                    name="Category"
                    id="Category"
                    placeholder="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  {errors.Category && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      <span className="font-medium">Oh, snapp!</span> Some error
                      message.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="Price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    {...register("Price", { required: true })}
                    type="text"
                    name="Price"
                    id="Price"
                    placeholder="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  {errors.Price && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      <span className="font-medium">Oh, snapp!</span> Some error
                      message.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="Description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <input
                    {...register("Description", { required: true })}
                    type="text"
                    name="Description"
                    id="Description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Description"
                    required
                  />
                  {errors.Description && (
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
