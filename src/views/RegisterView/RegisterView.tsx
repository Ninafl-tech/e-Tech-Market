import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL } from "../../config/baseURL.config";

type TRegisterForm = {
  username: string;
  email: string;
  password: string;
};
export default function RegisterView() {
  const [created, setCreated] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TRegisterForm>();

  async function onSubmit(data: TRegisterForm) {
    try {
      const resp = await axios.post(`${baseURL}/auth/signup`, data);
      if (resp.status === 201 || resp.status === 200) {
        setCreated(true);
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
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Create an Account
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
                  Your username
                </label>
                <input
                  {...register("username", { required: true })}
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="username"
                  required
                />
                {errors.username && (
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
                  Your email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="••••••••"
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
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                />
                {errors.password && (
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

              <button
                type="submit"
                className="w-full text-red bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline "
                >
                  Login here
                </Link>
              </p>

              {created && (
                <p className="mt-2 text-sm text-green-600 ">
                  <span className="mr-10">Account created successfully</span>
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
