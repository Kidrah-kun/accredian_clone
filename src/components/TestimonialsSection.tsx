"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const TESTIMONIALS = [
  {
    review:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    logo: "/images/adp.svg",
    name: "ADP",
  },
    {
    review:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    logo: "/images/bayer.svg",
    name: "Bayer",
  },
  {
    review:
      "Working with Accredian has been a transformative experience for our team. Their tailored approach to training and deep industry knowledge helped us bridge critical skill gaps and drive measurable business impact.",
    logo: "/images/rel.png",
    name: "Reliance",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to middle card for visual balance

  return (
    <section id="testimonials" className="pt-8 pb-16 bg-white overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[1.75rem] md:text-[2.5rem] font-bold text-gray-900 mb-3">
            Testimonials from <span className="text-[#1a73e8]">Our Partners</span>
          </h2>
          <p className="text-gray-500 font-medium text-base md:text-lg">
            What <span className="text-[#1a73e8]">Our Clients</span> Are Saying
          </p>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-10 shadow-sm border border-gray-200 flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-10 relative mb-8">
                <Image
                  src={t.logo}
                  alt={t.name}
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-gray-800 text-[16px] font-medium leading-relaxed italic">
                &quot;{t.review}&quot;
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View: Swappable Cards */}
        <div className="lg:hidden mb-12 relative h-auto">
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="w-full flex-shrink-0 px-2">
                <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-gray-200 h-full flex flex-col">
                  <div className="w-16 h-10 relative mb-8">
                    <Image
                      src={t.logo}
                      alt={t.name}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <p className="text-gray-800 text-[15px] md:text-[16px] font-medium leading-relaxed italic">
                    &quot;{t.review}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-2.5 rounded-full shadow-sm transition-all duration-300 ${
                activeIndex === i ? "bg-[#1a73e8]" : "bg-gray-200"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
