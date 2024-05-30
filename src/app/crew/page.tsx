/* eslint-disable @next/next/no-img-element */
"use client";

import useSWR from "swr";
import Layout from "@/components/Layout";
import CarouselComponent from "@/components/Caraousel";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Crew = () => {
  const { data, error } = useSWR("/api/data", fetcher);
  const [control1, setControl1] = useState(null);
  const [control2, setControl2] = useState(null);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Layout
        scrolled={true}
        className="bg-crew-mobile sm:bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop xl:bg-crew-desktop 2xl:bg-crew-desktop"
      >
        <div className="text-white px-4">
          <h2 className="text-2xl font-subheading text-center uppercase">
            <b>02</b> Meet Your Crew
          </h2>
          <div className="grid grid-flow-row-dense  place-content-top laptop:grid-flow-col-dense ">
            <CarouselComponent
              datas={data.data.crew}
              swiperControl={control2}
              onSwiper={setControl1}
              navigation={false}
              pagination={true}
              scrollbar={false}
              sparator={false}
              className=""
              // effect="flip"
            >
              {(data) => (
                <div className="flex flex-row  h-[50vh] w-full justify-center items-end ">
                  <img
                    alt="Images"
                    className="h-full object-contain mb-4 mobile:border-b-2  "
                    src={data?.images?.webp}
                  />
                </div>
              )}
            </CarouselComponent>

            <CarouselComponent
              datas={data.data.crew}
              swiperControl={control1}
              onSwiper={setControl2}
              scrollbar={false}
              navigation={false}
              pagination={true}
              sparator={true}
            >
              {(data) => {
                // console.log(data);
                return (
                  <div className="flex flex-col items-center text-center h-[50vh]">
                    <h4 className="font-subheading uppercase text-gray-400 ">
                      {data?.role}
                    </h4>
                    <h1 className="font-heading text-lg uppercase text-white">
                      {data?.name}
                    </h1>
                    <h4 className="text-white font-span block text-justify ">
                      {data?.bio}
                    </h4>
                  </div>
                );
              }}
            </CarouselComponent>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Crew;
