"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navItems = [
    { id: "jury", label: "Jury" },
    { id: "guests", label: "Guests" },
    { id: "advisory", label: "Advisory" },
    { id: "sponsors", label: "Sponsors" },
  ];

  const activeId = useScrollSpy(navItems.map((item) => item.id));
  const navRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.style.scrollMarginTop = "120px";
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed height-0 top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 h-32">
        <div className="hidden md:flex justify-between items-center h-full relative">
          {navItems.slice(0, 2).map((item) => (
            <div key={item.id} className="flex-1 flex justify-center">
              <button
                ref={(el) => {
                  navRefs.current[item.id] = el;
                }}
                onClick={() => scrollToSection(item.id)}
                className="relative flex flex-col items-center text-white hover:text-gold px-3 py-2 text-sm font-medium transition duration-200 cursor-pointer"
              >
                {item.label}
                <motion.div
                  layoutId="navDot"
                  className={`mt-1 w-2 h-2 rounded-full transition-all duration-300 ${
                    activeId === item.id
                      ? "bg-gold scale-100"
                      : "bg-red-500 scale-0"
                  }`}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            </div>
          ))}

          <div className="flex-1 flex justify-center">
            <Link href="/" className="block">
              {!logoError ? (
                <div className="relative w-[240px] h-[160px] cursor-pointer">
                  <Image
                    src="/assets/images/logo.png"
                    alt="Heroes of Hyderabad"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                <div className="text-3xl font-bold text-gold">HoH</div>
              )}
            </Link>
          </div>

          {navItems.slice(2).map((item) => (
            <div key={item.id} className="flex-1 flex justify-center">
              <button
                ref={(el) => {
                  navRefs.current[item.id] = el;
                }}
                onClick={() => scrollToSection(item.id)}
                className="relative flex flex-col items-center text-white hover:text-gold px-3 py-2 text-sm font-medium transition duration-200 cursor-pointer"
              >
                {item.label}
                <motion.div
                  layoutId="navDot"
                  className={`mt-1 w-2 h-2 rounded-full transition-all duration-300 ${
                    activeId === item.id
                      ? "bg-gold scale-100"
                      : "bg-red-500 scale-0"
                  }`}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            </div>
          ))}
        </div>

        <div className="md:hidden flex justify-end items-center h-20">
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="px-4 pt-2 pb-3 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-gold block w-full text-left px-3 py-2 text-base font-medium cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
