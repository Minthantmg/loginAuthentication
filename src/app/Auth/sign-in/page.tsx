import React from "react";
import loginImage from "../../public/catalin-dumitra-cu-UaUBT6F7TvY-unsplash.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <div className="container mx-auto px-4 md:my-16">
      <div className="max-w-6xl mx-auto mt-6">
        <div className="shadow-lg flex rounded-md md:h-[650px]">
          <div className="w-1/2">
            <div className="h-full">
              <Image
                src={loginImage}
                alt="titleImage"
                className="rounded-l-md h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center items-center md:mx-24">
            <div className="md:text-3xl font-bold bg-gradient-to-r from-yellow-500 via-blue-500 to-red-500 bg-clip-text text-transparent">
              Vista
            </div>
            <div className="text-2xl text-gray-500 font-bold md:mt-4">
              Sign in to your account
            </div>
            <div className="w-full md:mt-4">
              <form className="flex flex-col">
                <div>Email</div>
                <input
                  type="text"
                  placeholder="Email"
                  className="md:mt-2 border md:py-1 md:px-3 rounded-sm"
                />
                <div className="md:mt-4">Password</div>
                <input
                  type="text"
                  placeholder="Password"
                  className="md:mt-2 border md:py-1 md:px-3 rounded-sm"
                />
                <Link href="/Auth/forget-password">
                  <div className="underline flex justify-end text-blue-400 cursor-pointer md:mt-2">
                    Forget password?
                  </div>
                </Link>
                <Button className="md:mt-10">Login</Button>
                <div className="flex justify-center items-center md:mt-6">
                  Don't have an account?Register
                  <Link href="/Auth/sign-up">
                    <span className="underline text-blue-400 cursor-pointer md:ml-1">
                      here
                    </span>
                  </Link>
                </div>
              </form>
            </div>
            <div className="flex gap-2 w-full md:mt-8 justify-center items-center">
              <Separator className="w-4/12" />
              <div className="w-4/12 text-center">or login with</div>
              <Separator className="w-4/12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
