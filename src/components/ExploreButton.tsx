"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

function ExploreButton() {
  const buttonStyle = {
    hover: {
      scale: 1.1,
      boxShadow: "3px 3px 3px 30px  rgba(255, 255, 255, 0.8)",
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
      className={`flex items-center justify-center rounded-full center h-40 w-40 tablet:h-60 tablet:w-60 desktop:h-60 desktop:w-60`}
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
