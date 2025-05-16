"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxWrapperProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  isFirst?: boolean;
}

const ParallaxWrapper = ({
  children,
  speed = 0.5,
  className = "",
  isFirst = false,
}: ParallaxWrapperProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end start"], // ✅ Delay section entry
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isFirst ? ["0%", "0%"] : [`${speed * 100}%`, "0%"]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y, willChange: "transform" }} // ✅ GPU boost + cleaner animation
      className={`relative ${
        !isFirst ? "min-h-screen" : "h-screen"
      } z-[1] ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxWrapper;
