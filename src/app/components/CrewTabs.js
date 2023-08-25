import { motion, useTransform, useViewportScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Carousel } from "react-bootstrap";

const CrewTabs = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 400], [0, -100]);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
      >
        {data?.map((item, index) => {
          return (
            <Carousel.Item key={index} className="h-full">
              <motion.div
                style={{ y }}
                className="relative flex flex-row items-center content-center justify-between w-full h-full"
              >
                <div className="pr-4">
                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-serif text-xl text-gray-400 md:text-3xl lg:text-3xl"
                  >
                    {item.role}
                  </motion.h4>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-serif text-2xl text-white md:text-5xl lg:text-5xl"
                  >
                    {item.name}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {item.bio}
                  </motion.p>
                </div>

                <div className="absolute inset-x-0 bottom-0">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={`/${item.images?.png}`}
                    alt={"images"}
                  />
                </div>
              </motion.div>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className="absolute flex flex-col items-center justify-center left-4 bottom-4">
        {data?.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`indicator-button w-3 h-3 rounded-full my-1 ${
              index === activeIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CrewTabs;
