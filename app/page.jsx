"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

export default function Login() {
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  return (
    <section className="flex h-screen items-center justify-center bg-[#151c2c]">
      <div className=" lg:w-1/2 ml-24 mr-24 bg-[#182237] px-10 py-20 rounded-3xl items-center justify-center border-2 border-gray-200">
        <h2 className="font-semibold text-center text-4xl mt-4 text-white">
          Welcome User
        </h2>
        <p className="text-md text-center text-white mt-4">
          {loading ? "Processing" : "Enter details for Login"}
        </p>
        <br />
        <div>
          <div>
            <label
              htmlFor="email"
              className="text-lg font-medium text-[#b7bac1]"
            >
              Email
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt1 bg-transparent text-white"
              id="email"
              type="text"
              // value={user.email}
              //onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-lg font-medium text-[#b7bac1]"
            >
              Password
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt1 bg-transparent text-white"
              id="password"
              type="password"
              // value={user.password}
              //onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Password"
            />
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-white">
                Remember Me
              </label>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              onClick={() => onLogin()}
              className="bg-[#002D74] hover:bg-blue-700 rounded-xl text-white py-2"
            >
              {buttonDisabled ? "Login Disabled" : "Login"}
            </button>
            <Link href="/signup" className="text-white">
              Signup
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-[#151c2c] lg:flex h-full w-1/2 items-center justify-center mr-12">
        <Image
          src={"/images/sarang-login.jpg"}
          alt="login image"
          width={750}
          height={950}
        />
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </section>
  );
}
