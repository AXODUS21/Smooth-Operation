"use client";

import { Header } from "@components/Header";
import { ThemeProvider } from "@components/ThemeProvider";
import { Toaster } from "@components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="h-16">
          <Header/>
        </div>
        {children}
      </ThemeProvider>
        <Toaster/>
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}
