"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { images } from "@/utils/images";

const juryMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Education Expert",
    bio: "Leading educational reform initiatives in Hyderabad for over 15 years.",
    image: images.jury[0],
  },
  {
    name: "Rajesh Kumar",
    role: "Tech Innovator",
    bio: "Pioneering sustainable technology solutions for urban development.",
    image: images.jury[1],
  },
  {
    name: "Dr. Priya Sharma",
    role: "Healthcare Leader",
    bio: "Transforming healthcare accessibility in underserved communities.",
    image: images.jury[2],
  },
  {
    name: "Amit Patel",
    role: "Social Entrepreneur",
    bio: "Creating impactful social enterprises that address local challenges.",
    image: images.jury[3],
  },
  {
    name: "Meera Reddy",
    role: "Cultural Ambassador",
    bio: "Preserving and promoting Hyderabad's rich cultural heritage.",
    image: images.jury[4],
  },
];

export default function Jury() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black py--20">
      {/* Background with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src={images.judgesSilhouettes}
            alt="Judges Silhouettes"
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
            Our Jury
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Meet the distinguished panel of experts who will evaluate and select
            our heroes.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {juryMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="relative mb-4 h-64 overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold text-white">
                {member.name}
              </h3>
              <p className="mb-2 text-sm font-semibold text-gold">
                {member.role}
              </p>
              <p className="text-gray-300">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
