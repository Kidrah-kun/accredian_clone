import Image from "next/image";
import { Lightbulb, BrainCircuit, Users, BarChart3, Settings, Globe, CircleDollarSign, MonitorCheck, MonitorX, GraduationCap, Briefcase } from "lucide-react";

const EXPERTISE = [
  { title: "Product & Innovation Hub", icon: Lightbulb },
  { title: "Gen-AI Mastery", icon: BrainCircuit },
  { title: "Leadership Elevation", icon: Users },
  { title: "Tech & Data Insights", icon: BarChart3 },
  { title: "Operations Excellence", icon: Settings },
  { title: "Digital Enterprise", icon: Globe },
  { title: "Fintech Innovation Lab", icon: CircleDollarSign },
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
              src="/images/accredian-edge-usp-v3.svg"
              alt="Accredian Edge Process Mobile"
              width={1200}
              height={400}
              className="w-full h-auto scale-[1.1] sm:scale-100"
            />
          </div>
        </div>
      </section>

      {/* Our Domain Expertise */}
      <section className="py-12 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-[2.5rem] font-bold text-gray-900 mb-2">
              Our <span className="text-[#1a73e8]">Domain Expertise</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg">
              <span className="text-[#1a73e8]">Specialized Programs</span> Designed to Fuel Innovation
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 max-w-[1050px] mx-auto">
            {EXPERTISE.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 py-6 px-6 w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.25rem)] flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.12)]"
                >
                  <Icon size={42} strokeWidth={2.5} className="text-[#1a73e8] mb-4" />
                  <h3 className="font-bold text-gray-900 text-base">{exp.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tailored Course Segmentation */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2.5rem] font-bold text-gray-900 mb-2">
              Tailored <span className="text-[#1a73e8]">Course Segmentation</span>
            </h2>
            <p className="text-gray-600 font-medium text-lg">
              Explore <span className="text-[#1a73e8]">Custom-fit Courses</span> Designed to Address Every Professional Focus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SEGMENTS.map((seg, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col border border-gray-100/50">
                <div className="relative h-48 w-full">
                  <Image src={seg.img} alt={seg.title} fill className="object-cover" />
                </div>
                <div className="p-8 text-center flex-1 bg-white">
                  <h3 className="text-[#1a73e8] font-bold text-xl mb-3">{seg.title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">{seg.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="bg-[#1a73e8] text-white pt-6 pb-0 overflow-hidden relative mt-16 mb-20 rounded-[1.5rem] mx-4 sm:mx-6 lg:mx-8 max-w-[1320px] xl:mx-auto shadow-lg">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-4">
            <div className="lg:w-[58%] flex flex-col justify-between">
              <div>
                <p className="text-blue-100 text-xl font-medium mb-1">Who Should Join?</p>
                <h2 className="text-4xl lg:text-[2.85rem] font-bold leading-tight mb-4 whitespace-nowrap">
                  Strategic Skill Enhancement
                </h2>
              </div>
              <div className="relative h-[200px] sm:h-[300px] w-full mt-auto lg:-ml-12 overflow-visible">
                <Image
                  src="/images/imagehuman.png"
                  alt="Professionals"
                  fill
                  className="object-contain object-bottom scale-[1.3] origin-bottom-left"
                />
              </div>
            </div>

            <div className="lg:w-[42%] grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 pt-4 pb-8">
              <div className="flex flex-col">
                <div className="mb-4">
                  <MonitorCheck size={48} strokeWidth={1.5} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Tech Professionals</h3>
                <p className="text-blue-100 leading-relaxed text-[15.5px]">
                  Enhance expertise, embrace tech, drive innovation.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-4">
                  <MonitorX size={48} strokeWidth={1.5} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Non-Tech Professionals</h3>
                <p className="text-blue-100 leading-relaxed text-[15.5px]">
                  Adapt digitally, collaborate in tech environments.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-4">
                  <GraduationCap size={48} strokeWidth={1.5} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Emerging Professionals</h3>
                <p className="text-blue-100 leading-relaxed text-[15.5px]">
                  Develop powerful skills for rapid career growth.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-4">
                  <Briefcase size={48} strokeWidth={1.5} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Senior Professionals</h3>
                <p className="text-blue-100 leading-relaxed text-[15.5px]">
                  Strengthen leadership, enhance strategic decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
