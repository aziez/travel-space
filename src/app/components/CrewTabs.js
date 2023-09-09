/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const CustomCarouselIndicators = ({ items, activeIndex, onClick }) => {
  return (
    <ul className="absolute left-0 right-0 flex justify-center md:justify-start custom-carousel-indicators bottom-4">
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => onClick(index)}
          className={`${
            index === activeIndex ? "bg-white" : "bg-gray-300"
          } inline-block w-3 h-3 rounded-full mx-1 cursor-pointer`}
        ></li>
      ))}
    </ul>
  );
};

const CrewTabs = () => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function getCrew() {
      try {
        const res = await fetch("./data/data.json");
        const crew = await res.json();
        setData(crew?.crew);
      } catch (error) {
        throw error;
      }
    }

    getCrew();
  }, []);

  return (
    <div className="w-full h-full m-10 ">
      <Carousel
        className="w-full h-fit"
        activeIndex={activeIndex}
        onSelect={(index) => setActiveIndex(index)} // Untuk mengatur indeks aktif
        indicators={false}
        controls={false}
      >
        {data?.map((item, index) => (
          <Carousel.Item key={index} interval={500}>
            <Row>
              <Col md={6} sm={12}>
                <h2 className="text-gray-400 ">{item?.role}</h2>
                <h1 className="text-white">{item?.name}</h1>
                <p className="text-white">{item?.bio}</p>
              </Col>
              <Col className="flex justify-center " md={6} sm={12}>
                <img
                  src={`/${item?.images?.png}`}
                  alt="images"
                  className="object-scale-down object-center w-1/2 max-h-90"
                />
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
      <CustomCarouselIndicators
        items={data || []}
        activeIndex={activeIndex}
        onClick={(index) => setActiveIndex(index)}
      />

      {/* Gunakan komponen indikator kustom */}
    </div>
  );
};

export default CrewTabs;
