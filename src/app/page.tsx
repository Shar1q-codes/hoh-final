"use client";

import { useEffect } from "react";
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
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 3000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {/* Background fallback */}
      <div className="fixed top-0 left-0 w-full h-full bg-black -z-20" />

      <div className="relative z-0">
        <Navigation />

        <div>
          <ParallaxWrapper speed={0} isFirst>
            <div id="intro">
              <IntroScene />
            </div>
          </ParallaxWrapper>

          <ParallaxWrapper speed={0.2} className="mt-[-10vh]">
            <div id="what-is-hoh">
              <WhatIsHoH />
            </div>
          </ParallaxWrapper>
          <ParallaxWrapper
            speed={0.3}
            className="mt-[30vh] mb-[100vh] sm:mt-[80vh] sm:mb-[80vh] md:mt-[70vh] md:mb-[70vh]"
          >
            <div id="jury" className="scroll-mt-20">
              <Jury />
            </div>
          </ParallaxWrapper>

          <ParallaxWrapper
            speed={0.2}
            className="mt-[20vh] sm:mt-[80vh] md:mt-[70vh]"
          >
            <div id="guests" className="scroll-mt-20">
              <Guests />
            </div>
          </ParallaxWrapper>

          <ParallaxWrapper
            speed={0.3}
            className="mt-[30vh] sm:mt-[80vh] md:mt-[70vh]"
          >
            <div id="advisory" className="scroll-mt-20">
              <Advisory />
            </div>
          </ParallaxWrapper>

          <ParallaxWrapper
            speed={0.4}
            className="mt-[20vh] sm:mt-[80vh] md:mt-[70vh]"
          >
            <div id="why-now" className="scroll-mt-20">
              <WhyNow />
            </div>
          </ParallaxWrapper>

          <ParallaxWrapper
            speed={0.3}
            className="mt-[30vh] mb-[100vh] sm:mt-[80vh] sm:mb-[80vh] md:mt-[70vh] md:mb-[70vh]"
          >
            <div id="who-nominate" className="scroll-mt-20">
              <WhoNominate />
            </div>
          </ParallaxWrapper>

          <ParallaxWrapper
            speed={0.4}
            className="mt-[30vh] sm:mt-[80vh] md:mt-[70vh]"
          >
            <div id="why-unique" className="scroll-mt-20">
              <WhyUnique />
            </div>
          </ParallaxWrapper>

          <ParallaxWrapper
            speed={0.3}
            className="mt-[30vh] sm:mt-[80vh] md:mt-[70vh]"
          >
            <div id="event-night" className="scroll-mt-20">
              <EventNight />
            </div>
          </ParallaxWrapper>

          <ParallaxWrapper
            speed={0.2}
            className="mt-[30vh] sm:mt-[80vh] md:mt-[70vh]"
          >
            <div id="nominate" className="scroll-mt-20">
              <NominateNow />
            </div>
          </ParallaxWrapper>

          <ParallaxWrapper
            speed={0.2}
            className="mt-[30vh] mb-[10vh] sm:mt-[80vh] sm:mb-[80vh] md:mt-[70vh] md:mb-[70vh]"
          >
            <div id="sponsors" className="scroll-mt-20">
              <Sponsors />
            </div>
          </ParallaxWrapper>
        </div>

        <Footer />
      </div>
    </>
  );
}
