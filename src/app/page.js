"use client";
import Heading from "./components/Heading";
import HomeContent from "./components/Home";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Heading active={"/"} />
      <HomeContent />
    </div>
  );
}
