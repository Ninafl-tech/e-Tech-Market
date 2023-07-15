import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { New } from "styled-icons/entypo";
import { InsertImage } from "../components/InsertImage";
import { TImage } from "../types/TImage";
import { baseURL } from "../../../config/baseURL.config";
import { TProduct } from "../../../types/Tproduct";
import { v4 as uuidv4 } from "uuid";

type TaddProductForm = {
  title: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  amount: string;
};

export const EditProduct = () => {
  const [singleProduct, setSingleProduct] = useState<TProduct>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [producrErr, setProductErr] = useState<string | null>(null);
  const [fileList, setFileList] = useState<TImage[]>([]);

  const [added, setAdded] = useState<boolean>(false);

  const { id } = useParams();

  async function getProduct(id: string) {
    try {
      setIsLoading(true);
      const response = await axios.get(`${baseURL}/product/${id}`);
      setSingleProduct(response.data);
      setIsLoading(false);
    } catch (error) {
      setProductErr("Error occurred while fetching the product.");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    id && getProduct(id);
  }, [id]);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TaddProductForm>();

  useEffect(() => {
    if (singleProduct) {
      setValue("title", singleProduct.title);
      setValue("brand", singleProduct.brand);
      setValue("category", singleProduct.category);
      setValue("price", singleProduct.price);
      setValue("description", singleProduct.description);
      setValue("amount", singleProduct.amount);
      setFileList(
        singleProduct?.images.map((url: string) => ({ id: uuidv4(), url }))
      );
    }
  }, [singleProduct, setValue]);

  const storedAccessToken = localStorage.getItem("AccessToken");

  const onSubmit: SubmitHandler<TaddProductForm> = async (NewProductData) => {
    const values = {
      ...NewProductData,
      images: fileList.map((item) => item.url),
      id: id,
    };

    try {
      const resp = await axios.put(`${baseURL}/product/${id}`, values, {
        headers: {
          Authorization: `Bearer ${storedAccessToken}`,
        },
      });

      setAdded(true);
    } catch (error: any) {
      setProductErr("Something went wrong");
    }
  };

  return (
    <div className="w-[500px] mx-auto bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
      <div className="sm:p-6 md:p-8 space-y-4 md:space-y-6 ">
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
            />
            {errors.amount && (
              <p className="mt-2 text-sm text-red-600 ">
                <span className="font-medium">Oh, snapp!</span> Some error
                message.
              </p>
            )}
          </div>

          <InsertImage fileList={fileList} setFileList={setFileList} />

          <button
            type="submit"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          >
            SAVE
          </button>

          {added && (
            <p className="mt-2 text-sm text-green-600 ">
              <span className="mr-10">Product edited successfully</span>
              <span className="font-medium">
                <Link to="/admin/products">Manage Products List</Link>
              </span>{" "}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
