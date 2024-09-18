"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ProvidersProps {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  session: any;
}

const Providers = ({ children, session }: ProvidersProps) => {
  const queryClient = new QueryClient();
  return (
    // <SessionProvider session={session}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    // </SessionProvider>
  );
};

export default Providers;
