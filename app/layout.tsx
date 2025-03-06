import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@lib/utils";
import { AppProvider } from "./AppProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smooth Operation",
  description: "Smooth Operation was made while Smooth operator was playing on my spotify and the developer thought it would be a good idea to give that name to the app. The developer thinks he is very quirky and funny because he likes laughing at his own stupidity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*cn() basically merges all of the css that is inside it*/}
      {/*The app provider contains the theme for the website (dark mode light mode)*/}
      <body
      className={cn(
        inter.className,
        "min-h-screen bg-background antialiased"
      )}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
