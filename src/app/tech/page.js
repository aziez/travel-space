"use client";
import { Canvas } from "@react-three/fiber";
import Planet from "../components/Planet";
import Heading from "../components/Heading";
import { Container } from "react-bootstrap";
import DestinationContent from "../components/Destination";
import TechContent from "../components/Tech";

const Destination = () => {
  return (
    <>
      <Heading active={"/tech"} />
      <TechContent />
    </>
  );
};
export default Destination;
