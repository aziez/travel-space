"use client";
import { Canvas } from "@react-three/fiber";
import Planet from "../components/Planet";
import Heading from "../components/Heading";
import { Container } from "react-bootstrap";
import DestinationContent from "../components/Destination";
import CrewContent from "../components/Crew";

const Destination = () => {
  return (
    <>
      <Heading active={"/crew"} />
      <CrewContent />
    </>
  );
};
export default Destination;
