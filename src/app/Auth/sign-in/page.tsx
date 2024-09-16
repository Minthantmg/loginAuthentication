"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import github from "../../public/github.png";
import discord from "../../public/discord.png";
import Image from "next/image";

const page = () => {
  const { data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (data) {
      router.push("/hero");
    }
  }, [data, router]);

  const gotoHome = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push("/hero");
  };
  return (
    <>
      {data ? null : (
        <div>
          <div className="container mx-auto px-4 md:my-16">
            <div className="max-w-6xl mx-auto mt-6">
              <div className="flex justify-center items-center rounded-md shadow-lg">
                <div className="md:w-1/2 flex flex-col justify-center items-center md:mx-24">
                  <div
                    className="md:text-3xl font-bold bg-gradient-to-r from-yellow-500
             via-blue-500 to-red-500 bg-clip-text text-transparent"
                  >
                    Vista
                  </div>
                  <div className="text-2xl text-gray-500 font-bold md:mt-4">
                    Sign in to your account
                  </div>
                  <div className="w-full md:mt-4">
                    <form className="flex flex-col" onSubmit={gotoHome}>
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
                        Don&apos;t have an account?Register
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
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full md:my-4"
                    onClick={() => signIn("github")}
                  >
                    <div className="flex gap-3">
                      <div>
                        <Image
                          src={github}
                          alt="github"
                          width={20}
                          height={20}
                        />
                      </div>
                      Sign In with Github
                    </div>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full md:mb-4"
                    onClick={() => signIn("discord")}
                  >
                    <div className="flex gap-3">
                      <div>
                        <Image
                          src={discord}
                          alt="discord"
                          width={20}
                          height={20}
                        />
                      </div>
                      Sign In with Discord
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
