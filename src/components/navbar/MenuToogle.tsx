import { AiOutlineMenuFold } from "react-icons/ai";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

function MenuToogle({ toogle }: any) {
  return (
    <Button
      onClick={toogle}
      variant={"ghost"}
      className="border-full rounded-full hover:bg-transparent absolute right-8 top-8 bg-transparent"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          stroke="#fff"
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
          stroke="#fff"
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          stroke="#fff"
        />
      </svg>
    </Button>
  );
}

export default MenuToogle;
