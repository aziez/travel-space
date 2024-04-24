"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

function ExploreButton() {
  const buttonStyle = {
    hover: {
      scale: 1.1,
      boxShadow: "10px 10px 10px 30px rgba(255, 255, 255, .8)",
    },
    pressed: {
      scale: 0.5,
    },
    rest: {
      scale: 1,
    },
  };
  return (
    <motion.div
      initial={"rest"}
      whileHover={"hover"}
      whileTap={"pressed"}
      variants={buttonStyle}
      className="flex items-center justify-center w-40 h-40 rounded-full center "
    >
      <Button
        variant={"outline"}
        className="w-40 h-40 text-3xl text-black bg-white rounded-full text-heading "
      >
        EXPLORE
      </Button>
    </motion.div>
  );
}

export default ExploreButton;
