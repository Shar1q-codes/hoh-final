'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { images } from '@/utils/images'

export default function WhatIsHoH() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black py-20">
      {/* Background Images with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="relative h-full w-full">
          <Image
            src={images.crowdCelebration}
            alt="Crowd Celebration"
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
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Column - Text */}
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-6 text-3xl font-bold text-white md:text-4xl"
            >
              What is Heroes of Hyderabad?
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6 text-lg text-gray-300"
            >
              Heroes of Hyderabad is a prestigious initiative that recognizes and celebrates the extraordinary individuals who have made significant contributions to our city's growth and development. These unsung heroes work tirelessly across various sectors to make Hyderabad a better place for everyone.
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300"
            >
              Through this platform, we aim to shine a spotlight on their remarkable achievements and inspire others to follow in their footsteps. Join us in honoring these exceptional individuals who embody the true spirit of Hyderabad.
            </motion.p>
          </div>

          {/* Right Column - Images */}
          <div className="relative h-[400px] md:h-[500px]">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute inset-0"
            >
              <Image
                src={images.communityLeaders}
                alt="Community Leaders"
                fill
                className="rounded-lg object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 h-[200px] w-[200px] md:h-[250px] md:w-[250px]"
            >
              <Image
                src={images.innovators}
                alt="Innovators"
                fill
                className="rounded-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 