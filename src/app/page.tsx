"use client";

import { useEffect, useState } from "react";
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
  const [introLock, setIntroLock] = useState(true);

  useEffect(() => {
    if (introLock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const timer = setTimeout(() => {
      setIntroLock(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [introLock]);

  return (
    <>
      {/* Background Layer */}
      <div className="fixed top-0 left-0 w-full h-full bg-black -z-20" />
      <div className="relative z-0">
        <Navigation />

        {/* Hero Scene (fixed layer, not parallax-wrapped) */}
        <div id="intro" className="relative z-[100]">
          <IntroScene />
        </div>

        {/* Scroll buffer after hero */}
        <div className="h-[10vh]" />

        {!introLock && (
          <>
            <ParallaxWrapper speed={0.2} className="relative z-40">
              <div id="what-is-hoh">
                <WhatIsHoH />
              </div>
            </ParallaxWrapper>

            <ParallaxWrapper
              speed={0.3}
              className="relative z-30 section-spacing"
            >
              <div id="jury" className="scroll-mt-20">
                <Jury />
              </div>
            </ParallaxWrapper>

            <ParallaxWrapper
              speed={0.2}
              className="relative z-30 section-spacing"
            >
              <div id="guests" className="scroll-mt-20">
                <Guests />
              </div>
            </ParallaxWrapper>

            <ParallaxWrapper
              speed={0.3}
              className="relative z-30 section-spacing"
            >
              <div id="advisory" className="scroll-mt-20">
                <Advisory />
              </div>
            </ParallaxWrapper>

            <ParallaxWrapper
              speed={0.4}
              className="relative z-30 section-spacing"
            >
              <div id="why-now" className="scroll-mt-20">
                <WhyNow />
              </div>
            </ParallaxWrapper>

            <ParallaxWrapper
              speed={0.3}
              className="relative z-30 section-spacing"
            >
              <div id="who-nominate" className="scroll-mt-20">
                <WhoNominate />
              </div>
            </ParallaxWrapper>

            <ParallaxWrapper
              speed={0.4}
              className="relative z-30 section-spacing"
            >
              <div id="why-unique" className="scroll-mt-20">
                <WhyUnique />
              </div>
            </ParallaxWrapper>

            <ParallaxWrapper
              speed={0.3}
              className="relative z-30 section-spacing"
            >
              <div id="event-night" className="scroll-mt-20">
                <EventNight />
              </div>
            </ParallaxWrapper>

            <ParallaxWrapper
              speed={0.2}
              className="relative z-30 section-spacing"
            >
              <div id="nominate" className="scroll-mt-20">
                <NominateNow />
              </div>
            </ParallaxWrapper>

            <ParallaxWrapper
              speed={0.2}
              className="relative z-30 section-spacing"
            >
              <div id="sponsors" className="scroll-mt-20">
                <Sponsors />
              </div>
            </ParallaxWrapper>

            <Footer />
          </>
        )}
      </div>
    </>
  );
}
