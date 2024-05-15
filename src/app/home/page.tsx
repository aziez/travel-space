import ExploreButton from "@/components/ExploreButton";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Layout className="bg-home-mobile mobile:bg-home-mobile tablet:bg-home-tablet desktop:bg-home-desktop xl:bg-home-desktop 2xl:bg-home-desktop">
      <div className="text-center h-screen text-wrap flex flex-col items-center justify-center desktop:flex-row desktop:text-start">
        <div className="text-white block w-full desktop:w-1/2">
          <h3 className="text-xl font-subheading py-4 tablet:text-4xl desktop:text-4xl">
            So, You want to travel to
          </h3>
          <h1 className="font-heading text-7xl mt-3 mb-6 mobile:my-4 tablet:text-9xl desktop:text-9xl">
            SPACE
          </h1>
          <span className="font-span text-[15px] text-balance block leading-8 tablet:text-xl desktop:text-[18px] ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </span>
        </div>
        <div className="mt-10 flex justify-center tablet:mt-20 desktop:items-center desktop:mt-0">
          <Link href={"/destination"}>
            <ExploreButton />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
