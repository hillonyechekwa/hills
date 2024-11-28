import type { Metadata } from "next";
import localFont from "next/font/local";
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import {ThemeProvider} from "@/utils/ThemeProvider"
import ThemeToggle from "@/utils/ThemeToggle";
import "./globals.css";
import React from "react";


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const gopher = localFont({
  src: "./fonts/GopherText-Regular.woff2",
  variable: "--font-gopher-sans",
  weight: "100 900",
})

const gopherBold = localFont({
    src: "./fonts/GopherText-Bold.woff2",
    variable: "--font-gopher-bold-sans",
    weight: "100 900"
})

export const metadata: Metadata = {
  title: "Hills Onyechekwa",
  description: "Software Engineer | Technical Writer",
    icons:{
      icon: './favicon.ico',
        shortcut: './favicon.ico'
    }
};

export default function RootLayout({
  children,
}: Readonly<{
    children: React.ReactNode,
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${gopher.variable} ${gopherBold.variable} antialiased relative`}>
      <ThemeProvider>
      <Nav />
      <main className="container relative z-10">
          <ThemeToggle />
        {children}
      </main>
      <Footer />
      </ThemeProvider>
      </body>
    </html>
  );
}
