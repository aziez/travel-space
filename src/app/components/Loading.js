import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Loading = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: "-65vh",
      transition: {
        duration: 1,
        ease: "linear",
      },
    });
  }, []);

  return (
    <motion.div
      style={{
        width: "100px",
        height: "100px",
        background: "url('./assets/apolo.png') no-repeat center/contain",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
      initial={{ y: "60%" }}
      animate={controls}
    />
  );
};

export default Loading;
