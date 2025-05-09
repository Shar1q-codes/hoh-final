'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { images } from '@/utils/images'

const timelineEvents = [
  {
    year: '2024',
    title: 'A New Era',
    description: 'Hyderabad stands at the cusp of unprecedented growth and transformation.',
    image: images.educators,
  },
  {
    year: '2023',
    title: 'Rising Momentum',
    description: 'The city witnessed remarkable achievements in technology, healthcare, and education.',
    image: images.healthcare,
  },
  {
    year: '2022',
    title: 'Foundation',
    description: 'The seeds of innovation and community development were sown.',
    image: images.innovators,
  },
]

export default function WhyNow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black py-20">
      {/* Background with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
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
            Why Now?
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            The time is ripe to recognize and celebrate the extraordinary individuals who are shaping Hyderabad's future.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="mb-2 block text-sm font-semibold text-gold">
                {event.year}
              </span>
              <h3 className="mb-2 text-xl font-bold text-white">
                {event.title}
              </h3>
              <p className="text-gray-300">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
} 