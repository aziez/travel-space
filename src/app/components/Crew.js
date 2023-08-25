import Image from "next/image";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const CrewContent = () => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  useEffect(() => {
    async function fetchData() {
      const req = await fetch("./data/data.json");
      const res = await req.json();
      setData(res.crew);
    }

    fetchData();
    console.log("<<<", data);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
        className="h-full"
      >
        {data?.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="flex flex-col h-full md:flex-row md:items-center md:justify-between">
              <div className="md:w-1/2 md:order-2">
                <Image
                  layout="fill"
                  objectFit="contain"
                  maxHeight={500}
                  src={`/${item.images?.png}`}
                  alt={"images"}
                />
              </div>
              <div className="p-4 md:w-1/2 md:order-1 md:text-right">
                <h4 className="font-serif text-xl text-gray-400 md:text-3xl lg:text-3xl">
                  {item.role}
                </h4>
                <h1 className="font-serif text-2xl text-white md:text-5xl lg:text-5xl">
                  {item.name}
                </h1>
                <p className="text-gray-400">{item.bio}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="absolute items-center justify-center left-4 bottom-4">
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

export default CrewContent;
