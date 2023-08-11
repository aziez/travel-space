"use client";

import Image from "next/image";
import Planet from "./components/Planet";
import { Canvas } from "@react-three/fiber";
import SkyBG from "./components/SkyBG";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "./components/Heading";
import HomeContent from "./components/Home";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Heading active={"/"} />
      <HomeContent />
    </div>
  );
}
