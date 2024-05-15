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
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 90% 50px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 80% 10px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Navbar() {
  const [isOpen, setisOpen] = useCycle(false, true);
  const containerref = useRef(null);
  const currentRute = usePathname();

  // console.log(pathName);

  const navItems = [
    {
      id: 1,
      text: "HOME",
      current: true,
    },
    {
      id: 2,
      text: "DESTINATION",
      current: false,
    },
    {
      id: 3,
      text: "CREW",
      current: false,
    },
    {
      id: 4,
      text: "TECHNOLOGY",
      current: false,
    },
  ];

  const itemStyle = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -10 },
  };

  return (
    <>
      <nav className="flex items-center w-screen mobile:hidden">
        <img
          className="w-10 h-10 rounded-full mx-4"
          alt="logo"
          src={"/assets/shared/logo.svg"}
        />

        <div className="w-[90%] h-1 bg-slate-50 border "></div>

        <motion.ul
          initial="hidden"
          animate="visible"
          className="flex justify-end bg-white   bg-opacity-25 text-black w-screen items-center backdrop-blur-md p-4 "
        >
          {navItems.map((item) => (
            <motion.li
              data-testid={item.id}
              variants={itemStyle}
              whileHover={{
                // scale: 1.2,
                transition: { ease: "easeOut" },
              }}
              key={item.id}
            >
              <Link
                href={item.text.toLowerCase()}
                className={`p-4 font-heading text-sm tablet:text-[10px] ${
                  currentRute === "/" + item.text.toLowerCase()
                    ? "before:w-full"
                    : "before:w-0"
                }  hover:cursor-pointer text-white relative  before:content-[''] before:w-0 before:h-[3px] before:absolute before:-bottom-1 before:left-0 before:bg-white before:hover:w-full before:transition-all before:duration-300`}
              >
                <b>{`0${item.id} `}</b>
                {item.text}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
      <nav className="items-start  mb-4 mt-4 hidden mobile:flex pb-8 ">
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          ref={containerref}
          className="flex w-full items-start justify-end "
        >
          <MenuToogle toogle={() => setisOpen()} />
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={sidebar}
            className="bg-white bg-opacity-25 text-black items-center backdrop-blur-md absolute h-screen z-20"
          >
            <Navigation />
          </motion.div>
        </motion.nav>
      </nav>
    </>
  );
}

export default Navbar;
