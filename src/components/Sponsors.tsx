"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, slideUp } from "@/utils/animations";

const sponsors = [
  {
    name: "TechCorp",
    category: "Platinum Sponsor",
    logo: "/assets/images/sponsor-1.svg",
  },
  {
    name: "Global Industries",
    category: "Gold Sponsor",
    logo: "/assets/images/sponsor-2.svg",
  },
  {
    name: "City Bank",
    category: "Silver Sponsor",
    logo: "/assets/images/sponsor-3.svg",
  },
  {
    name: "Innovate Solutions",
    category: "Bronze Sponsor",
    logo: "/assets/images/sponsor-4.svg",
  },
  {
    name: "Future Group",
    category: "Bronze Sponsor",
    logo: "/assets/images/sponsor-5.svg",
  },
  {
    name: "Heritage Foundation",
    category: "Bronze Sponsor",
    logo: "/assets/images/sponsor-6.svg",
  },
];

const Sponsors = () => {
  const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end start"],
  // });

  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section
      ref={ref}
      id="sponsors"
      className="relative min-h-screen bg-black pt-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative z-10 mb-16 text-center"
        >
          <h2 className="mb-6 font-lora text-4xl font-bold text-white md:text-5xl">
            Our Sponsors
          </h2>
          <p className="mx-auto max-w-3xl font-poppins text-lg text-gray-300">
            Proudly supported by leading organizations committed to community
            development
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="group relative overflow-hidden rounded-lg bg-black/50 p-8 backdrop-blur-sm"
            >
              <div className="relative h-[200px]">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="mb-1 font-lora text-xl font-bold text-white">
                  {sponsor.name}
                </h3>
                <p className="font-poppins text-sm text-gold">
                  {sponsor.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="mt-16 text-center"
        >
          <h3 className="mb-4 font-lora text-2xl font-bold text-white">
            Become a Sponsor
          </h3>
          <p className="mx-auto max-w-2xl font-poppins text-lg text-gray-300">
            Join us in recognizing and celebrating Hyderabad&rsquo;s heroes.
            Contact us to learn about sponsorship opportunities.
          </p>
          <button className="mt-6 rounded-full bg-gold px-8 py-3 font-poppins text-lg font-semibold text-black transition-all hover:bg-gold/90">
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Background Gradient */}
      {/* <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(212,175,55,0.05),_transparent_50%)]" />
      </motion.div> */}
    </section>
  );
};

export default Sponsors;
