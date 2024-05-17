"use client";
import ExploreButton from "@/components/ExploreButton";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Scene from "@/components/Object3D";
import { SkeletonImage } from "@/components/skeleton/Images";
import { Skeleton3DObject } from "@/components/skeleton/Object";
import { SingleText } from "@/components/skeleton/SingleText";
import { SkeletonTabs } from "@/components/skeleton/Tabs";
import { TextBlock } from "@/components/skeleton/TextBlock";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Suspense, useEffect } from "react";
import useSWR from "swr";

const fatcher = (url: any) => fetch(url).then((data) => data?.json());

const TabsComponent = (data: any) => {
  const destinations = data?.data;

  const TabListHeading = () => {
    return (
      <TabsList className="bg-transparent grid w-full grid-cols-6 items-center justify-center desktop:justify-start desktop:grid-cols-5  ">
        <TabsTrigger value="" className="desktop:hidden"></TabsTrigger>
        {destinations.map((destination: any, index: number) => (
          <TabsTrigger
            className="relative text-white bg-transparent font-subheading uppercase before:z-10 before:content-['']  before:h-[3px] before:absolute before:-bottom-1 before:left-0 before:bg-white hover:before:w-full before:transition-all before:duration-300 before:w-full rounded-none outline-none 
          data-[state=inactive]:before:w-0 data-[state=active]:font-bold data-[state=active]:bg-transparent data-[state=active]:text-white "
            key={index}
            value={destination?.name.toLowerCase()}
          >
            {destination?.name}
          </TabsTrigger>
        ))}
        <TabsTrigger value=""></TabsTrigger>
      </TabsList>
    );
  };

  return (
    <Tabs defaultValue="moon">
      {destinations.map((destination: any) => (
        <TabsContent
          key={`content-${destination.name}`}
          value={destination.name.toLowerCase()}
          className="text-white text-center grid grid-rows-2  desktop:grid-cols-2 items-center justify-center desktop:text-start"
        >
          <div className="h-full tablet:h-[500px] ">
            <Suspense fallback={<Skeleton3DObject size="50px" />}>
              <Scene model={destination.model} />
            </Suspense>
          </div>
          <div>
            <TabListHeading />
            <TabDescription desc={destination} />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

const TabDescription = (desc: any) => {
  const data = desc?.desc || null;
  // console.log(data);

  return (
    <>
      <h1 className="text-6xl  text-wrap font-heading uppercase desktop:text-9xl">
        {data?.name}
      </h1>
      <span className="font-span text-[15px] block leading-5 tablet:text-lg tablet:leading-8 desktop:text-lg">
        {data?.description}
      </span>
      <Separator className="my-4" />
      <div className="grid  grid-rows-2 grid-cols-1 my-2 uppercase items-center justify-center tablet:grid-cols-2 desktop:grid-cols-2 desktop:grid-rows-1">
        <div className="flex flex-col my-1">
          <h3 className="font-subheading text-sm">AVG. DISTANCE</h3>
          <span className="font-heading text-xl font-semibold">
            {data?.distance}
          </span>
        </div>
        <div className="flex flex-col my-1">
          <h3 className="font-subheading text-sm">EST. TRAVEL TIME</h3>
          <span className="font-heading text-xl font-semibold">
            {data?.travel}
          </span>
        </div>
      </div>
    </>
  );
};

export default function Destination() {
  const { data, isLoading, error } = useSWR("/api/data", fatcher);

  return (
    <Layout className="bg-destination-mobile mobile:bg-destination-mobile tablet:bg-destination-tablet desktop:bg-destination-desktop xl:bg-destination-desktop 2xl:bg-destination-desktop">
      <div className="text-white">
        <h2 className="text-2xl uppercase font-subheading text-white text-center desktop:text-start desktop:text-4xl">
          <b>01</b> Pick Your Destination
        </h2>
        <div className="text-justify text-wrap w-full min-h-screen flex flex-col justify-center items-center">
          {isLoading ? (
            <SkeletonTabs />
          ) : (
            <TabsComponent data={data?.data?.destinations} />
          )}
        </div>
      </div>
    </Layout>
  );
}
