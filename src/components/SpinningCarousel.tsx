"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images: string[] = [
  "/assets/images/person1.jpg",
  "/assets/images/person2.jpg",
  "/assets/images/person3.jpg",
  "/assets/images/person4.jpg",
  "/assets/images/person5.jpg",
  "/assets/images/person6.jpg",
];

export default function SpinningCarousel() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 0.3); // spin speed
    }, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  const radius = 350;
  const itemCount = images.length;

  return (
    <section className="relative z-30 min-h-screen bg-black py-20 overflow-hidden text-white">
      <div className="text-center mb-12">
        <h2 className="font-lora text-4xl font-bold text-white mb-4">
          The Memory Ride
        </h2>
        <p className="font-poppins text-lg text-gray-300 max-w-xl mx-auto">
          Step onto a rotating stage of stories and unforgettable faces.
        </p>
      </div>

      <div className="relative h-[500px] w-full flex items-center justify-center perspective-[1200px]">
        <div
          className="relative w-[600px] h-[400px] transform-style-preserve-3d"
          style={{
            transform: `rotateY(${angle}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 0.1s linear",
          }}
        >
          {images.map((src, index) => {
            const theta = (360 / itemCount) * index;
            const transform = `rotateY(${theta}deg) translateZ(${radius}px)`;

            return (
              <div
                key={index}
                className="absolute top-0 left-0 w-[180px] h-[240px] shadow-lg"
                style={{
                  transform,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="w-full h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur">
                  <Image
                    src={src}
                    alt={`Carousel ${index}`}
                    width={180}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
