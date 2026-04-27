"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import LeadCaptureModal from "./LeadCaptureModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="pt-28 md:pt-36 pb-10 md:pb-12 bg-white overflow-hidden"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f2f6ff] rounded-[2rem] flex flex-col-reverse md:flex-row items-center relative overflow-visible h-auto md:h-[460px] shadow-[0_25px_60px_-12px_rgba(26,115,232,0.18),0_15px_30px_-10px_rgba(0,0,0,0.12)] border border-blue-50/50">
            {/* Left Content */}
            <div className="flex-1 px-6 pb-10 pt-2 md:py-12 md:pl-16 md:pr-4 z-10 flex flex-col items-center md:items-start text-center md:text-left w-full">
              <h1 className="text-[2.25rem] md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-[1.15] mb-4 md:mb-6">
                Next-Gen <span className="text-[#1a73e8]">Expertise</span><br />
                For Your <span className="text-[#1a73e8]">Enterprise</span>
              </h1>

              <p className="text-[1.05rem] md:text-2xl font-bold text-gray-800 mb-8 max-w-[300px] md:max-w-lg leading-snug mx-auto md:mx-0">
                Cultivate high-performance teams through expert learning.
              </p>

              <div className="grid grid-cols-2 gap-x-2 gap-y-4 md:flex md:flex-wrap md:gap-6 mb-8 w-full max-w-[360px] md:max-w-none md:w-auto text-[12.5px] sm:text-[14px] md:text-base font-semibold text-gray-800 mx-auto md:mx-0 px-2 md:px-0">
                <div className="flex items-center justify-start gap-1.5 md:gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0" />
                  <span className="whitespace-nowrap">Tailored Solutions</span>
                </div>
                <div className="flex items-center justify-start gap-1.5 md:gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0" />
                  <span className="whitespace-nowrap">Industry Insights</span>
                </div>
                <div className="flex items-center justify-start gap-1.5 md:gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0" />
                  <span className="whitespace-nowrap">Expert Guidance</span>
                </div>
                {/* <div className="flex items-center justify-start gap-1.5 md:gap-2">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0" />
                  <span className="whitespace-nowrap">Measurable Impact</span>
                </div> */}
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#1a73e8] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-[16px] md:text-lg transition-all shadow-[0_10px_25px_-5px_rgba(26,115,232,0.4),0_8px_10px_-6px_rgba(26,115,232,0.4)] hover:shadow-[0_20px_35px_-10px_rgba(26,115,232,0.5)] active:scale-[0.98] w-full md:w-auto"
              >
                Enquire Now
              </button>
            </div>

            {/* Right Image */}
            <div className="w-full relative md:absolute md:right-0 md:bottom-0 md:w-1/2 h-[260px] sm:h-[320px] md:h-full flex items-end justify-center md:justify-end pointer-events-none z-0 mt-8 md:mt-0">
              <div className="relative w-[90%] md:w-full h-full">
                <Image
                  src="/images/corporate-big-hero-v4.webp"
                  alt="Enterprise Training Solutions"
                  fill
                  className="object-contain object-bottom md:object-right-bottom scale-100 md:scale-100 origin-bottom md:origin-bottom-right"
                  priority
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
