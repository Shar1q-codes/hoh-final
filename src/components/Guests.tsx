'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { images } from '@/utils/images'

const specialGuests = [
  {
    name: 'Dr. Rahul Verma',
    role: 'Chief Guest',
    bio: 'Renowned social activist and former UN Goodwill Ambassador.',
    image: images.guests[0],
  },
  {
    name: 'Priya Sharma',
    role: 'Guest of Honor',
    bio: 'Award-winning journalist and documentary filmmaker.',
    image: images.guests[1],
  },
  {
    name: 'Dr. Maya Patel',
    role: 'Keynote Speaker',
    bio: 'Leading expert in sustainable urban development.',
    image: images.guests[2],
  },
]

export default function Guests() {
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
            Special Guests
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Join us in welcoming our distinguished guests who will grace the ceremony.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {specialGuests.map((guest, index) => (
            <motion.div
              key={guest.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="relative mb-4 h-64 overflow-hidden rounded-lg">
                <Image
                  src={guest.image}
                  alt={guest.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold text-white">
                {guest.name}
              </h3>
              <p className="mb-2 text-sm font-semibold text-gold">
                {guest.role}
              </p>
              <p className="text-gray-300">
                {guest.bio}
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