"use client";
import { Canvas } from "@react-three/fiber";
import Planet from "../components/Planet";
import Heading from "../components/Heading";
import { Container } from "react-bootstrap";
import DestinationContent from "../components/Destination";

const Destination = () => {
  return (
    <>
      <Heading active={"/destination"} />
      <DestinationContent />
    </>
  );
};
export default Destination;
