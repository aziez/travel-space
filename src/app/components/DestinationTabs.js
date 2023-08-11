import { CameraControls, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Planet from "./Planet";
import { Tab, Tabs } from "react-bootstrap";
import { Container } from "postcss";
import PlanetCanvas from "./Planet";
import path from "path";
import fsPromises from "fs/promises";
import { useEffect, useState } from "react";

const TabCard = ({ text }) => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const req = await fetch("./data/data.json");
      const res = await req.json();
      setData(res.destinations);
    }

    fetchData();
  }, []);

  // console.log("DATAAAA", data);

  return (
    <div>
      {data ? (
        <Tabs defaultActiveKey={data[0].name} variant="underline" fill>
          {data.map((item) => (
            <Tab
              key={item.name}
              tabClassName="text-white"
              eventKey={item.name}
              title={item.name}
            >
              <div className="container">
                <h1 className="font-serif text-white text-5xl text-center md:text-9xl lg:text-9xl">
                  {item.name.toUpperCase()}
                </h1>
                <p className="text-white text-sm px-6">{item.description}</p>
                <div className="w-full border-b-4 border-gray-400"></div>
                <div className="flex flex-row sm:flex-col gap-8 text-center justify-center content-between items-center">
                  <div>
                    <p className="text-sm text-white ">AVG. DISTANCE</p>
                    <p className="text-sm text-white font-bold">
                      {item.distance}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-white text-center ">
                      EST. TRAVEL TIME
                    </p>
                    <p className="text-sm text-white font-bold">
                      {item.travel}
                    </p>
                  </div>
                </div>
              </div>
            </Tab>
          ))}
        </Tabs>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

const DestinationTabs = () => {
  return (
    <>
      <div className="flex flex-col items-center content-center justify-between w-full h-full mx-4 my-4 md:flex-row lg:flex-row">
        <div className="flex-1 h-[360px]">
          <PlanetCanvas />
        </div>
        <div className="flex-1 h-full">
          <TabCard />
        </div>
      </div>
    </>
  );
};
export default DestinationTabs;
