'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { images } from '@/utils/images'

const categories = [
  {
    title: 'Community Leaders',
    description: 'Individuals who have made significant contributions to community development and social welfare.',
    image: images.communityLeaders,
  },
  {
    title: 'Innovators',
    description: 'Visionaries who have brought groundbreaking innovations to Hyderabad.',
    image: images.innovators,
  },
  {
    title: 'Educators',
    description: 'Dedicated teachers and educational leaders shaping the future of our youth.',
    image: images.educators,
  },
  {
    title: 'Healthcare Heroes',
    description: "Medical professionals and healthcare workers making a difference in people's lives.",
    image: images.healthcare,
  },
]

export default function WhoNominate() {
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
            Who Can You Nominate?
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Heroes of Hyderabad celebrates individuals across various sectors who have made exceptional contributions to our city.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                {category.title}
              </h3>
              <p className="text-gray-300">
                {category.description}
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
            Nominate a Hero
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
} 