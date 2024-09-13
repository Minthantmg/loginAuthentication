import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="container mx-auto px-4 md:my-16">
      <div className="max-w-6xl mx-auto mt-6">
        <div className="flex justify-center items-center rounded-md shadow-lg">
          <div className="md:w-1/2 flex flex-col justify-center items-center md:mx-24">
            <div className="md:text-3xl font-bold bg-gradient-to-r from-yellow-500 via-blue-500 to-red-500 bg-clip-text text-transparent">
              Vista
            </div>
            <div className="text-2xl text-gray-500 font-bold md:mt-4">
              Create your account
            </div>
            <div className="w-full md:mt-4">
              <form className="flex flex-col md:mt-4">
                <div>Username</div>
                <input
                  type="text"
                  placeholder="username"
                  className="md:mt-2 border md:py-1 md:px-3 rounded-sm"
                />
                <div className="md:mt-4">Email</div>
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
                <div className="md:mt-4">Confirm Password</div>
                <input
                  type="text"
                  placeholder="Password"
                  className="md:mt-2 border md:py-1 md:px-3 rounded-sm"
                />
                <Button className="md:mt-10">Login</Button>
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
        </div>
      </div>
    </div>
  );
};

export default page;
