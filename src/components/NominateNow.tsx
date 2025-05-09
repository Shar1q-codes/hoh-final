'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeIn, slideUp } from '@/utils/animations'
import Image from 'next/image'
import { images } from '@/utils/images'

const categories = [
  'Community Leader',
  'Innovator',
  'Educator',
  'Healthcare Hero',
  'Environmental Champion',
  'Cultural Ambassador',
  'Youth Leader',
  'Social Entrepreneur',
]

const NominateNow = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    organization: '',
    phone: '',
    email: '',
    linkedin: '',
    instagram: '',
    facebook: '',
    about: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

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
            Nominate a Hero
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Help us recognize the extraordinary individuals who make Hyderabad a better place.
          </p>
        </motion.div>

        <motion.form
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="mx-auto max-w-3xl space-y-6 rounded-lg bg-white/5 p-8 backdrop-blur-sm"
        >
          {/* Required Fields */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-600 bg-black/50 p-3 text-white placeholder-gray-400 focus:border-white focus:outline-none"
                placeholder="Enter full name"
              />
            </div>

            <div>
              <label htmlFor="designation" className="mb-2 block text-sm font-medium text-white">
                Designation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-600 bg-black/50 p-3 text-white placeholder-gray-400 focus:border-white focus:outline-none"
                placeholder="Enter designation"
              />
            </div>

            <div>
              <label htmlFor="organization" className="mb-2 block text-sm font-medium text-white">
                Organization <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-600 bg-black/50 p-3 text-white placeholder-gray-400 focus:border-white focus:outline-none"
                placeholder="Enter organization name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-600 bg-black/50 p-3 text-white placeholder-gray-400 focus:border-white focus:outline-none"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-600 bg-black/50 p-3 text-white placeholder-gray-400 focus:border-white focus:outline-none"
                placeholder="Enter email address"
              />
            </div>
          </div>

          {/* Social Media Links */}
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <label htmlFor="linkedin" className="mb-2 block text-sm font-medium text-white">
                LinkedIn
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-600 bg-black/50 p-3 text-white placeholder-gray-400 focus:border-white focus:outline-none"
                placeholder="LinkedIn profile URL"
              />
            </div>

            <div>
              <label htmlFor="instagram" className="mb-2 block text-sm font-medium text-white">
                Instagram
              </label>
              <input
                type="url"
                id="instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-600 bg-black/50 p-3 text-white placeholder-gray-400 focus:border-white focus:outline-none"
                placeholder="Instagram profile URL"
              />
            </div>

            <div>
              <label htmlFor="facebook" className="mb-2 block text-sm font-medium text-white">
                Facebook
              </label>
              <input
                type="url"
                id="facebook"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-600 bg-black/50 p-3 text-white placeholder-gray-400 focus:border-white focus:outline-none"
                placeholder="Facebook profile URL"
              />
            </div>
          </div>

          {/* About Section */}
          <div>
            <label htmlFor="about" className="mb-2 block text-sm font-medium text-white">
              About You <span className="text-red-500">*</span>
            </label>
            <textarea
              id="about"
              name="about"
              value={formData.about}
              onChange={handleChange}
              required
              rows={4}
              className="w-full rounded-lg border border-gray-600 bg-black/50 p-3 text-white placeholder-gray-400 focus:border-white focus:outline-none"
              placeholder="Tell us about yourself and your contributions"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-full bg-white px-8 py-3 text-lg font-semibold text-black transition-colors hover:bg-gray-100"
          >
            Submit Nomination
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  )
}

export default NominateNow 