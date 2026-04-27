"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lightbulb, Brain, Users, BarChart3, Settings, Globe, 
  Banknote, MonitorCheck, MonitorX, GraduationCap, Briefcase 
} from "lucide-react";

const EXPERTISE = [
  { title: "Product & Innovation Hub", icon: Lightbulb },
  { title: "Gen-AI Mastery", icon: Brain },
  { title: "Leadership Elevation", icon: Users },
  { title: "Tech & Data Insights", icon: BarChart3 },
  { title: "Operations Excellence", icon: Settings },
  { title: "Digital Enterprise", icon: Globe },
  { title: "Fintech Innovation Lab", icon: Banknote },
];

const SEGMENTS = [
  {
    title: "Program Specific",
    desc: "Certificate, Executive, Post Graduate Certificate",
    img: "/images/project-management-v2.webp",
  },
  {
    title: "Industry Specific",
    desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    img: "/images/digital-transformation-v2.webp",
  },
  {
    title: "Topic Specific",
    desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    img: "/images/data-science-v2.webp",
  },
  {
    title: "Level Specific",
    desc: "Senior Leadership, Mid-Career Professionals, Freshers",
    img: "/images/senior-management-v2.webp",
  },
];

export default function SpecializationsSection() {
  return (
    <>
      {/* The Accredian Edge */}
      <section id="specializations" className="py-10 md:py-16 bg-white overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-[2.5rem] font-bold text-gray-900 mb-2">
              The <span className="text-[#1a73e8]">Accredian Edge</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg">
              Key Aspects of <span className="text-[#1a73e8]">Our Strategic Training</span>
            </p>
          </div>

          <div className="hidden md:flex justify-center">
            <Image
              src="/images/accredian-edge-usp-v3.svg"
              alt="Accredian Edge Process"
              width={1200}
              height={400}
              className="w-full max-w-full h-auto"
            />
          </div>
          <div className="flex md:hidden justify-center px-2">
            <Image
              src="/images/accredian-edge-usp-mobile.svg"
              alt="Accredian Edge Process Mobile"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Our Domain Expertise */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-[1.85rem] md:text-[2.5rem] font-bold text-gray-900 mb-1">
              Our <span className="text-[#1a73e8]">Domain Expertise</span>
            </h2>
            <p className="text-gray-500 font-medium text-base md:text-lg">
              <span className="text-[#1a73e8]">Specialized Programs</span> Designed to Fuel Innovation
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-5 lg:gap-5 max-w-[1000px] mx-auto">
            {EXPERTISE.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-full lg:rounded-[0.85rem] shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-200/60 py-2.5 lg:py-6 px-4 lg:px-8 flex flex-row lg:flex-col items-center justify-start lg:justify-center gap-2 lg:gap-4 transition-all hover:shadow-md w-[calc(50%-8px)] lg:w-[320px] min-h-[48px] lg:h-[150px]"
                >
                  <div className="text-[#1a73e8] shrink-0">
                    <Icon className="w-6 h-6 lg:w-11 lg:h-11" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm lg:text-[1.1rem] leading-tight text-left lg:text-center">
                    {exp.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tailored Course Segmentation */}
      <CourseSegmentationSlider />

      {/* Who Should Join */}
      <section className="bg-[#1a73e8] text-white pt-10 lg:pt-16 pb-12 lg:pb-0 overflow-hidden relative mt-16 mb-20 rounded-[1.5rem] mx-4 sm:mx-6 lg:mx-8 max-w-[1320px] xl:mx-auto shadow-lg">
        <div className="max-w-[1250px] mx-auto px-6 sm:px-10 relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-4">
            {/* Left Content (PC: Image + Title) */}
            <div className="lg:w-[55%] flex flex-col justify-between">
              <div>
                <p className="text-white text-lg lg:text-xl font-medium mb-1">Who Should Join?</p>
                <h2 className="text-[1.85rem] md:text-[2.5rem] lg:text-[2.85rem] font-bold leading-tight mb-4 whitespace-nowrap">
                  Strategic Skill Enhancement
                </h2>
              </div>
              <div className="hidden lg:block relative h-[350px] w-full mt-auto -ml-12 overflow-visible">
                <Image
                  src="/images/imagehuman.png"
                  alt="Professionals"
                  fill
                  className="object-contain object-bottom scale-[1.3] origin-bottom-left"
                />
              </div>
            </div>

            {/* Right Content (PC: Grid | Mobile: List) */}
            <div className="lg:w-[45%] flex flex-col gap-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12 pt-4 pb-8 lg:pb-16">
              <div className="flex flex-row lg:flex-col items-start gap-4 lg:gap-0">
                <div className="lg:mb-4 shrink-0">
                  <MonitorCheck strokeWidth={2} className="text-white w-8 h-8 lg:w-[42px] lg:h-[42px]" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-1 lg:mb-3">Tech Professionals</h3>
                  <p className="text-blue-50 leading-relaxed text-[15px] lg:text-[16px]">
                    Enhance expertise, embrace tech, drive innovation.
                  </p>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-start gap-4 lg:gap-0">
                <div className="lg:mb-4 shrink-0">
                  <MonitorX strokeWidth={2} className="text-white w-8 h-8 lg:w-[42px] lg:h-[42px]" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-1 lg:mb-3">Non-Tech Professionals</h3>
                  <p className="text-blue-50 leading-relaxed text-[15px] lg:text-[16px]">
                    Adapt digitally, collaborate in tech environments.
                  </p>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-start gap-4 lg:gap-0">
                <div className="lg:mb-4 shrink-0">
                  <GraduationCap strokeWidth={2} className="text-white w-8 h-8 lg:w-[42px] lg:h-[42px]" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-1 lg:mb-3">Emerging Professionals</h3>
                  <p className="text-blue-50 leading-relaxed text-[15px] lg:text-[16px]">
                    Develop powerful skills for rapid career growth.
                  </p>
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-start gap-4 lg:gap-0">
                <div className="lg:mb-4 shrink-0">
                  <Briefcase strokeWidth={2} className="text-white w-8 h-8 lg:w-[42px] lg:h-[42px]" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-1 lg:mb-3">Senior Professionals</h3>
                  <p className="text-blue-50 leading-relaxed text-[15px] lg:text-[16px]">
                    Strengthen leadership, enhance strategic decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CourseSegmentationSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    const velocityThreshold = 500;
    
    // Left Swipe (finger moves left) -> Next
    if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      if (activeIndex < SEGMENTS.length - 1) setActiveIndex(activeIndex + 1);
    } 
    // Right Swipe (finger moves right) -> Prev
    else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      if (activeIndex > 0) setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[1.75rem] md:text-[2.5rem] font-bold text-gray-900 mb-2">
            Tailored <span className="text-[#1a73e8]">Course Segmentation</span>
          </h2>
          <p className="text-gray-500 font-medium text-base md:text-lg">
            Explore <span className="text-[#1a73e8]">Custom-fit Courses</span> Designed to Address Every Professional Focus
          </p>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {SEGMENTS.map((seg, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col border border-gray-100/50 transition-transform hover:-translate-y-1">
              <div className="relative h-48 w-full">
                <Image src={seg.img} alt={seg.title} fill className="object-cover" />
              </div>
              <div className="p-8 text-center flex-1 bg-white">
                <h3 className="text-[#1a73e8] font-bold text-xl mb-3">{seg.title}</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">{seg.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: Continuous Snap Slider (1:1 Parity) */}
        <div className="lg:hidden mb-10 overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={handleDragEnd}
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ type: "spring", damping: 30, stiffness: 150 }}
            className="flex cursor-grab active:cursor-grabbing touch-pan-y" 
          >
            {SEGMENTS.map((seg, i) => (
              <div key={i} className="w-full flex-shrink-0 px-8">
                <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col border border-gray-100/50 h-full">
                  <div className="relative h-60 w-full">
                    <Image 
                      src={seg.img} 
                      alt={seg.title} 
                      fill 
                      className="object-cover" 
                      priority={i === 0} 
                    />
                  </div>
                  <div className="py-8 px-4 text-center bg-white">
                    <h3 className="text-[#1a73e8] font-bold text-2xl tracking-wide">{seg.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex lg:hidden justify-center gap-3">
          {SEGMENTS.map((_, i) => (
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
