import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";

export const FontHeading = Bellefair({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: "400",
});

export const FontSubHeading = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sub-heading",
  weight: "400",
});

export const FontSpan = Barlow({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-span",
  weight: "400",
});
