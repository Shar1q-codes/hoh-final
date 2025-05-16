"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [overrideId, setOverrideId] = useState<string | null>(null);
  const [overrideEnabled, setOverrideEnabled] = useState(false);

  const navItems = [
    { id: "jury", label: "Jury" },
    { id: "guests", label: "Guests" },
    { id: "advisory", label: "Advisory" },
    { id: "sponsors", label: "Sponsors" },
  ];

  const activeId = useScrollSpy(
    navItems.map((item) => item.id),
    0,
    overrideId,
    overrideEnabled
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setOverrideId(id);
      setOverrideEnabled(true);

      const yOffset = el.getBoundingClientRect().top + window.pageYOffset;
      const visualOffset = window.innerHeight * 0.45;
      const scrollTarget = yOffset - visualOffset;
      window.scrollTo({ top: scrollTarget, behavior: "smooth" });

      // Allow scroll + underline to sync before returning to observer
      setTimeout(() => {
        setOverrideEnabled(false);
        setOverrideId(null);
      }, 600);
    }
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-5 h-24 items-center text-white max-w-[1920px] mx-auto px-6">
        {navItems.slice(0, 2).map((item) => (
          <div key={item.id} className="flex justify-center">
            <button
              onClick={() => scrollToSection(item.id)}
              className="group uppercase tracking-wide font-medium text-sm cursor-pointer relative"
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-6 bg-white transition-transform duration-300 origin-center
                ${
                  activeId === item.id
                    ? "scale-x-100"
                    : "group-hover:scale-x-100 scale-x-0"
                }`}
              />
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        ))}

        {/* Center Logo */}
        <div
          className="flex justify-center cursor-pointer"
          onClick={scrollToTop}
        >
          {!logoError ? (
            <Image
              src="/assets/images/logo.png"
              alt="Heroes of Hyderabad"
              width={180}
              height={50}
              className="object-contain"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="text-white text-xl font-bold">HoH</div>
          )}
        </div>

        {navItems.slice(2).map((item) => (
          <div key={item.id} className="flex justify-center">
            <button
              onClick={() => scrollToSection(item.id)}
              className="group uppercase tracking-wide font-medium text-sm cursor-pointer relative"
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-6 bg-white transition-transform duration-300 origin-center
                ${
                  activeId === item.id
                    ? "scale-x-100"
                    : "group-hover:scale-x-100 scale-x-0"
                }`}
              />
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        ))}
      </div>

      {/* Mobile Header */}
      <div className="flex justify-between items-center px-6 h-20 md:hidden">
        <div
          className="flex justify-center cursor-pointer"
          onClick={scrollToTop}
        >
          {!logoError ? (
            <Image
              src="/assets/images/logo.png"
              alt="Heroes of Hyderabad"
              width={150}
              height={42}
              className="object-contain"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="text-white text-xl font-bold">HoH</div>
          )}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/90 flex flex-col items-center justify-center space-y-10 z-40"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
              aria-label="Close menu"
            >
              ×
            </button>

            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.1 }}
                className="text-white uppercase text-xl font-semibold tracking-widest cursor-pointer"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
