'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { images } from '@/utils/images'

const features = [
  {
    title: 'Comprehensive Recognition',
    description: 'We celebrate heroes across all sectors, ensuring no contribution goes unnoticed.',
    image: images.communityLeaders,
  },
  {
    title: 'Community-Driven',
    description: 'Nominations come from the community, ensuring authentic representation of local heroes.',
    image: images.innovators,
  },
  {
    title: 'Prestigious Platform',
    description: 'A grand ceremony that gives our heroes the recognition they truly deserve.',
    image: images.eventStage,
  },
]

export default function WhyUnique() {
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
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Why Heroes of Hyderabad is Unique
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Our initiative stands out for its comprehensive approach to recognizing and celebrating local heroes.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
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
            Join the Celebration
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
} 