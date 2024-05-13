"use client";
import ExploreButton from "@/components/ExploreButton";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Scene from "@/components/pages/destination.tsx/ObjectTabs";
import { SkeletonImage } from "@/components/skeleton/Images";
import { Skeleton3DObject } from "@/components/skeleton/Object";
import { SingleText } from "@/components/skeleton/SingleText";
import { SkeletonTabs } from "@/components/skeleton/Tabs";
import { TextBlock } from "@/components/skeleton/TextBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Suspense, useEffect } from "react";
import useSWR from "swr";

const fatcher = (url: any) => fetch(url).then((data) => data?.json());

const TabsComponent = (data: any) => {
  const destinations = data?.data;

  return (
    <Tabs defaultValue="moon" className="shadow-[0_2px_10px] shadow-blackA2">
      {destinations.map((destination: any, index: number) => (
        <TabsList
          key={index}
          className="bg-transparent rounded-none active:rounded-none"
        >
          <TabsTrigger
            className="relative text-xl font-subheading text-white before:z-10 before:content-['']  before:h-[3px] before:absolute before:-bottom-1 before:left-0 before:bg-white hover:before:w-full before:transition-all before:duration-300 data-[state=active]:bg-transparent before:w-full rounded-none outline-none 
          data-[state=inactive]:before:w-0 data-[state=active]:text-white data-[state=active]:font-bold"
            value={destination?.name.toLowerCase()}
          >
            {destination?.name}
          </TabsTrigger>
        </TabsList>
      ))}
      {destinations.map((destination: any) => (
        <TabsContent
          key={`content-${destination.name}`}
          value={destination.name.toLowerCase()}
          className="text-lg font-span text-white"
        >
          <div className="flex h-[500px] flex-col items-center justify-center lg:flex-row lg:text-start">
            <Suspense fallback={<Skeleton3DObject size="500px" />}>
              <Scene model={destination.model} />
            </Suspense>
            {destination.description}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default function Destination() {
  const { data, isLoading, error } = useSWR("/api/data", fatcher);

  return (
    <Layout className="bg-destination-mobile sm:bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop xl:bg-destination-desktop 2xl:bg-destination-desktop">
      <h2 className="text-2xl font-subheading">
        <b>01</b> Pick Your Destination
      </h2>
      <div className="h-full w-full flex items-center justify-center ">
        {isLoading ? (
          <SkeletonTabs />
        ) : (
          <TabsComponent data={data?.data?.destinations} />
        )}
      </div>
    </Layout>
  );
}
