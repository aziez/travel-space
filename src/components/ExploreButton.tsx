"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

function ExploreButton() {
  const buttonStyle = {
    hover: {
      scale: 1.1,
      boxShadow: "4px 4px 4px 40px  rgba(255, 255, 255, 0.8)",
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
      className="flex items-center justify-center w-60 h-60 rounded-full center "
    >
      <Button
        variant={"outline"}
        className="w-full h-full text-3xl text-black bg-white rounded-full text-heading "
      >
        EXPLORE
      </Button>
    </motion.div>
  );
}

export default ExploreButton;
