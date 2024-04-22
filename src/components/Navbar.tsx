/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { Button } from "./ui/button";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useDimensions } from "./navbar/use-dimensions";
import MenuToogle from "./navbar/MenuToogle";
import { MenuItem } from "./navbar/MenuItem";
import Navigation from "./navbar/Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 80% 50px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(25px at 80% 50px)",
    transition: {
      delay: 0.5,
      // type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Navbar() {
  const [isOpen, setisOpen] = useCycle(false, true);
  const containerref = useRef(null);

  const navItems = [
    {
      id: 1,
      text: "HOME",
    },
    {
      id: 2,
      text: "DESTINATION",
    },
    {
      id: 3,
      text: "CREW",
    },
    {
      id: 4,
      text: "TECHNOLOGY",
    },
  ];

  const ulStyle = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const itemStyle = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -10 },
  };

  return (
    <nav className="shadow-xl flex  justify-normal items-center h-24 max-w[1024px]  px-4 ">
      <img
        className="w-10 h-10 rounded-full"
        alt="logo"
        src={"/assets/shared/logo.svg"}
      />

      <svg
        className="hidden md:flex -mr-28"
        width="800"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          stroke-linecap="undefined"
          stroke-linejoin="undefined"
          id="svg_1"
          y2="297"
          x2="775.44513"
          y1="297"
          x1="26"
          stroke-width="4"
          stroke="gray"
          fill="none"
        />
      </svg>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={ulStyle}
        className="hidden md:flex z-10 bg-white border  bg-opacity-25 text-black w-[45%] items-center justify-start backdrop-blur-[20px] p-4 rounded-lg"
      >
        {navItems.map((item) => (
          <motion.li
            data-testid={item.id}
            variants={itemStyle}
            whileHover={{
              // scale: 1.2,
              marginRight: "5px",
              transition: { ease: "easeOut" },
            }}
            key={item.id}
            className="p-4 font-heading hover:cursor-pointer text-black relative before:z-10 before:content-[''] before:w-0 before:h-[3px] before:absolute before:bottom-0 before:left-0 before:bg-black before:hover:w-full before:transition-all before:duration-300"
          >
            <b>{`0${item.id} `}</b>
            {item.text}
          </motion.li>
        ))}
      </motion.ul>

      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerref}
        className="md:hidden absolute top-0 right-0  h-full "
      >
        <motion.div
          className="w-[300px] absolute top-0 right-0 bg-black opacity-30 backdrop-blur-xl h-[100%]"
          variants={sidebar}
        />
        <Navigation />

        <MenuToogle toogle={() => setisOpen()} />
      </motion.nav>
    </nav>
  );
}

export default Navbar;
