import ExploreButton from "@/components/ExploreButton";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <Layout className="bg-home-mobile sm:bg-home-mobile md:bg-home-tablet lg:bg-home-desktop xl:bg-home-desktop 2xl:bg-home-desktop">
      <div className=" h-screen flex  flex-col justify-center items-center  mt-10 md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  ">
        <div className="basis-1/2 text-white flex flex-col   items-start justify-start text-center md:text-start lg:text-start xl:text-start 2xl:text-start m-4">
          <div className="container my-11">
            <h3 className="text-3xl font-subheading">
              So You want to travel to
            </h3>
            <h1 className="text-9xl font-heading my-6">SPACE</h1>
            <span className="font-span text-wrap text-lg block">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </span>
          </div>
        </div>

        <div className="basis-1/2  h-full w-full flex items-center justify-center ">
          <ExploreButton />
        </div>
      </div>
    </Layout>
  );
}
