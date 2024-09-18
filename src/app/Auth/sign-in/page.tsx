"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "../../../../hooks/useUser";
import { useToast } from "@/hooks/use-toast";

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { toast } = useToast();

  const { getLogin } = useUser();
  const { mutateAsync: signInUser, isError, isPending, isSuccess } = getLogin();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!email || !password) {
      console.log("null error");
      return;
    }

    try {
      const result = await signInUser({ email, password });
      if (result.statusCode === 200) {
        const userId = result.data._id;
        router.push("/hero");
      }
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  useEffect(() => {
    router.prefetch("/hero");
  }, [router]);

  return (
    <>
      <div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mt-6">
            <div className="flex justify-center items-center rounded-md shadow-lg">
              <div className="md:w-1/2 flex flex-col justify-center items-center md:mx-24">
                <div className="md:text-3xl font-bold bg-gradient-to-r from-yellow-500 via-blue-500 to-red-500 bg-clip-text text-transparent">
                  Vista
                </div>
                <div className="text-2xl text-gray-500 font-bold md:mt-4">
                  Sign in to your account
                </div>
                <div className="w-full md:mt-4">
                  <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div>Email</div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="md:mt-2 border md:py-1 md:px-3 rounded-sm"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="md:mt-4">Password</div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="md:mt-2 border md:py-1 md:px-3 rounded-sm"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Link href="/Auth/forget-password">
                      <div className="underline flex justify-end text-blue-400 cursor-pointer md:mt-2">
                        Forget password?
                      </div>
                    </Link>
                    <Button className="md:my-10">Login</Button>
                    <div className="flex justify-center items-center md:my-10">
                      Don&apos;t have an account?Register
                      <Link href="/Auth/sign-up">
                        <span className="underline text-blue-400 cursor-pointer md:ml-1">
                          here
                        </span>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
