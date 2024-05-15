"use client";

import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

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

function Navigation() {
  return (
    <motion.ul
      variants={variants}
      className="flex h-[48px] flex-col justify-items-start"
    >
      {navItems.map((el, index) => (
        <MenuItem i={index} text={el.text} key={el.id} />
      ))}
    </motion.ul>
  );
}

export default Navigation;
