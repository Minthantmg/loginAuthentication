"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const router = useRouter();

  const logout = () => {
    router.push("/Auth/sign-in");
  };

  return (
    <div>
      <div className="flex flex-col">
        <div>
          <Button onClick={logout}>Sign out</Button>
        </div>
      </div>
    </div>
  );
};

export default page;
