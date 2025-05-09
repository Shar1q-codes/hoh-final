"use client";

import { useEffect } from "react";
// import { motion } from 'framer-motion'
import Navigation from "@/components/Navigation";
import IntroScene from "@/components/IntroScene";
import WhatIsHoH from "@/components/WhatIsHoH";
import WhyNow from "@/components/WhyNow";
import WhoNominate from "@/components/WhoNominate";
import WhyUnique from "@/components/WhyUnique";
import EventNight from "@/components/EventNight";
import NominateNow from "@/components/NominateNow";
import Jury from "@/components/Jury";
import Guests from "@/components/Guests";
import Advisory from "@/components/Advisory";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import ParallaxWrapper from "@/components/ParallaxWrapper";

export default function Home() {
  useEffect(() => {
    // Disable scroll on mount
    document.body.style.overflow = "hidden";

    // Enable scroll after intro animation
    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="relative bg-black">
      <Navigation />
      <div className="space-y-[100vh] sm:space-y-[80vh] md:space-y-[70vh]">
        <ParallaxWrapper speed={0.2}>
          <div id="intro" className="scroll-mt-20">
            <IntroScene />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.3}>
          <div id="what-is-hoh" className="scroll-mt-20">
            <WhatIsHoH />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.4}>
          <div id="why-now" className="scroll-mt-20">
            <WhyNow />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper
          speed={0.3}
          className="mb-[100vh] sm:mb-[80vh] md:mb-[70vh]"
        >
          <div id="who-nominate" className="scroll-mt-20">
            <WhoNominate />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper
          speed={0.4}
          className="mt-[100vh] sm:mt-[80vh] md:mt-[70vh]"
        >
          <div id="why-unique" className="scroll-mt-20">
            <WhyUnique />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.3}>
          <div id="event-night" className="scroll-mt-20">
            <EventNight />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.2}>
          <div id="nominate" className="scroll-mt-20">
            <NominateNow />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper
          speed={0.3}
          className="mb-[100vh] sm:mb-[80vh] md:mb-[70vh]"
        >
          <div id="jury" className="scroll-mt-20">
            <Jury />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.2}>
          <div id="guests" className="scroll-mt-20">
            <Guests />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.3}>
          <div id="advisory" className="scroll-mt-20">
            <Advisory />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper
          speed={0.2}
          className="mb-[100vh] sm:mb-[80vh] md:mb-[70vh]"
        >
          <div id="sponsors" className="scroll-mt-20">
            <Sponsors />
          </div>
        </ParallaxWrapper>
      </div>
      <Footer />
    </div>
  );
}
