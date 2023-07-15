import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL } from "../../config/baseURL.config";
import { UserFriends } from "styled-icons/fa-solid";

type TEditForm = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

export default function UserView() {
  const [edited, setEdited] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [producrErr, setProductErr] = useState<string | null>(null);
  const [userInfo, setUSerInfo] = useState<TEditForm>();

  async function getUser() {
    try {
      setIsLoading(true);
      const response = await axios.get(`${baseURL}/me`, {
        headers: {
          Authorization: `Bearer ${storedAccessToken}`,
        },
      });
      setUSerInfo(response.data);
      setIsLoading(false);
    } catch (error) {
      setProductErr("Error occurred while fetching the product.");
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getUser();
  }, []);

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm<TEditForm>();

  useEffect(() => {
    if (userInfo) {
      setValue("firstName", userInfo.firstName);
      setValue("lastName", userInfo.lastName);
      setValue("phoneNumber", userInfo.phoneNumber);
      setValue("email", userInfo.email);
    }
  }, [userInfo, setValue]);

  const storedAccessToken = localStorage.getItem("AccessToken");

  async function onSubmit(data: TEditForm) {
    try {
      const resp = await axios.post(`${baseURL}/user`, data, {
        headers: {
          Authorization: `Bearer ${storedAccessToken}`,
        },
      });
      if (resp.status === 201 || resp.status === 200) {
        setEdited(true);
      }
    } catch (error: any) {
      setError("root", { message: error.response.data.message });
    }
  }

  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl ">
              Edit Your Account
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Firstname
                </label>
                <input
                  {...register("firstName", { required: true })}
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="John"
                  required
                />
                {errors.firstName && (
                  <p className="mt-2 text-sm text-red-600 ">
                    <span className="font-medium">Oh, snapp!</span> Some error
                    message.
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Lastname
                </label>
                <input
                  {...register("lastName", { required: true })}
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Doe"
                  required
                />
                {errors.lastName && (
                  <p className="mt-2 text-sm text-red-600 ">
                    <span className="font-medium">Oh, snapp!</span> Some error
                    message.
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Phone number
                </label>
                <input
                  {...register("phoneNumber", { required: true })}
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="+995........."
                  required
                />
                {errors.phoneNumber && (
                  <p className="mt-2 text-sm text-red-600 ">
                    <span className="font-medium">Oh, snapp!</span> Some error
                    message.
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 ">
                    <span className="font-medium">Oh, snapp!</span> Some error
                    message.
                  </p>
                )}
              </div>

              {errors?.root && (
                <p className="mt-2 text-sm text-red-600 ">
                  <span className="font-medium">ups!</span>{" "}
                  {errors.root.message}
                </p>
              )}

              <div className="flex justify-center">
                {" "}
                <button
                  type="submit"
                  className="w-1/2 text-white bg-primary-600 bg-blue-400 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Edit
                </button>
              </div>
              <p className="text-sm font-light text-gray-500 ">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline "
                >
                  Login here
                </Link>
              </p>
              {edited && (
                <p className="mt-2 text-sm text-green-600 ">
                  <span className="mr-10">Account edited successfully</span>
                  <span className="font-medium">
                    <Link to="/login">Login here </Link>
                  </span>{" "}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
