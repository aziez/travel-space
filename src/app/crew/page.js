"use client";
import { Canvas } from "@react-three/fiber";
import Planet from "../components/Planet";
import Heading from "../components/Heading";
import CrewContent from "../components/Crew";

const Crew = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Heading active={"/crew"} />
      <CrewContent />
    </div>
  );
};

export default Crew;
