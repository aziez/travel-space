import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 40,
    opacity: 1,
    transition: {
      y: { stiffness: 0, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 0 },
    },
  },
};

export const MenuItem = ({ i, text }: any) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className=" list-none mb-3  flex items-center align-basline cursor-pointer"
    >
      <div className="w-[200px] h-[40px]  mr-4 ">
        <Link
          href={`/${text}`}
          className="p-4 font-heading text-md hover:cursor-pointer text-white relative before:z-10 before:content-[''] before:w-0 before:h-[3px] before:absolute before:bottom-0 before:left-0 before:bg-white before:hover:w-full before:transition-all before:duration-300"
        >
          <b>0{i}</b> {text}
        </Link>
      </div>
      {/* <div className="w-[200px] h-[20px] flex[1]" style={style}>
        MENU
      </div> */}
    </motion.li>
  );
};
