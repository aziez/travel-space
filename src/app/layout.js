"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "./components/Loading";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
