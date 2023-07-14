import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL } from "../../../../config/baseURL.config";
import { New } from "styled-icons/entypo";

type TaddProductForm = {
  title: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  images: string[];
  amount: string;
};

export function AddProduct() {
  const [added, setAdded] = useState<boolean>(false);
  const [newProductsList, setNewProductsList] = useState<TaddProductForm[]>([]);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TaddProductForm>();

  const storedAccessToken = localStorage.getItem("AccessToken");

  async function onSubmit(NewProductData: TaddProductForm) {
    try {
      const resp = await axios.post(`${baseURL}/products`, NewProductData, {
        headers: {
          Authorization: `Bearer ${storedAccessToken}`,
          "Content-Type": "application/json",
        },
      });

      console.log(resp);
      console.log(NewProductData);
      console.log(resp.data);

      if (resp.data && resp.data.products) {
        setAdded(true);
        setNewProductsList((prevProducts) => [
          ...prevProducts,
          resp.data.products,
        ]);
        console.log(newProductsList);
      }
    } catch (error: any) {
      setError("title", { message: "Something went wrong" });
    }
  }

  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
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
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Product title
                  </label>
                  <input
                    {...register("title", { required: true })}
                    type="text"
                    name="title"
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="title"
                    required
                    // value={title}
                    // onChange={(e) => setTile(e.target.value)}
                    // type="text"
                    // className="w-full"
                  />
                  {errors.title && (
                    <p className="mt-2 text-sm text-red-600 ">
                      <span className="font-medium">Oh, snapp!</span> Some error
                      message.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="brand"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Product brand
                  </label>
                  <input
                    {...register("brand", { required: true })}
                    type="text"
                    name="brand"
                    id="brand"
                    placeholder="brand"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                    // value={category}
                    // onChange={(e) => setCategory(e.target.value)}
                    // type="text"
                    // className="w-full"
                  />
                  {errors.category && (
                    <p className="mt-2 text-sm text-red-600 ">
                      <span className="font-medium">Oh, snapp!</span> Some error
                      message.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Product category
                  </label>
                  <input
                    {...register("category", { required: true })}
                    type="text"
                    name="category"
                    id="category"
                    placeholder="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                    // value={category}
                    // onChange={(e) => setCategory(e.target.value)}
                    // type="text"
                    // className="w-full"
                  />
                  {errors.category && (
                    <p className="mt-2 text-sm text-red-600 ">
                      <span className="font-medium">Oh, snapp!</span> Some error
                      message.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    price
                  </label>
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    name="price"
                    id="price"
                    placeholder="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                    // value={price}
                    // onChange={(e) => setPrice(e.target.value)}
                    // type="text"
                    // className="w-full"
                  />
                  {errors.price && (
                    <p className="mt-2 text-sm text-red-600 ">
                      <span className="font-medium">Oh, snapp!</span> Some error
                      message.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    description
                  </label>
                  <input
                    {...register("description", { required: true })}
                    type="text"
                    name="description"
                    id="description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="description"
                    required
                    // value={desc}
                    // onChange={(e) => setDesc(e.target.value)}
                    // type="text"
                    // className="w-full"
                  />
                  {errors.description && (
                    <p className="mt-2 text-sm text-red-600 ">
                      <span className="font-medium">Oh, snapp!</span> Some error
                      message.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="amount"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Product amount
                  </label>
                  <input
                    {...register("amount", { required: true })}
                    type="text"
                    name="amount"
                    id="amount"
                    placeholder="amount"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                    // value={amount}
                    // onChange={(e) => setamount(e.target.value)}
                    // type="text"
                    // className="w-full"
                  />
                  {errors.amount && (
                    <p className="mt-2 text-sm text-red-600 ">
                      <span className="font-medium">Oh, snapp!</span> Some error
                      message.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Upload Images
                  </label>
                  <input
                    {...register("images", { required: true })}
                    type="text"
                    name="images"
                    id="images"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="images"
                    required
                    // value={title}
                    // onChange={(e) => setTile(e.target.value)}
                    // type="text"
                    // className="w-full"
                  />
                  {errors.images && (
                    <p className="mt-2 text-sm text-red-600 ">
                      <span className="font-medium">Oh, snapp!</span> Some error
                      message.
                    </p>
                  )}
                </div>
                {/* <div>
                  <label
                    htmlFor="amount"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Product brand
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 d"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 ">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 ">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        {...register("images", { required: true })}
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                    {errors.images && (
                      <p className="mt-2 text-sm text-red-600 ">
                        <span className="font-medium">Oh, snapp!</span> Some
                        error message.
                      </p>
                    )}
                  </div>
                </div> */}
                {/* 
                {errors?.root && (
                  <p className="mt-2 text-sm text-red-600 ">
                    <span className="font-medium">ups!</span>{" "}
                    {errors.root.message}
                  </p>
                )} */}

                <button
                  type="submit"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                >
                  ADD
                </button>

                {added && (
                  <p className="mt-2 text-sm text-green-600 ">
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
