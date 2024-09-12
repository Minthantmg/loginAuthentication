import React from "react";
import loginImage from "../../public/jake-kling-QciqHrNJFI0-unsplash.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-6xl mx-auto mt-6">
        <div className="shadow-lg flex rounded-md">
          <div className="md:w-1/2 h-full flex flex-col justify-center items-center h-[650px]">
            <div className="md:text-3xl font-bold bg-gradient-to-r from-yellow-500 via-blue-500 to-red-500 bg-clip-text text-transparent">
              Vista
            </div>
            <div className="text-2xl text-gray-500 font-bold md:mt-4">
              Create your account
            </div>
            <div className="w-full md:mt-4">
              <form className="md:mx-24 flex flex-col">
                <div>Username</div>
                <input
                  type="text"
                  placeholder="Username"
                  className="md:mt-2 border md:py-1 md:px-3 rounded-sm"
                />
                <div className="md:mt-4">Email</div>
                <input
                  type="email"
                  placeholder="Email"
                  className="md:mt-2 border md:py-1 md:px-3 rounded-sm"
                />
                <div className="md:mt-4">Password</div>
                <input
                  type="password"
                  placeholder="Password"
                  className="md:mt-2 border md:py-1 md:px-3 rounded-sm"
                />
                <div className="md:mt-4">Confirm Password</div>
                <input
                  type="password"
                  placeholder="Password"
                  className="md:mt-2 border md:py-1 md:px-3 rounded-sm"
                />
                <Button className="md:mt-10">Create Account</Button>
                <div className="flex justify-center items-center md:mt-6">
                  Already have an account?
                  <Link href="/Auth/sign-in">
                    <span className="underline text-blue-400 cursor-pointer md:ml-1">
                      Login
                    </span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="w-1/2 h-[650px]">
            <Image
              src={loginImage}
              alt="titleImage"
              className="rounded-r-md h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
