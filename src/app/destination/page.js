"use client";
import { Canvas } from "@react-three/fiber";
import Planet from "../components/Planet";
import Heading from "../components/Heading";
import { Container } from "react-bootstrap";
import DestinationContent from "../components/Destination";

const Destination = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Heading active={"/destination"} />
      <DestinationContent />
    </div>
  );
};
export default Destination;
