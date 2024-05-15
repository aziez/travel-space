import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const currentRute = usePathname();
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="list-none  flex items-center align-center cursor-pointer "
    >
      <div className="w-[200px] h-[40px] ">
        <Link
          href={`/${text.toLowerCase()}`}
          className={`p-4 font-heading ${
            currentRute === "/" + text.toLowerCase()
              ? "before:w-full"
              : "before:w-0"
          }  hover:cursor-pointer text-white relative before:content-[''] before:w-0 before:h-[3px] before:absolute before:-bottom-1 before:left-0 before:bg-white before:hover:w-full before:transition-all before:duration-300`}
        >
          <b>0{i}</b> {text}
        </Link>
      </div>
    </motion.li>
  );
};
