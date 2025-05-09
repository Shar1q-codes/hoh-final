"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { images } from "@/utils/images";

const eventDetails = [
  {
    title: "Grand Ceremony",
    description: "A prestigious awards ceremony honoring our city's heroes.",
    image: images.eventStage,
  },
  {
    title: "Networking",
    description: "Connect with like-minded individuals and community leaders.",
    image: images.crowdCelebration,
  },
  {
    title: "Celebration",
    description: "An evening of celebration, inspiration, and recognition.",
    image: images.communityLeaders,
  },
];

export default function EventNight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black py-20">
      {/* Background with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src={images.eventStage}
            alt="Event Stage"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-7xl px-4"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            The Event Night
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Join us for an unforgettable evening celebrating Hyderabad&rsquo;s
            finest heroes.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {eventDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
                <Image
                  src={detail.image}
                  alt={detail.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                {detail.title}
              </h3>
              <p className="text-gray-300">{detail.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#nominate"
            className="inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-black transition-colors hover:bg-gray-100"
          >
            Get Your Tickets
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
