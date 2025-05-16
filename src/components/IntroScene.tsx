"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { images } from "@/utils/images";

export default function IntroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Background Zoom-Out & Fade
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  // Content Motion
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-100px"]);

  return (
    <div
      ref={containerRef}
      className="relative h-[200vh] z-[100]" // ✅ Top layer scroll trap
    >
      {/* Sticky Hero Layer */}
      <div className="sticky top-0 h-screen min-h-[600px] overflow-hidden origin-top">
        {/* Background Charminar */}
        <motion.div
          style={{ scale: bgScale, opacity: bgOpacity }}
          className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden origin-top"
        >
          <Image
            src={images.hyderabadSkyline}
            alt="Center Charminar"
            fill
            className="object-fit max-w-none"
            priority
          />
        </motion.div>

        {/* HERO CONTENT */}
        <motion.div
          style={{ opacity: contentOpacity, scale: contentScale, y: contentY }}
          className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white"
        >
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Heroes of Hyderabad
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 max-w-2xl text-base sm:mb-8 sm:text-lg md:text-xl"
          >
            Celebrating the unsung heroes who make Hyderabad a better place
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <a
              href="#nominate"
              className="inline-block rounded-full bg-white px-6 py-2 text-base font-semibold text-black transition-colors hover:bg-gray-100 sm:px-8 sm:py-3 sm:text-lg"
            >
              Nominate Now
            </a>
          </motion.div>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        >
          <div className="h-8 w-6 rounded-full border-2 border-white p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="h-2 w-2 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
