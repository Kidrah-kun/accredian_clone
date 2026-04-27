import Image from "next/image";
import { BarChart2, Presentation, MonitorPlay } from "lucide-react";

const STEPS = [
  {
    step: "1",
    title: "Skill Gap Analysis",
    desc: "Assess team skill gaps and developmental needs.",
    icon: BarChart2,
  },
  {
    step: "2",
    title: "Customized Training Plan",
    desc: "Create a tailored roadmap addressing organizational goals.",
    icon: Presentation,
  },
  {
    step: "3",
    title: "Flexible Program Delivery",
    desc: "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: MonitorPlay,
  },
];

export default function HowItWorksSection() {
  return (
    <>
      {/* The CAT Framework */}
      <section id="cat" className="pt-20 pb-16 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left md:text-center mb-16">
            <h2 className="text-[1.85rem] md:text-[2.5rem] font-bold text-gray-900 mb-2">
              The <span className="text-[#1a73e8]">CAT Framework</span>
            </h2>
            <p className="text-gray-500 font-medium text-base md:text-lg">
              Our Proven Approach to <span className="text-[#1a73e8]">Learning Excellence</span>
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/catV2.svg"
              alt="The CAT Framework: Concept, Application, Tools"
              width={1000}
              height={400}
              className="w-full max-w-[1000px] h-auto px-2"
            />
          </div>
        </div>
      </section>

      {/* How We Deliver Results */}
      <section id="how-it-works" className="py-12 md:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16 px-4">
            <h2 className="text-[1.85rem] md:text-[2.5rem] font-bold text-gray-900 mb-2">
              How We <span className="text-[#1a73e8]">Deliver Results</span> That Matter?
            </h2>
            <p className="text-gray-500 font-medium text-base md:text-lg">
              A Structured Three-Step Approach to <span className="text-[#1a73e8]">Skill Development</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-18 sm:px-8 lg:px-12">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="bg-white rounded-[1.25rem] py-8 md:py-12 px-6 md:px-6 border border-[#1a73e8]/30 text-center relative transition-all hover:shadow-2xl group flex flex-col items-center justify-center min-h-[160px] md:min-h-[260px] shadow-[0_8px_30px_rgba(26,115,232,0.12)]"
                >
                  {/* Left Sidebar (Blue) */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[7.5px] h-[45%] bg-[#1a73e8] rounded-r-full shadow-[0_0_10px_rgba(26,115,232,0.15)]"></div>
                  
                  {/* Right Sidebar (Blue - Mobile Only) */}
                  <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 w-[7.5px] h-[45%] bg-[#1a73e8] rounded-l-full shadow-[0_0_10px_rgba(26,115,232,0.15)]"></div>

                  {/* Step Badge */}
                  <div className="absolute top-2 left-2 md:top-3 md:left-3 z-10">
                    <div className="w-8 h-8 md:w-7 md:h-7 rounded-full border-2 border-blue-50 bg-white flex items-center justify-center text-[#1a73e8] text-[13px] md:text-[12px] font-extrabold shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                      {step.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#1a73e8] rounded-full shadow-lg shadow-blue-200/20 mb-4 md:mb-6 flex-shrink-0">
                    <Icon size={22} className="text-white md:hidden" strokeWidth={2.5} />
                    <Icon size={30} className="text-white hidden md:block" strokeWidth={2} />
                  </div>

                  {/* Text (Title) */}
                  <h3 className="text-[17px] md:text-xl font-bold text-gray-900 leading-tight text-center md:mb-3">
                    {step.title}
                  </h3>

                  {/* Description (Desktop Only) */}
                  <p className="text-gray-500 text-[15px] leading-relaxed max-w-[240px] hidden md:block">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
