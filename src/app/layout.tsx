import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { FontHeading, FontSpan, FontSubHeading } from "@/styles/font";

export const metadata: Metadata = {
  title: "Space Tourism App",
  description: "Generated by create next app",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--fonnt-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          FontHeading.variable,
          FontSubHeading.variable,
          FontSpan.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}