import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  EffectCards,
  EffectFade,
  EffectFlip,
  EffectCube,
  EffectCoverflow,
  EffectCreative,
} from "swiper/modules";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Controller,
} from "swiper/modules";
import { Separator } from "./ui/separator";

interface CarouselProps {
  datas: any[];
  navigation?: boolean;
  pagination?: boolean;
  scrollbar?: boolean;
  sparator?: boolean;
  className?: string;
  effect?: string;
  slideClassName?: string;
  children: (data: any) => ReactNode;
  onSwiper: (swiper: any) => void;
  swiperControl: any;
}

const CarouselComponent = ({
  datas,
  navigation = true,
  pagination = true,
  scrollbar = true,
  sparator = false,
  effect = "",
  className = "",
  slideClassName = "",
  children,
  onSwiper,
  swiperControl,
}: CarouselProps) => {
  const paginationConfig = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<div class="' + className + '"></div>';
    },
  };

  return (
    <Swiper
      navigation={navigation}
      pagination={pagination ? paginationConfig : false}
      scrollbar={scrollbar ? { draggable: true } : false}
      effect={effect ?? ""}
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        Controller,
        EffectCards,
        EffectFade,
        EffectFlip,
        EffectCube,
        EffectCoverflow,
        EffectCreative,
      ]}
      className={`w-full h-full  ${className}`}
      controller={{ control: swiperControl }}
      onSwiper={onSwiper}
    >
      {datas.map((data, index) => (
        <SwiperSlide
          key={index}
          className={`text-white p-4  ${slideClassName}`}
        >
          <div className="flex flex-row w-full">{children(data)}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselComponent;
