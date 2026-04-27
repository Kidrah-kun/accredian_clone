"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Bayer_logo.svg",
    quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
  {
    id: 2,
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    quote: "The technical expertise and professional approach of the Accredian team have been instrumental in our digital transformation journey. Their tailored programs are truly world-class.",
  },
  {
    id: 3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    quote: "Working with Accredian has been a game-changer for our talent development. Their focus on emerging technologies perfectly aligns with our innovation goals.",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      if (activeIndex < TESTIMONIALS.length - 1) setActiveIndex(activeIndex + 1);
    } else if (info.offset.x > swipeThreshold) {
      if (activeIndex > 0) setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Enquire Now Button */}
        <div className="flex justify-center mb-16 md:mb-20">
          <button className="bg-[#1a73e8] text-white px-10 py-3.5 rounded-lg font-bold text-lg shadow-[0_8px_25px_rgba(26,115,232,0.3)] transition-transform hover:scale-105">
            Enquire Now
          </button>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[1.85rem] md:text-[2.5rem] font-bold text-gray-900 mb-2">
            Testimonials from <span className="text-[#1a73e8]">Our Partners</span>
          </h2>
          <p className="text-gray-500 font-medium text-base md:text-lg">
            What <span className="text-[#1a73e8]">Our Clients</span> Are Saying
          </p>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-10 flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center p-3 mb-8 shadow-sm">
                <img src={t.logo} alt="Partner Logo" className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed italic">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View: Slider */}
        <div className="lg:hidden relative min-h-[350px]">
          <div className="overflow-hidden px-2">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", damping: 30, stiffness: 150 }}
              className="flex cursor-grab active:cursor-grabbing"
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-8 md:p-10 flex flex-col min-h-[300px]">
                    <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center p-3 mb-6 shadow-sm">
                      <img src={t.logo} alt="Partner Logo" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-700 text-[1.05rem] md:text-lg leading-relaxed">
                      "{t.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "bg-[#1a73e8] w-6" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
