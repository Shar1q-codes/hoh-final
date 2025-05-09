'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.style.scrollMarginTop = '120px'
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsOpen(false)
  }

  const navItems = [
    { id: 'intro', label: 'Home' },
    { id: 'what-is-hoh', label: 'What is HoH' },
    { id: 'why-now', label: 'Why Now' },
    { id: 'who-nominate', label: 'Who to Nominate' },
    { id: 'why-unique', label: 'Why Unique' },
    { id: 'event-night', label: 'Event Night' },
    { id: 'nominate', label: 'Nominate' },
    { id: 'jury', label: 'Jury' },
    { id: 'guests', label: 'Guests' },
    { id: 'advisory', label: 'Advisory' },
    { id: 'sponsors', label: 'Sponsors' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          {/* Logo */}
          <div className="flex-shrink-0 -mt-8">
            <Link href="/" className="block">
              {!logoError ? (
                <div className="relative w-[300px] h-[220px]">
                  <Image
                    src="/assets/images/logo.png"
                    alt="Heroes of Hyderabad"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                <div className="text-4xl font-bold text-gold">HoH</div>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12 -mt-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-gold px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('nominate')}
              className="bg-gold text-black px-8 py-3 rounded-full font-medium text-sm hover:bg-gold/90 transition-all duration-300 cursor-pointer"
            >
              Nominate Now
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden -mt-8">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-gold block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('nominate')}
                className="w-full bg-gold text-black px-6 py-3 rounded-full font-medium text-base hover:bg-gold/90 transition-all duration-300 cursor-pointer mt-4"
              >
                Nominate Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation 