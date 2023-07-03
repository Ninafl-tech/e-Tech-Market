import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../provider/CurrentUserProvider";
import jwt_decode from "jwt-decode";

import { useForm } from "react-hook-form";
import { Tlocalstorage } from "../../types/TlocalStorage";
import { AuthContext, TAuthorizationStatus } from "../../contexts/AuthContext";
import { useContext } from "react";
import { baseURL } from "../../config/baseURL.config";

type TLoginForm = {
  email: string;
  password: string;
};

export default function LoginView() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  console.log(currentUser);
  const { status, setStatus } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TLoginForm>();

  async function onSubmit(data: TLoginForm) {
    try {
      const resp = await axios.post(`${baseURL}/auth/signin`, data);
      console.log(resp.data.accessToken);
      if (resp.data.accessToken) {
        localStorage.setItem("access-token", resp.data.accessToken);
        const decodedToken = jwt_decode(resp.data.accessToken);
        setCurrentUser({
          user_id: (decodedToken as { id: string; role: string }).id,
          user_role: (decodedToken as { id: string; role: string }).role,
        });
        setStatus(TAuthorizationStatus.AUTHORIZED);
        if (currentUser.user_role === "ADMIN") {
          navigate("/admin");
        }
      }
    } catch (error: any) {
      setError("root", { message: "something went wrong" });
    }
  }

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a>
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit(onSubmit)}
            >
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com"
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
                  <span className="font-medium">ups!</span> Something went
                  wrong. please try again.
                </p>
              )}
              <button
                type="submit"
                className="w-full text-red bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline "
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
