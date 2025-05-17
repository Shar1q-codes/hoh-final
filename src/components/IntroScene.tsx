"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { images } from "@/utils/images";
import { useMotionValueEvent } from "framer-motion";

export default function IntroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive image logic
  const [heroImage, setHeroImage] = useState(images.hyderabadSkyline);

  useEffect(() => {
    const updateImage = () => {
      const isMobile = window.innerWidth <= 768;
      setHeroImage(isMobile ? images.heroMobile : images.hyderabadSkyline);
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const sceneOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const sceneVisibility = useTransform(scrollYProgress, (value) =>
    value < 0.6 ? "visible" : "hidden"
  );
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 3]);

  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-100px"]);
  const [pointerActive, setPointerActive] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setPointerActive(latest < 0.6); // disable pointer when fully faded out
  });
  return (
    <div ref={containerRef} className="h-[100vh] relative z-[10]">
      <motion.div
        style={{ opacity: sceneOpacity, visibility: sceneVisibility }}
        className={`fixed top-0 left-0 w-full h-screen z-[150] bg-black isolate overflow-hidden ${
          pointerActive ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <motion.div
          style={{ scale: sceneScale }}
          className="absolute inset-0 z-10"
        >
          <Image
            src={heroImage}
            alt="Charminar"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{
            opacity: contentOpacity,
            scale: contentScale,
            y: contentY,
          }}
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

        {/* Scroll Indicator */}
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
      </motion.div>
    </div>
  );
}
