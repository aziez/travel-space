import ExploreButton from "@/components/ExploreButton";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <Layout className="bg-home-mobile sm:bg-home-mobile md:bg-home-tablet lg:bg-home-desktop xl:bg-home-desktop 2xl:bg-home-desktop">
      <div>
        <Navbar />
        <ExploreButton />
      </div>
    </Layout>
  );
}
