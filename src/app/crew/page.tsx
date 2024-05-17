/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import Layout from "@/components/Layout";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  CarouselProvider,
  useCarouselContext,
} from "@/components/ui/carouselContext";
import Autoplay from "embla-carousel-autoplay";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CarouselComponent = ({
  data,
  showImages = false,
  showDesc = false,
}: {
  data: any;
  showImages?: boolean;
  showDesc?: boolean;
}) => {
  const crews = data;
  const [api, setApi] = useState<CarouselApi>();
  const { current, setCurrent } = useCarouselContext();
  const [count, setCount] = useState(0);

  console.log(crews);

  const onSelect = useCallback(() => {
    if (!api) return;
    const selectedIndex = api.selectedScrollSnap();
    setCurrent(selectedIndex + 1);
  }, [api, setCurrent]);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (api && current - 1 !== api.selectedScrollSnap()) {
      api.scrollTo(current - 1);
    }
  }, [api, current]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 20000 })]}
    >
      <div>
        <CarouselContent className="w-full">
          <CarouselDots />
          {crews?.map((crew: any, index: number) => (
            <CarouselItem key={index}>
              {showImages && <img src={crew?.images.webp} alt="profile" />}
              {showDesc && <h3>{crew?.name}</h3>}
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
    </Carousel>
  );
};

const Crew = () => {
  const { data, isLoading, error } = useSWR("/api/data", fetcher);

  console.log(data);

  return (
    <Layout className="bg-crew-mobile sm:bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop xl:bg-crew-desktop 2xl:bg-crew-desktop">
      <CarouselProvider>
        <div className="text-white">
          <h2 className="text-2xl font-subheading text-center uppercase">
            <b>02</b> Meet Your Crew
          </h2>
          <CarouselComponent data={data?.data.crew} showImages={true} />
          <CarouselComponent data={data?.data.crew} showDesc={true} />
        </div>
      </CarouselProvider>
    </Layout>
  );
};

export default Crew;
