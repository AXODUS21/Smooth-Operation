import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@lib/utils";
import { AppProvider } from "./AppProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        geistSans.variable,
        geistMono.variable,
        "min-h-screen bg-background antialiased"
      )}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
