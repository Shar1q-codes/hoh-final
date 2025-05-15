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
    offset: ["start end", "end start"],
  });

  // For motion: parallax Y shift
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isFirst ? ["0%", "0%"] : [`${speed * 100}%`, "0%"]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`relative ${
        !isFirst ? "min-h-screen" : "h-screen"
      } z-[1] ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxWrapper;
