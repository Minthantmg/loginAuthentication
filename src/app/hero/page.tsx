"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useUser } from "../../../hooks/useUser";

const page = () => {
  const { data } = useSession();
  const router = useRouter();
  const userImage = data?.user?.image || "/default-avatar.png";
  console.log(JSON.stringify(data));

  useEffect(() => {
    if (!data) {
      router.push("/Auth/sign-in");
    }
  }, [data, router]);

  return (
    <div>
      {data ? (
        <div className="flex flex-col">
          {data.user?.image ? (
            <Image
              src={userImage}
              alt="user"
              width={150}
              height={150}
              priority
            />
          ) : (
            <div>No Image Available</div>
          )}
          <div className="flex flex-col">
            <div> Email: {data.user?.email}</div>
            <div> Username: {data.user?.name}</div>
            <div>
              <Button onClick={() => signOut()}>Sign out</Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default page;
