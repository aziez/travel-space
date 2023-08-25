import { Tab, Tabs } from "react-bootstrap";
import { useEffect, useState } from "react";

import PlanetCanvas from "./Planet";

const DestinationTabs = ({ text }) => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const req = await fetch("./data/data.json");
      const res = await req.json();
      setData(res?.destinations);
      setActiveTab(res?.destinations[0]?.name);
      setSelectedData(res?.destinations[0]);
    }

    fetchData();
  }, []);

  const handleTabChange = (tabName) => {
    const selectedDestination = data.find((item) => item.name === tabName);
    setSelectedData(selectedDestination);
    setActiveTab(tabName);
  };

  // console.log("DATAAAA", selectedData);

  return (
    <>
      <div className="flex flex-col items-center content-center justify-between w-full h-full mx-4 my-4 md:flex-row lg:flex-row">
        <div className="flex-1 h-[360px]">
          <PlanetCanvas data={selectedData} />
        </div>
        <div className="flex-1 h-full">
          <div>
            {data.length > 0 ? (
              <Tabs
                defaultActiveKey={activeTab}
                variant="underline"
                fill
                onSelect={(tabName) => handleTabChange(tabName, data)}
              >
                {data.map((item) => (
                  <Tab
                    key={item.name}
                    tabClassName="text-white"
                    eventKey={item.name}
                    title={item.name}
                  >
                    <div className="container">
                      <h1 className="font-serif text-5xl text-center text-white md:text-9xl lg:text-9xl">
                        {item.name.toUpperCase()}
                      </h1>
                      <p className="px-6 text-sm text-white">
                        {item.description}
                      </p>
                      <div className="w-full border-b-4 border-gray-400"></div>
                      <div className="flex flex-row items-center content-between justify-center gap-8 text-center sm:flex-col">
                        <div>
                          <p className="text-sm text-white ">AVG. DISTANCE</p>
                          <p className="text-sm font-bold text-white">
                            {item.distance}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-center text-white ">
                            EST. TRAVEL TIME
                          </p>
                          <p className="text-sm font-bold text-white">
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
        </div>
      </div>
    </>
  );
};

// const DestinationTabs = () => {
//   return (
//
//   );
// };
export default DestinationTabs;
